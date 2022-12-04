import {
  GatewayPresenceUpdate,
  HelloStructure,
} from "../../api/structure/export.ts";
import { GatewayEventPayload } from "../../api/structure/gateway/events/GatewayEventPayload.ts";
import { InvalidSessionStructure } from "../../api/structure/gateway/events/InvalidSessionStructure.ts";
// import { HelloStructure } from "../../api/structure/gateway/events/HelloStructure.ts";
import { GatewayOpcode } from "../../api/structure/gateway/GatewayOpcode.ts";
import { ClientConfiguration } from "../ClientConfiguration.ts";
import { discordUrls } from "../SharedConstants.ts";

export class WebSocketClient {
  configuration;
  ws?: WebSocket;
  additionalData: {
    heartbeatInterval?: number;
    seq?: number;
    sessionId?: number;
    resumeGatewayUrl?: string;
  };

  constructor(configuration: ClientConfiguration) {
    this.configuration = {
      botToken: configuration.botToken,
      intents: configuration.intents,
    };
    this.additionalData = {
      heartbeatInterval: undefined,
      seq: undefined,
      sessionId: undefined,
      resumeGatewayUrl: undefined,
    };
  }

  /****************************************/

  heartbeat() {
    this.sendPayload({
      "op": GatewayOpcode.HEARTBEAT,
      "d": this.additionalData.seq || null,
    });
  }

  identify() {
    this.sendPayload({
      "op": GatewayOpcode.IDENTIFY,
      // TODO: use IdentifyStructure type
      "d": {
        "token": this.configuration.botToken,
        "intents": this.configuration.intents,
        "properties": {
          "os": Deno.build.os,
          "browser": "snoocord",
          "device": "snoocord",
        },
      },
    });
  }

  updatePresence(newPresence?: GatewayPresenceUpdate) {
    throw new Error("Unimplemented method.");
  }

  updateVoiceState(voiceState?: undefined) {
    throw new Error("Unimplemented method.");
  }

  resume(info: {
    sessionId: number;
    seq: number;
  }) {
    this.sendPayload({
      "op": GatewayOpcode.RESUME,
      "d": {
        "token": this.configuration.botToken,
        "session_id": info.sessionId,
        "seq": info.seq,
      },
    });
  }

  requestGuildMember() {
    throw new Error("Unimplemented method.");
  }

  /****************************************/

  heartbeatInfo = {
    timeout: undefined as (number | undefined),
    ceaseHeartbeating: () => {
      const x = this.heartbeatInfo.timeout;
      if (x) clearTimeout(x);
    },
    missedCount: 0,
  };

  beginHeartbeating() {
    const fn = () => {
      this.heartbeatInfo.timeout = setTimeout(() => {
        if (this.heartbeatInfo.missedCount > -3) {
          --this.heartbeatInfo.missedCount;
          this.heartbeat();
        } else {
          this.closeConnection();
          this.openConnection();
        }

        fn();
      }, this.additionalData.heartbeatInterval! * Math.random());
    };

    fn();
  }

  /****************************************/

  map: Record<string, ((data: Record<string, unknown>) => void)[]> = {};

  // registerEventListener<ValidEventName>(eventName: ValidEventName, listener: (type: EventType<ValidEventName>) => unknown) {
  registerEventListener(eventName: string, listener: (data: Record<string, unknown>) => unknown) {
    if (this.map[eventName]) this.map[eventName].push(listener);
    else this.map[eventName] = [listener];
  }

  handleDispatch(eventName: string, data: Record<string, unknown>) {
    (this.map[eventName] ?? []).forEach((fn) => fn(data));
  }

  /****************************************/

  handleHeartbeat() {
    this.heartbeat();
  }

  handleReconnect() {
    this.closeConnection();
    this.openConnection(this.additionalData.resumeGatewayUrl);
  }

  handleInvalidSession(data: boolean) {
    if (data) {
      this.handleReconnect();
    } else {
      // Clear resume information
      this.additionalData.resumeGatewayUrl =
        this.additionalData.seq =
        this
          .additionalData.sessionId =
          undefined;
      this.closeConnection();
      this.openConnection();
    }
  }

  handleHello(data: HelloStructure) {
    this.additionalData.heartbeatInterval = data.heartbeat_interval;
    this.beginHeartbeating();
    this.identifyOrResume();
  }

  handleHeartbeatAck() {
    this.heartbeatInfo.missedCount = 0;
  }

  /****************************************/

  pendingResume = false;

  identifyOrResume() {
    if (
      this.additionalData.sessionId && this.additionalData.resumeGatewayUrl &&
      this.additionalData.seq
    ) {
      this.resume({
        sessionId: this.additionalData.sessionId,
        seq: this.additionalData.seq,
      });
    } else {
      this.identify();
    }
  }

  /****************************************/

  // deno-lint-ignore no-explicit-any
  onGatewayMessage(event: MessageEvent<any>) {
    const data = JSON.parse(event.data) as GatewayEventPayload;

    console.debug(data.op, data.d);

    switch (data.op) {
      case GatewayOpcode.DISPATCH:
        this.handleDispatch(data.t!, data.d! as Record<string, unknown>);
        break;
      case GatewayOpcode.HEARTBEAT:
        this.handleHeartbeat();
        break;
      case GatewayOpcode.RECONNECT:
        this.handleReconnect();
        break;
      case GatewayOpcode.INVALID_SESSION:
        this.handleInvalidSession(data.d as InvalidSessionStructure);
        break;
      case GatewayOpcode.HELLO:
        this.handleHello(data.d as unknown as HelloStructure);
        break;
      case GatewayOpcode.HEARTBEAT_ACK:
        this.handleHeartbeatAck();
        break;
    }
  }

  /****************************************/

  openConnection(url?: string) {
    this.ws = new WebSocket(url ?? discordUrls.wsGateway);

    this.ws.addEventListener(
      "message",
      (message) => void this.onGatewayMessage(message),
    );
    // this.ws.addEventListener(
    //   "close",
    //   (event) => void this.onGatewayClose(event),
    // );
  }

  closeConnection(code = 1000) {
    if (
      this.ws?.readyState !== this.ws?.CLOSED ||
      this.ws?.readyState !== this.ws?.CLOSING
    ) {
      this.ws?.close(code);
    }
    this.heartbeatInfo.ceaseHeartbeating();
    this.ws = undefined;
  }

  /****************************************/

  sendPayload(
    payload: Partial<GatewayEventPayload> & Pick<GatewayEventPayload, "op">,
  ) {
    console.debug('payload sent:', payload)
    if (this.ws?.readyState == this.ws?.OPEN) {
      this.ws!.send(JSON.stringify(Object.assign({ d: null }, payload)));
    }
  }
}

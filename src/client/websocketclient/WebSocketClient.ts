import { GatewayEventPayload } from "../../api/structure/gateway/events/GatewayEventPayload.ts";
import { IdentifyStructure } from "../../api/structure/gateway/events/IdentifyStructure.ts";
import { GatewayOpcode } from "../../api/structure/gateway/GatewayOpcode.ts";
import { HelloPayload } from "../../api/structure/gateway/payloaddata/HelloPayload.ts";
import { ClientConfiguration } from "../ClientConfiguration.ts";
import { discordUrls } from "../SharedConstants.ts";

export class WebSocketClient {
  configuration;
  ws: WebSocket | undefined;
  otherData: {
    heartbeatInterval?: number;
    seq?: number;
  } = {};
  heartbeatManager = {
    timeout: undefined as (number | undefined),
    destroy: () => {
      const timeout = this.heartbeatManager.timeout;
      if (timeout) clearTimeout(timeout);
    },
  };

  constructor(configuration: ClientConfiguration) {
    this.configuration = {
      botToken: configuration.botToken,
      intents: configuration.intents,
    };
  }

  openConnection() {
    this.ws = new WebSocket(discordUrls.wsGateway);
    // this.ws.addEventListener("error", (error) => void this.onGatewayError(error));
    this.ws.addEventListener(
      "message",
      (message) => void this.onGatewayMessage(message),
    );
    this.ws.addEventListener(
      "close",
      (event) => void this.onGatewayClose(event),
    );
  }

  closeConnection(code: 1000 | 1001 = 1000) {
    this.ws?.close(code);
    this.ws = undefined;
  }

  sendPayload(
    payload: Partial<GatewayEventPayload> & Pick<GatewayEventPayload, "op">,
  ) {
    console.debug("payload sent: ", payload);
    if (this.ws?.readyState == this.ws?.OPEN) {
      this.ws!.send(JSON.stringify(Object.assign({ d: null }, payload)));
    }
  }

  onGatewayClose(event: CloseEvent) {
    console.log(event.code);
  }

  onGatewayMessage(messageEvent: MessageEvent<unknown>) {
    const data = JSON.parse(messageEvent.data as string) as GatewayEventPayload;
    console.debug(data);
    switch (data.op) {
      case GatewayOpcode.DISPATCH:
        console.debug("dispatch");
        break;
      case GatewayOpcode.HEARTBEAT:
        this.handleHeartbeating();
        break;
      case GatewayOpcode.HELLO:
        {
          const d = (data.d as unknown) as HelloPayload;
          this.otherData = {
            heartbeatInterval: d.heartbeat_interval,
          };

          this.handleHeartbeating();
          this.identify();
        }
        break;
      case GatewayOpcode.HEARTBEAT_ACK:
        console.debug("pong!");
        break;
    }
  }

  identify() {
    this.sendPayload({
      op: GatewayOpcode.IDENTIFY,
      d: {
        token: this.configuration.botToken,
        intents: this.configuration.intents,
        properties: {
          "os": Deno.build.os,
          "browser": "snoocord",
          "device": "snoocord",
        },
      },
    });
  }

  handleHeartbeating() {
    const sendHeartbeat = () =>
      this.sendPayload({
        "op": GatewayOpcode.HEARTBEAT,
        "s": this.otherData.seq || null,
      });

    const fn = () => {
      this.heartbeatManager.timeout = setTimeout(() => {
        sendHeartbeat();
        fn();
      }, this.otherData.heartbeatInterval! * Math.random());
    };

    fn();
  }
}

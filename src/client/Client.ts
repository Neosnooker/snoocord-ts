import { ClientConfiguration } from "./ClientConfiguration.ts";
import { HTTPClient } from "./httpclient/HTTPClient.ts";
import { WebSocketClient } from "./websocketclient/WebSocketClient.ts";

export class Client {
  private configuration: ClientConfiguration;
  private httpClient;
  private wsClient;

  /**
   * Whether the client should not accept changes to configuration.
   */
  private clientLocked;

  constructor(configuration: ClientConfiguration) {
    this.configuration = configuration;
    this.httpClient = new HTTPClient(this.configuration);
    this.wsClient = new WebSocketClient(this.configuration);
    this.clientLocked = false;
  }

  connectToGateway() {
    this.clientLocked = true;
    this.wsClient.openConnection();
  }

  disconnectFromGateway() {
    this.wsClient.closeConnection(1000);
    this.clientLocked = false;
  }

  get httpClientInstance() {
    return this.httpClient;
  }
}

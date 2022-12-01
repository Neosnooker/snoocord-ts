import { ClientConfiguration } from "./ClientConfiguration.ts";
import { HTTPClient } from "./httpclient/HTTPClient.ts";

export class Client {
  private configuration: ClientConfiguration;
  private httpClient;

  constructor(configuration: ClientConfiguration) {
    this.configuration = configuration;
    this.httpClient = new HTTPClient(this.configuration);
  }

  connectToGateway() {
    throw new Error("websocket client not implemented");
  }

  get httpClientInstance() {
    return this.httpClient;
  }
}

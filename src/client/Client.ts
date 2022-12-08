import { ClientConfiguration } from "./ClientConfiguration.ts";
import { ConfigurationValidationError } from "./enums/ConfigurationValidationError.ts";
import { HTTPClient } from "./httpclient/HTTPClient.ts";
import { WebSocketClient } from "./websocketclient/WebSocketClient.ts";

export class Client {
  private configuration: ClientConfiguration;
  private httpClient;
  private wsClient;

  private validateConfiguration(configuration: ClientConfiguration) {
    const errors: string[] = [];

    if (!configuration.botToken || typeof configuration.botToken != 'string') {
      errors.push(ConfigurationValidationError.INVALID_BOT_TOKEN);
    }

    return { errors, success: errors.length == 0 };
  }

  constructor(configuration: ClientConfiguration) {
    const configurationValidation = this.validateConfiguration(configuration);

    if (!configurationValidation.success) {
      throw new Error(
        "Invalid configuration. The validation process returned with the errors: " +
          configurationValidation.errors.join(" "),
      );
    }

    this.configuration = configuration;
    this.httpClient = new HTTPClient(this.configuration);
    this.wsClient = new WebSocketClient(this.configuration);
  }

  connectToGateway() {
    this.wsClient.openConnection();
  }

  disconnectFromGateway() {
    this.wsClient.closeConnection();
  }

  get httpClientInstance() {
    return this.httpClient;
  }

  get wsClientInstance() {
    return this.wsClient;
  }
}

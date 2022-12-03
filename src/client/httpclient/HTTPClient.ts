import { ClientConfiguration } from "../ClientConfiguration.ts";
import { snoocord } from "../SharedConstants.ts";
import { HTTPRequestError } from "./HTTPRequestError.ts";
import { RequestMethod } from "./RequestMethod.ts";

export class HTTPClient {
  static readonly DiscordUrl = "https://discord.com/api/v10";

  private readonly configuration: {
    defaultRequestInit: RequestInit;
  };

  constructor(configuration: ClientConfiguration) {
    this.configuration = {
      defaultRequestInit: {
        "headers": {
          "User-Agent":
            `DiscordBot (${snoocord.repositoryUrl}, ${snoocord.version})`,
          "Authorization": `Bot ${configuration.botToken}`,
        },
      },
    };
  }

  async sendRequestToDiscordEndpoint<ExpectedReturnType>(
    init: {
      endpoint: string;
      method: RequestMethod;
      additionalParameters?: Record<string | number, unknown>;
      additionalHeaders?: Record<string, unknown>;
    },
  ) {
    const { endpoint, method, additionalParameters, additionalHeaders } = init;

    const result = await fetch(
      HTTPClient.DiscordUrl + endpoint,
      Object.assign(this.configuration.defaultRequestInit, {
        method,
        "body": additionalParameters,
        "headers": additionalHeaders ?? {},
      }),
    );

    if (result.status >= 200 && result.status < 300) {
      return (await result.json()) as ExpectedReturnType;
    } else {
      return new HTTPRequestError({
        endpoint: endpoint,
        method: method,
        statusCode: result.status,
        statusText: result.statusText,
      });
    }
  }
}

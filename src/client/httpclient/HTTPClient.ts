import { ClientConfiguration } from "../ClientConfiguration.ts";
import { snoocord } from "../SharedConstants.ts";
import { HTTPRequestError } from "./HTTPRequestError.ts";
import { RequestMethod } from "./RequestMethod.ts";
import * as Structures from '../../api/requests/export.ts';

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
    const url = HTTPClient.DiscordUrl + init.endpoint;
    const requestInit: RequestInit = {
      "method": init.method,
      "headers": Object.assign(
        this.configuration.defaultRequestInit.headers!,
        {
          "Content-Type": init.method == RequestMethod.POST
            ? "application/json"
            : undefined,
          ...init.additionalHeaders,
        },
      ),
      "body": JSON.stringify(init.additionalParameters),
    };

    const result = await fetch(url, requestInit!);

    if (result.status >= 200 && result.status < 300) {
      return (await result.json()) as ExpectedReturnType;
    } else {
      throw new HTTPRequestError({
        endpoint: init.endpoint,
        method: init.method,
        statusCode: result.status,
        statusText: result.statusText,
      });
    }
  }

  callEndpoint<EndpointName extends keyof typeof Structures>(endpoint: EndpointName) {
    Structures[endpoint]
  }
}

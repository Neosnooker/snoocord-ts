import { ClientConfiguration } from "../ClientConfiguration.ts";
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
            "DiscordBot (https://github.com/Neosnooker/snoocord, unknown) snoocord/nightly",
          "Authorization": `Bot ${configuration.botToken}`,
        },
      },
    };
  }

  private getQueryStringFromRecord(record: Record<string, unknown>) {
    return "?" +
      Object.entries(record).map((value) =>
        `${value[0]}=${
          encodeURIComponent(
            typeof value[1] == "object"
              ? JSON.stringify(value[1])
              : String(value[1]),
          )
        }`
      ).join("&");
  }

  async sendRequestToDiscordEndpoint<BodyType, ExpectedReturnType>(
    endpoint: string,
    method: RequestMethod,
    body: BodyType,
    queryStringParams?: Record<string, unknown>,
  ) {
    const result = await fetch(
      HTTPClient.DiscordUrl + endpoint +
        ((queryStringParams &&
          this.getQueryStringFromRecord(queryStringParams)) ?? ""),
      Object.assign(this.configuration.defaultRequestInit, { method, body }),
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

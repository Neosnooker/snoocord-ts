import { HTTPClient } from "../../client/httpclient/HTTPClient.ts";

export type BaseRequestType<
  URLParameters,
  CustomParametersType,
  ExpectedReturnType,
> = (
  httpClient: HTTPClient,
  urlParameters: URLParameters,
  customParameters: CustomParametersType,
) => Promise<ExpectedReturnType | Error>;

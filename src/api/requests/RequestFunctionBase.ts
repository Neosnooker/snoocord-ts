import { HTTPClient } from "../../client/httpclient/HTTPClient.ts";

/**
 * @param URLParameters The type definition for a tuple of parameters that is used in the URL (typically id parameters).
 * @param AdditionalParameters The type definition for the additional passed object or query string parameters.
 * @param ExpectedReturnType The expected return type of the request.
 * @param AdditionalHeaders The type definition for the additional headers, if the endpoint supports additional headers.
 */
export type RequestFunctionBase<
  URLParameters,
  AdditionalParameters,
  ExpectedReturnType,
  AdditionalHeaders = undefined,
> = (
  httpClient: HTTPClient,
  urlParameters: URLParameters,
  additionalParametersType: AdditionalParameters,
  additionalHeaders?: AdditionalHeaders,
) => Promise<ExpectedReturnType>;

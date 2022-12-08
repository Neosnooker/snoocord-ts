import { HTTPClient } from "../../client/httpclient/HTTPClient.ts";
import { HTTPRequestError } from "../../client/httpclient/HTTPRequestError.ts";

/**
 * @param URLParameters The type definition for a tuple of parameters that is used in the URL (typically id parameters).
 * @param CustomParametersType The type definition for the additional passed object or query string parameters.
 * @param ExpectedReturnType The expected return type of the request.
 */
export type RequestFunctionBase<
  URLParameters,
  AdditionalParametersType,
  ExpectedReturnType,
> = (
  httpClient: HTTPClient,
  urlParameters: URLParameters,
  AdditionalParametersType: AdditionalParametersType,
) => Promise<ExpectedReturnType>;

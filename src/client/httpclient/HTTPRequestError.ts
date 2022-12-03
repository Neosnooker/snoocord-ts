export class HTTPRequestError extends Error {
  name = "HTTPRequestError";

  constructor(properties: {
    endpoint: string;
    method: string;
    statusCode: number;
    statusText: string;
  }) {
    super(
      `'${properties.method} ${properties.endpoint}' returned with ${properties.statusCode} (${properties.statusText}).`,
    );
  }
}

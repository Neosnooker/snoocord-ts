export class HTTPRequestError extends Error {
  constructor(properties: {
    endpoint: string;
    method: string;
    statusCode: number;
    statusText: string;
  }) {
    super(
      `'${properties.method} ${properties.endpoint}' returned with ${properties.statusCode} (${properties.statusText})`,
    );
  }
}

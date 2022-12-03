/**
 * The configuration to configure internal behavior and authenticate bots.
 */
export interface ClientConfiguration {
  botToken: string;
  intents: number;
  cacheDirectory: string;
}

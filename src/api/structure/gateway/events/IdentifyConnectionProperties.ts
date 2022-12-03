/**
 * https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties
 */
export interface IdentifyConnectionProperties {
  /**
   * Your operating system
   */
  os: string;
  /**
   * Your library name
   */
  browser: string;
  /**
   * Your library name
   */
  device: string;
}

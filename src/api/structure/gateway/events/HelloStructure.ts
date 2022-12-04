/**
 * https://discord.com/developers/docs/topics/gateway-events#hello
 *
 * Sent on connection to the websocket. Defines the heartbeat interval that an app should heartbeat to.
 */
export interface HelloStructure {
  /**
   * Interval (in milliseconds) an app should heartbeat with
   */
  heartbeat_interval: number;
}

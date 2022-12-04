/**
 * https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-secrets
 */
export interface ActivitySecrets {
  /**
   * Secret for joining a party
   */
  join?: string;
  /**
   * Secret for spectating a game
   */
  spectate?: string;
  /**
   * Secret for a specific instanced match
   */
  match?: string;
}

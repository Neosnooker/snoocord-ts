/**
 * https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-party
 */
export interface ActivityParty {
  /**
   * ID of the party
   */
  id?: string;
  /**
   * Used to show the party's current and maximum size
   * @type array of two integers (current_size, max_size)
   */
  size?: [number, number];
}

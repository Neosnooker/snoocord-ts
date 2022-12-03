import { snowflake } from "../../../snowflake.ts";

/**
 * https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-emoji
 */
export interface ActivityEmoji {
  /**
   * Name of the emoji
   */
  name: string;
  /**
   * ID of the emoji
   */
  id?: snowflake;
  /**
   * Whether the emoji is animated
   */
  animated?: boolean;
}

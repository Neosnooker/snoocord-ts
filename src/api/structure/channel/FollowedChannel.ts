import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure
 */
export interface FollowedChannel {
  /**
   * source channel id
   */
  channel_id: snowflake;
  /**
   * created target webhook id
   */
  webhook_id: snowflake;
}

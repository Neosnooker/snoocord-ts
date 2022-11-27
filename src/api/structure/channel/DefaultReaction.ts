import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/channel#default-reaction-object
 *
 * An object that specifies the emoji to use as the default way to react to a forum post. Exactly one of `emoji_id` and `emoji_name` must be set.
 */
export interface DefaultReaction {
  /**
   * the id of a guild's custom emoji
   */
  emoji_id: snowflake | null;
  /**
   * the unicode character of the emoji
   */
  emoji_name: string | null;
}

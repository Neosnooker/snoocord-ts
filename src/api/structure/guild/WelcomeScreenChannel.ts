import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export interface WelcomeScreenChannel {
  /**
   * the channel's id
   */
  channel_id: snowflake;
  /**
   * the description shown for the channel
   */
  description: string;
  /**
   * the [emoji id](https://discord.com/developers/docs/reference#image-formatting), if the emoji is custom
   */
  emoji_id: snowflake | null;
  /**
   * the emoji name if custom, the unicode character if standard, or `null` if no emoji is set
   */
  emoji_name: string | null;
}

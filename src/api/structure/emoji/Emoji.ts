import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";

/**
 * https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 *
 * (!) Routes for controlling emojis do not follow the normal rate limit conventions. These routes are specifically limited on a per-guild basis to prevent abuse. This means that the quota returned by our APIs may be inaccurate, and you may encounter 429s.
 *
 * (i) In `MESSAGE_REACTION_ADD` gateway events `animated` will be returned for animated emoji.
 *
 * (i) In `MESSAGE_REACTION_ADD` and `MESSAGE_REACTION_REMOVE` gateway events `name` may be `null` when custom emoji data is not available (for example, if it was deleted from the guild).
 */
export interface Emoji {
  /**
   * [emoji id](https://discord.com/developers/docs/reference#image-formatting)
   */
  id: snowflake | null;
  /**
   * emoji name
   */
  name: string | null;
  /**
   * roles allowed to use this emoji
   */
  roles: snowflake[];
  /**
   * user that created this emoji
   */
  user?: User;
  /**
   * whether this emoji must be wrapped in colons
   */
  require_colons?: boolean;
  /**
   * whether this emoji is managed
   */
  managed?: boolean;
  /**
   * whether this emoji is animated
   */
  animated?: boolean;
  /**
   * whether this emoji can be used, may be false due to loss of Server Boosts
   */
  available?: boolean;
}

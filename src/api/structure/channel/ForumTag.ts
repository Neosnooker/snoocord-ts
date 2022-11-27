import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/channel#forum-tag-object
 *
 * An object that represents a tag that is able to be applied to a thread in a `GUILD_FORUM` channel.
 *
 * (i) When updating a `GUILD_FORUM` channel, tag objects in `available_tags` only require the `name` field.
 *
 * \* At most one of `emoji_id` and `emoji_name` may be set.
 */
export interface ForumTag {
  /**
   * the id of the tag
   */
  id: snowflake;
  /**
   * the name of the tag (0-20 characters)
   */
  name: string;
  /**
   * whether this tag can only be added to or removed from threads by a member with the `MANAGE_THREADS` permission
   */
  moderated: boolean;
  /**
   * the id of a guild's custom emoji *
   */
  emoji_id?: snowflake;
  /**
   * the unicode character of the emoji *
   */
  emoji_name?: string | null;
}

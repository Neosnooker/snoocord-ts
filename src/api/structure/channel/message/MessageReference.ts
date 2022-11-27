import { snowflake } from "../../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure
 *
 * \* `channel_id` is optional when creating a reply, but will always be present when receiving an event/response that includes this data model.
 */
export interface MessageReference {
  /**
   * id of the originating message
   */
  message_id?: snowflake;
  /**
   * id of the originating message's channel*
   */
  channel_id?: snowflake;
  /**
   * id of the originating message's guild
   */
  guild_id?: snowflake;
  /**
   * when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true
   */
  fail_if_not_exists?: boolean;
}

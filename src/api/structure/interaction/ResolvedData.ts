import { Channel } from "../channel/Channel.ts";
import { Attachment } from "../channel/message/Attachment.ts";
import { Message } from "../channel/message/Message.ts";
import { GuildMember } from "../guild/GuildMember.ts";
import { Role } from "../permissions/Role.ts";
import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 *
 * (i) If data for a Member is included, data for its corresponding User will also be included.
 *
 * \* Partial `Member` objects are missing `user`, `deaf` and `mute` fields
 *
 * \** Partial `Channel` objects only have `id`, `name`, `type` and `permissions` fields. Threads will also have `thread_metadata` and `parent_id` fields.
 */
export interface ResolvedData {
  /**
   * the ids and User objects
   */
  users?: Record<snowflake, User>;
  /**
   * the ids and partial Member objects
   */
  members?: Record<snowflake, Partial<GuildMember>>;
  /**
   * the ids and Role objects
   */
  roles?: Record<snowflake, Role>;
  /**
   * the ids and partial Channel objects
   */
  channels?: Record<snowflake, Partial<Channel>>;
  /**
   * the ids and partial Message objects
   */
  messages?: Record<snowflake, Message>;
  /**
   * the ids and attachment objects
   */
  attachments?: Record<snowflake, Attachment>;
}

import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/channel#thread-member-object
 *
 * A thread member is used to indicate whether a user has joined a thread or not.
 *
 * **\* These fields are omitted on the member sent within each thread in the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway-events#guild-create) event**
 */
export interface ThreadMember {
  /**
   * the id of the thread*
   */
  id?: snowflake;
  /**
   * the id of the user*
   */
  user_id?: snowflake;
  /**
   * the time the current user last joined the thread
   */
  join_timestamp: string;
  /**
   * any user-thread settings, currently only used for notifications
   */
  flags: number;
}

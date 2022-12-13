import { snowflake } from "../../../structure/snowflake.ts";

/**
 * https://canary.discord.com/developers/docs/resources/channel#modify-channel-json-params-thread
 * 
 * When setting `archived` to `false`, when `locked` is also `false`, only the `SEND_MESSAGES` permission is required.
 *
 * Otherwise, requires the `MANAGE_THREADS` permission. Fires a [Thread Update](https://canary.discord.com/developers/docs/topics/gateway-events#thread-update) Gateway event. Requires the thread to have `archived` set to `false` or be set to `false` in the request.
 */
export interface JSONParamsThread {
  /**
   * 1-100 character channel name
   */
  name: string;
  /**
   * whether the thread is archived
   */
  archived: boolean;
  /**
   * the thread will stop showing in the channel list after `auto_archive_duration` minutes of inactivity, can be set to: 60, 1440, 4320, 10080
   */
  auto_archive_duration: number;
  /**
   * whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it
   */
  locked: boolean;
  /**
   * whether non-moderators can add other non-moderators to a thread; only available on private threads
   */
  invitable: boolean;
  /**
   * amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages`, `manage_thread`, or `manage_channel`, are unaffected
   */
  rate_limit_per_user: number | null;
  /**
   * [channel flags](https://canary.discord.com/developers/docs/resources/channel#channel-object-channel-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field); `PINNED` can only be set for threads in forum channels
   */
  flags: number;
  /**
   * the IDs of the set of tags that have been applied to a thread in a `GUILD_FORUM` channel; limited to 5
   */
  applied_tags: snowflake[];
}
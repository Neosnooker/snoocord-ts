import { ChannelType } from "../../../structure/channel/ChannelType.ts";
import { DefaultReaction } from "../../../structure/channel/DefaultReaction.ts";
import { ForumTag } from "../../../structure/channel/ForumTag.ts";
import { Overwrite } from "../../../structure/channel/Overwrite.ts";
import { SortOrderType } from "../../../structure/channel/SortOrderType.ts";
import { snowflake } from "../../../structure/snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/channel#deleteclose-channel
 * 
 * Requires the `MANAGE_CHANNELS` permission for the guild. Fires a [Channel Update](https://discord.com/developers/docs/topics/gateway-events#channel-update) Gateway event. If modifying a category, individual [Channel Update](https://discord.com/developers/docs/topics/gateway-events#channel-update) events will fire for each child channel that also changes. If modifying permission overwrites, the `MANAGE_ROLES` permission is required. Only permissions your bot has in the guild or parent channel (if applicable) can be allowed/denied (unless your bot has a `MANAGE_ROLES` overwrite in the channel).
 * 
 * \* For voice channels, normal servers can set bitrate up to 96000, servers with Boost level 1 can set up to 128000, servers with Boost level 2 can set up to 256000, and servers with Boost level 3 or the `VIP_REGIONS` [guild feature](https://discord.com/developers/docs/resources/guild#guild-object-guild-features) can set up to 384000. For stage channels, bitrate can be set up to 64000.
 *
 * \** In each overwrite object, the `allow` and `deny` keys can be omitted or set to `null`, which both default to `"0"`.
 */
export interface JSONParamsGuildChannel {
  /**
   * 1-100 character channel name
   * + Channel Type: All
   */
  name: string;
  /**
   * the [type of channel](https://canary.discord.com/developers/docs/resources/channel#channel-object-channel-types); only conversion between text and announcement is supported and only in guilds with the "NEWS" feature
   * + Channel Type: Text, Announcement
   */
  type: ChannelType;
  /**
   * the position of the channel in the left-hand listing
   * + Channel Type: All
   */
  position: number | null;
  /**
   * 0-1024 character channel topic (0-4096 characters for `GUILD_FORUM` channels)
   * + Channel Type: Text, Announcement, Forum
   */
  topic: string | null;
  /**
   * whether the channel is nsfw
   * + Channel Type: Text, Voice, Announcement, Forum
   */
  nsfw: boolean | null;
  /**
   * amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected
   * + Channel Type: Text, Forum
   */
  rate_limit_per_user: number | null;
  /**
   * the bitrate (in bits) of the voice or stage channel; min 8000*
   * + Channel Type: Voice, Stage
   */
  bitrate: number | null;
  /**
   * the user limit of the voice channel; 0 refers to no limit, 1 to 99 refers to a user limit
   * + Channel Type: Voice
   */
  user_limit: number | null;
  /**
   * channel or category-specific permissions**
   * + Channel Type: All
   */
  permission_overwrites: Partial<Overwrite>[];
  /**
   * id of the new parent category for a channel
   * + Channel Type: Text, Voice, Announcement, Forum
   */
  parent_id: snowflake | null;
  /**
   * channel [voice region](https://canary.discord.com/developers/docs/resources/voice#voice-region-object) id, automatic when set to null
   * + Channel Type: Voice, Stage
   */
  rtc_region: string | null;
  /**
   * the camera [video quality mode](https://canary.discord.com/developers/docs/resources/channel#channel-object-video-quality-modes) of the voice channel
   * + Channel Type: Voice
   */
  video_quality_mode: number | null;
  /**
   * the default duration that the clients use (not the API) for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity
   * + Channel Type: Text, Announcement, Forum
   */
  default_auto_archive_duration: number | null;
  /**
   * [channel flags](https://canary.discord.com/developers/docs/resources/channel#channel-object-channel-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field). Currently only `REQUIRE_TAG` (`1 << 4`) is supported.
   * + Channel Type: Forum
   */
  flags?: number;
  /**
   * the set of tags that can be used in a `GUILD_FORUM` channel; limited to 20
   * + Channel Type: Forum
   */
  available_tags?: ForumTag;
  /**
   * the emoji to show in the add reaction button on a thread in a `GUILD_FORUM` channel
   * + Channel Type: Forum
   */
  default_reaction_emoji?: DefaultReaction;
  /**
   * the initial `rate_limit_per_user` to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
   * + Channel Type: Text, Forum
   */
  default_thread_rate_limit_per_user?: number;
  /**
   * the [default sort order type](https://canary.discord.com/developers/docs/resources/channel#channel-object-sort-order-types) used to order posts in GUILD_FORUM channels
   * + Channel Type: Forum
   */
  default_sort_order?: SortOrderType | null;
}

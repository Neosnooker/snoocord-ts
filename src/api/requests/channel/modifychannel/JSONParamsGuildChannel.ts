import { ChannelType } from "../../../structure/channel/ChannelType.ts";
import { DefaultReaction } from "../../../structure/channel/DefaultReaction.ts";
import { ForumTag } from "../../../structure/channel/ForumTag.ts";
import { Overwrite } from "../../../structure/channel/Overwrite.ts";
import { snowflake } from "../../../structure/snowflake.ts";

export interface JSONParamsGuildChannel {
  /**
   * 1-100 character channel name
   * =All
   */
  name: string;
  /**
   * the type of channel; only conversion between text and announcement is supported and only in guilds with the "NEWS" feature
   * =Text, Announcement
   */
  type: ChannelType;
  /**
   * the position of the channel in the left-hand listing
   * =All
   */
  position: number | null;
  /**
   * 0-1024 character channel topic (0-4096 characters for GUILD_FORUM channels)
   * =Text, Announcement, Forum
   */
  topic: string | null;
  /**
   * whether the channel is nsfw
   * =Text, Voice, Announcement, Forum
   */
  nsfw: boolean | null;
  /**
   * amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
   * =Text, Forum
   */
  rate_limit_per_user: number | null;
  /**
   * the bitrate (in bits) of the voice or stage channel; min 8000*
   * =Voice, Stage
   */
  bitrate: number | null;
  /**
   * the user limit of the voice channel; 0 refers to no limit, 1 to 99 refers to a user limit
   * =Voice
   */
  user_limit: number | null;
  /**
   * channel or category-specific permissions**
   * =All
   */
  permission_overwrites: Partial<Overwrite>[];
  /**
   * id of the new parent category for a channel
   * =Text, Voice, Announcement, Forum
   */
  parent_id: snowflake | null;
  /**
   * channel voice region id, automatic when set to null
   * =Voice, Stage
   */
  rtc_region: string | null;
  /**
   * the camera video quality mode of the voice channel
   * =Voice
   */
  video_quality_mode: number | null;
  /**
   * the default duration that the clients use (not the API) for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity
   * =Text, Announcement, Forum
   */
  default_auto_archive_duration: number | null;
  /**
   * channel flags combined as a bitfield. Currently only REQUIRE_TAG (1 << 4) is supported.
   * =Forum
   */
  flags?: number;
  /**
   * the set of tags that can be used in a GUILD_FORUM channel; limited to 20
   * =Forum
   */
  available_tags?: ForumTag;
  /**
   * the emoji to show in the add reaction button on a thread in a GUILD_FORUM channel
   * =Forum
   */
  default_reaction_emoji?: DefaultReaction;
  /**
   * the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
   * =Text, Forum
   */
  default_thread_rate_limit_per_user?: number;
  /**
   * the default sort order type used to order posts in GUILD_FORUM channels
   * =Forum
   */
  default_sort_order?: number | null;
}

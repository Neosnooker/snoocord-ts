import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";
import { ChannelType } from "./ChannelType.ts";
import { VideoQualityMode } from "./VideoQualityMode.ts";

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 *
 * Represents a guild or DM channel within Discord.
 *
 * \* `rate_limit_per_user` also applies to thread creation. Users can send one message and create one thread during each `rate_limit_per_user` interval.
 * \** For threads created before July 1, 2022, the message count is inaccurate when it's greater than 50.
 */
export interface Channel {
  /**
   * the id of this channel
   */
  id: snowflake;
  /**
   * the [type of channel](https://discord.com/developers/docs/resources/channel#channel-object-channel-types)
   */
  type: ChannelType;
  /**
   * the id of the guild (may be missing for some channel objects received over gateway guild dispatches)
   */
  guild_id?: snowflake;
  /**
   * sorting position of the channel
   */
  position?: number;
  /**
   * explicit permission overwrites for members and roles
   */
  permission_overwrites: Overwrite[];
  /**
   * the name of the channel (1-100 characters)
   */
  name?: string | null;
  /**
   * the channel topic (0-4096 characters for `GUILD_FORUM` channels, 0-1024 characters for all others)
   */
  topic?: string | null;
  /**
   * whether the channel is nsfw
   */
  nsfw?: boolean;
  /**
   * the id of the last message sent in this channel (or thread for `GUILD_FORUM` channels) (may not point to an existing or valid message or thread)
   */
  last_message_id?: snowflake | null;
  /**
   * the bitrate (in bits) of the voice channel
   */
  bitrate?: number;
  /**
   * the user limit of the voice channel
   */
  user_limit?: number;
  /**
   * amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected*
   */
  rate_limit_per_user?: number;
  /**
   * the recipients of the DM
   */
  recipients?: User[];
  /**
   * icon hash of the group DM
   */
  icon?: string | null;
  /**
   * id of the creator of the group DM or thread
   */
  owner_id?: snowflake;
  /**
   * application id of the group DM creator if it is bot-created
   */
  application_id?: snowflake;
  /**
   * for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
   */
  parent_id?: snowflake | null;
  /**
   * when the last pinned messages was pinned. This may be `null` in events such as `GUILD_CREATE` when a message is not pinned.
   */
  last_pin_timestamp?: string | null;
  /**
   * [voice region](https://discord.com/developers/docs/resources/voice#voice-region-object) id for the voice channel, automatic when set to null
   */
  rtc_region?: string | null;
  /**
   * the camera [video quality mode](https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes) of the voice channel, 1 when not present
   */
  video_quality_mode?: VideoQualityMode;
  /**
   * number of messages (not including the initial message or deleted messages) in a thread.
   */
  message_count?: number;
  /**
   * an approximate count of users in a thread, stops counting at 50
   */
  member_count?: number;
  /**
   * thread-specific fields not needed by other channels
   */
  thread_metadata?: ThreadMetadata;
  /**
   * thread member object for the current user, if they have joined the thread, only included on certain API endpoints
   */
  member?: ThreadMember;
  /**
   * default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
   */
  default_auto_archive_duration?: number;
  /**
   * computed permissions for the invoking user in the channel, including overwrites, only included when part of the `resolved` data received on a slash command interaction
   */
  permissions?: string;
  /**
   * [channel flags](https://discord.com/developers/docs/resources/channel#channel-object-channel-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field)
   */
  flags?: number;
  /**
   * number of messages ever sent in a thread, it's similar to `message_count` on message creation, but will not decrement the number when a message is deleted
   */
  total_message_sent?: number;
  /**
   * the set of tags that can be used in a `GUILD_FORUM` channel
   */
  available_tags?: Tag[];
  /**
   * the IDs of the set of tags that have been applied to a thread in a `GUILD_FORUM` channel
   */
  applied_tags: snowflake[];
  /**
   * the emoji to show in the add reaction button on a thread in a `GUILD_FORUM` channel
   */
  default_reaction_emoji?: DefaultReaction | null;
  /**
   * the initial `rate_limit_per_user` to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
   */
  default_thread_rate_limit_per_user?: number;
  /**
   * the [default sort order type](https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types) used to order posts in `GUILD_FORUM` channels. Defaults to `null`, which indicates a preferred sort order hasn't been set by a channel admin
   */
  default_sort_order?: number | null;
}

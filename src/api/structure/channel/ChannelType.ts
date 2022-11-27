/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 *
 * (!!) Type 10, 11 and 12 are only available in API v9 and above.
 */
export enum ChannelType {
  /**
   * a text channel within a server
   */
  GUILD_TEXT = 0,
  /**
   * a direct message between users
   */
  DM = 1,
  /**
   * a voice channel within a server
   */
  GUILD_VOICE = 2,
  /**
   * a direct message between multiple users
   */
  GROUP_DM = 3,
  /**
   * an [organizational category](https://support.discord.com/hc/en-us/articles/115001580171-Channel-Categories-101) that contains up to 50 channels
   */
  GUILD_CATEGORY = 4,
  /**
   * a channel that [users can follow and crosspost into their own server](https://support.discord.com/hc/en-us/articles/360032008192) (formerly news channels)
   */
  GUILD_ANNOUNCEMENT = 5,
  /**
   * a temporary sub-channel within a GUILD_ANNOUNCEMENT channel
   */
  ANNOUNCEMENT_THREAD = 10,
  /**
   * a temporary sub-channel within a GUILD_TEXT or GUILD_FORUM channel
   */
  PUBLIC_THREAD = 11,
  /**
   * a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission
   */
  PRIVATE_THREAD = 12,
  /**
   * a voice channel for [hosting events with an audience](https://support.discord.com/hc/en-us/articles/1500005513722)
   */
  GUILD_STAGE_VOICE = 13,
  /**
   * the channel in a [hub](https://support.discord.com/hc/en-us/articles/4406046651927-Discord-Student-Hubs-FAQ) containing the listed servers
   */
  GUILD_DIRECTORY = 14,
  /**
   * Channel that can only contain threads
   */
  GUILD_FORUM = 15,
}

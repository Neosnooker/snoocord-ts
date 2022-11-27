/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
 */
export enum ChannelFlags {
  /**
   * this thread is pinned to the top of its parent `GUILD_FORUM` channel
   */
  PINNED = 1 << 1,
  /**
   * whether a tag is required to be specified when creating a thread in a `GUILD_FORUM` channel. Tags are specified in the `applied_tags` field.
   */
  REQUIRE_TAG = 1 << 4,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export enum SystemChannelFlags {
  /**
   * Suppress member join notifications
   */
  SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
  /**
   * Suppress server boost notifications
   */
  SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
  /**
   * Suppress server setup tips
   */
  SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
  /**
   * Hide member join sticker reply buttons
   */
  SUPPRESS_JOIN_NOTIFICATION_REPLIES = 1 << 3,
}

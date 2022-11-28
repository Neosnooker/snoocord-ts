/**
 * https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export enum DefaultMessageNotificationLevel {
  /**
   * members will receive notifications for all messages by default
   */
  ALL_MESSAGES = 0,
  /**
   * members will receive notifications only for messages that @mention them by default
   */
  ONLY_MENTIONS = 1,
}

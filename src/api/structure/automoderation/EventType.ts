/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types
 *
 * Indicates in what event context a rule should be checked.
 */
export enum EventType {
  /**
   * when a member sends or edits a message in the guild
   */
  MESSAGE_SEND = 1,
}

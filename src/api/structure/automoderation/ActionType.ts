/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types
 *
 * * A `TIMEOUT` action can only be set up for `KEYWORD` and `MENTION_SPAM` rules. The `MODERATE_MEMBERS` permission is required to use the `TIMEOUT` action type.
 */
export enum ActionType {
  /**
   * blocks the content of a message according to the rule
   */
  BLOCK_MESSAGE = 1,
  /**
   * logs user content to a specified channel
   */
  SEND_ALERT_MESSAGE = 2,
  /**
   * timeout user for a specified duration *
   */
  TIMEOUT = 3,
}

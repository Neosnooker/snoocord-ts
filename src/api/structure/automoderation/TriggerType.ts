/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types
 *
 * Characterizes the type of content which can trigger the rule.
 */
export enum TriggerType {
  /**
   * check if content contains words from a user defined list of keywords
   * + Max per Guild: 5
   */
  KEYWORD = 1,
  /**
   * check if content represents generic spam
   * + Max per Guild: 1
   */
  SPAM = 3,
  /**
   * check if content contains words from internal pre-defined wordsets
   * + Max per Guild: 1
   */
  KEYWORD_PRESET = 4,
  /**
   * check if content contains more unique mentions than allowed
   * + Max per Guild: 1
   */
  MENTION_SPAM = 5,
}

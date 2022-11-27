/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types
 */
export enum KeywordPresetType {
  /**
   * Words that may be considered forms of swearing or cursing
   */
  PROFANITY = 1,
  /**
   * Words that refer to sexually explicit behavior or activity
   */
  SEXUAL_CONTENT = 2,
  /**
   * Personal insults or words that may be considered hate speech
   */
  SLURS = 3,
}

import { KeywordPresetType } from "./KeywordPresetType.ts";

/**
 * Additional data used to determine whether a rule should be triggered. Different fields are relevant based on the value of [trigger_type](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types).
 *
 * \* A keyword can be a phrase which contains multiple words. [Wildcard symbols](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-matching-strategies) can be used to customize how each keyword will be matched. Each keyword must be 30 characters or less.
 *
 * \** Only Rust flavored regex is currently supported, which can be tested in online editors such as [Rustexp](https://rustexp.lpil.uk/). Each regex pattern must be 260 characters or less.
 *
 * \*** Each `allow_list` keyword can be a phrase which contains multiple words. [Wildcard symbols](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-matching-strategies) can be used to customize how each keyword will be matched. Rules with `KEYWORD` [trigger_type](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types) accept a maximum of 100 keywords. Rules with `KEYWORD_PRESET` [trigger_type](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types) accept a maximum of 1000 keywords.
 */
export interface TriggerMetadata {
  /**
   * + Associated Trigger Types: KEYWORD
   * substrings which will be searched for in content (Maximum of 1000)*
   */
  keyword_filter?: string[];
  /**
   * + Associated Trigger Types: KEYWORD
   * regular expression patterns which will be matched against content (Maximum of 10)**
   */
  regex_patterns?: string[];
  /**
   * + Associated Trigger Types: KEYWORD_PRESET
   * the internally pre-defined wordsets which will be searched for in content
   */
  presets?: KeywordPresetType;
  /**
   * + Associated Trigger Types: KEYWORD, KEYWORD_PRESET
   * substrings which should not trigger the rule (Maximum of 100 or 1000)***
   */
  allow_list?: string[];
  /**
   * + Associated Trigger Types: MENTION_SPAM
   * total number of unique role and user mentions allowed per message (Maximum of 50)
   */
  mention_total_limit?: number;
}

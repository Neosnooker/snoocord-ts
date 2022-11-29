/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 *
 * If you specify `choices` for an option, they are the only valid values for a user to pick
 *
 * \* Type of `value` depends on the [option type](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type) that the choice belongs to.
 */
export interface ApplicationCommandOptionChoice {
  /**
   * 1-100 character choice name
   */
  name: string;
  /**
   * Localization dictionary for the `name` field. Values follow the same restrictions as `name`
   */
  name_localizations?: Record<string, /* locales */ string> | null;
  /**
   * Value for the choice, up to 100 characters if string
   */
  value: string | number;
}

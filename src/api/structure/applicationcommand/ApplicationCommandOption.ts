import { ChannelType } from "../channel/ChannelType.ts";
import { ApplicationCommandOptionChoice } from "./ApplicationCommandOptionChoice.ts";
import { ApplicationCommandOptionType } from "./ApplicationCommandOptionType.ts";

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 *
 * (!) Required `options` must be listed before optional options
 *
 * \* `autocomplete` may not be set to true if `choices` are present.
 *
 * (i) Options using `autocomplete` are not confined to only use choices given by the application.
 */
export interface ApplicationCommandOption {
  /**
   * Type of option
   */
  type: ApplicationCommandOptionType;
  /**
   * [1-32 character name](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-naming)
   */
  name: string;
  /**
   * Localization dictionary for the `name` field. Values follow the same restrictions as `name`
   */
  name_localizations?: Record</* locale */ string, string> | null;
  /**
   * 1-100 character description
   */
  description: string;
  /**
   * Localization dictionary for the `description` field. Values follow the same restrictions as `description`
   */
  description_localizations?: Record</* locale */ string, string> | null;
  /**
   * If the parameter is required or optional--default `false`
   */
  required?: boolean;
  /**
   * Choices for `STRING`, `INTEGER`, and `NUMBER` types for the user to pick from, max 25
   */
  choices?: ApplicationCommandOptionChoice[];
  /**
   * If the option is a subcommand or subcommand group type, these nested options will be the parameters
   */
  options?: ApplicationCommandOption[];
  /**
   * If the option is a channel type, the channels shown will be restricted to these types
   */
  channel_types?: ChannelType[];
  /**
   * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted
   */
  min_value?: number;
  /**
   * If the option is an `INTEGER` or `NUMBER` type, the maximum value permitted
   */
  max_value?: number;
  /**
   * For option type `STRING`, the minimum allowed length (minimum of `0`, maximum of `6000`)
   */
  min_length?: number;
  /**
   * For option type `STRING`, the maximum allowed length (minimum of `1`, maximum of `6000`)
   */
  max_length?: number;
  /**
   * If autocomplete interactions are enabled for this `STRING`, `INTEGER`, or `NUMBER` type option*
   */
  autocomplete?: boolean;
}

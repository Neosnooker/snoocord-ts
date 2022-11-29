import { ApplicationCommandOptionType } from "../applicationcommand/ApplicationCommandOptionType.ts";

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure
 *
 * All options have names, and an option can either be a parameter and input value--in which case `value` will be set--or it can denote a subcommand or group--in which case it will contain a top-level key and another array of `options`.
 *
 * `value` and `options` are mutually exclusive.
 */
export interface ApplicationCommandInteractionDataOption {
  /**
   * Name of the parameter
   */
  name: string;
  /**
   * Value of [application command option type](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type)
   */
  type: ApplicationCommandOptionType;
  /**
   * Value of the option resulting from user input
   */
  value?: string | number;
  /**
   * Present if this option is a group or subcommand
   */
  options?: ApplicationCommandInteractionDataOption[];
  /**
   * `true` if this option is the currently focused option for autocomplete
   */
  focused?: boolean;
}

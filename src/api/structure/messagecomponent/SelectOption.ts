import { Emoji } from "../emoji/Emoji.ts";

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
 */
export interface SelectOption {
  /**
   * User-facing name of the option; max 100 characters
   */
  label: string;
  /**
   * Dev-defined value of the option; max 100 characters
   */
  value: string;
  /**
   * Additional description of the option; max 100 characters
   */
  description?: string;
  /**
   * `id`, `name`, and `animated`
   */
  emoji?: Partial<Emoji>;
  /**
   * Will show this option as selected by default
   */
  default?: boolean;
}

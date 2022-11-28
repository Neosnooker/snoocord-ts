import { ChannelType } from "../channel/ChannelType.ts";
import { ComponentType } from "./ComponentType.ts";
import { SelectOption } from "./SelectOption.ts";

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
 *
 * \* `options` is required for string select menus (component type `3`), and unavailable for all other select menu components.
 *
 * \** `channel_types` can only be used for channel select menu components.
 */
export interface SelectMenu {
  /**
   * Type of select menu component (text: `3`, user: `5`, role: `6`, mentionable: `7`, channels: `8`)
   */
  type:
    | ComponentType.STRING_SELECT
    | ComponentType.USER_SELECT
    | ComponentType.ROLE_SELECT
    | ComponentType.MENTIONABLE_SELECT
    | ComponentType.CHANNEL_SELECT;
  /**
   * ID for the select menu; max 100 characters
   */
  custom_id: string;
  /**
   * Specified choices in a select menu (only required and available for string selects (type `3`); max 25
   */
  options?: SelectOption[];
  /**
   * List of channel types to include in the channel select component (type `8`)
   */
  channel_types?: ChannelType[];
  /**
   * Placeholder text if nothing is selected; max 150 characters
   */
  placeholder?: string;
  /**
   * Minimum number of items that must be chosen (defaults to 1); min 0, max 25
   */
  min_values?: number;
  /**
   * Maximum number of items that can be chosen (defaults to 1); max 25
   */
  max_values?: number;
  /**
   * Whether select menu is disabled (defaults to `false`)
   */
  disabled?: boolean;
}

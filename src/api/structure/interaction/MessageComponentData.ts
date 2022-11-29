import { ComponentType } from "../messagecomponent/ComponentType.ts";

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure
 *
 * \* This is always present for select menu components
 */
export interface MessageComponentData {
  /**
   * the [`custom_id`](https://discord.com/developers/docs/interactions/message-components#custom-id) of the component
   */
  custom_id: string;
  /**
   * the [type](https://discord.com/developers/docs/interactions/message-components#component-object-component-types) of the component
   */
  component_type: ComponentType;
  /**
   * values the user selected in a [select menu](https://discord.com/developers/docs/interactions/message-components#select-menu-object) component
   */
  values?: string[];
}

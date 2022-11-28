import { Emoji } from "../emoji/Emoji.ts";
import { ComponentType } from "./ComponentType.ts";

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object
 *
 * Buttons are interactive components that render in messages. They can be clicked by users, and send an [interaction](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object) to your app when clicked.
 *
 * + Buttons must be sent inside an Action Row
 * + An Action Row can contain up to 5 buttons
 * + An Action Row containing buttons cannot also contain any select menu components
 */
export interface Button {
  /**
   * `2` for a button
   */
  type: ComponentType.BUTTON;
  /**
   * A [button style](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles)
   */
  style: number;
  /**
   * Text that appears on the button; max 80 characters
   */
  label?: string;
  /**
   * `name`, `id`, and `animated`
   */
  emoji?: Partial<Emoji>;
  /**
   * Developer-defined identifier for the button; max 100 characters
   */
  custom_id?: string;
  /**
   * URL for link-style buttons
   */
  url?: string;
  /**
   * Whether the button is disabled (defaults to `false`)
   */
  disabled?: boolean;
}

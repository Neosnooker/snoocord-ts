import { ComponentType } from "./ComponentType.ts";
import { TextInputStyle } from "./TextInputStyle.ts";

/**
 * https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-structure
 */
export interface TextInput {
  /**
   * `4` for a text input
   */
  type: ComponentType.TEXT_INPUT;
  /**
   * Developer-defined identifier for the input; max 100 characters
   */
  custom_id: string;
  /**
   * The [Text Input Style](https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles)
   */
  style: TextInputStyle;
  /**
   * Label for this component; max 45 characters
   */
  label: string;
  /**
   * Minimum input length for a text input; min 0, max 4000
   */
  min_length?: number;
  /**
   * Maximum input length for a text input; min 1, max 4000
   */
  max_length?: number;
  /**
   * Whether this component is required to be filled (defaults to `true`)
   */
  required?: boolean;
  /**
   * Pre-filled value for this component; max 4000 characters
   */
  value?: string;
  /**
   * Custom placeholder text if the input is empty; max 100 characters
   */
  placeholder?: string;
}

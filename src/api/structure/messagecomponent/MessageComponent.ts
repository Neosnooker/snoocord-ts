import { Button } from "./Button.ts";
import { SelectMenu } from "./SelectMenu.ts";
import { TextInput } from "./TextInput.ts";

/**
 * @internal
 * Message Component union type.
 */
export type MessageComponent = Button | SelectMenu | TextInput;

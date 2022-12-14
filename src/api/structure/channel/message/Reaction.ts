import { Emoji } from "../../emoji/Emoji.ts";

/**
 * https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure
 */
export interface Reaction {
  /**
   * times this emoji has been used to react
   */
  count: number;
  /**
   * whether the current user reacted using this emoji
   */
  me: boolean;
  /**
   * emoji information
   */
  emoji: Partial<Emoji>;
}

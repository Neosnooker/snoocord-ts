import { Emoji } from "../emoji/Emoji.ts";
import { snowflake } from "../snowflake.ts";
import { Sticker } from "../sticker/Sticker.ts";
import { GuildFeatures } from "./GuildFeatures.ts";

/**
 * https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure
 */
export interface GuildPreview {
  /**
   * guild id
   */
  id: snowflake;
  /**
   * guild name (2-100 characters)
   */
  name: string;
  /**
   * [icon hash](https://discord.com/developers/docs/reference#image-formatting)
   */
  icon: string | null;
  /**
   * [splash hash](https://discord.com/developers/docs/reference#image-formatting)
   */
  splash: string | null;
  /**
   * [discovery splash hash](https://discord.com/developers/docs/reference#image-formatting)
   */
  discovery_splash: string | null;
  /**
   * custom guild emojis
   */
  emojis: Emoji[];
  /**
   * enabled guild features
   */
  features: GuildFeatures[];
  /**
   * approximate number of members in this guild
   */
  approximate_member_count: number;
  /**
   * approximate number of online members in this guild
   */
  approximate_presence_count: number;
  /**
   * the description for the guild
   */
  description: string | null;
  /**
   * custom guild stickers
   */
  stickers: Sticker[];
}

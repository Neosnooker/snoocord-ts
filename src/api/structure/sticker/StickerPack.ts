import { snowflake } from "../snowflake.ts";
import { Sticker } from "./Sticker.ts";
/**
 * Represents a pack of standard stickers
 */
export interface StickerPack {
  /**
   * id of the sticker pack
   */
  id: snowflake;
  /**
   * the stickers in the pack
   */
  stickers: Sticker[];
  /**
   * name of the sticker pack
   */
  name: string;
  /**
   * id of the pack's SKU
   */
  sku_id: snowflake;
  /**
   * id of a sticker in the pack which is shown as the pack's icon
   */
  cover_sticker_id?: snowflake;
  /**
   * description of the sticker pack
   */
  description: string;
  /**
   * id of the sticker pack's [banner image](https://discord.com/developers/docs/reference#image-formatting)
   */
  banner_asset_id?: snowflake;
}

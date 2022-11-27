import { snowflake } from "../snowflake.ts";
import { StickerFormatType } from "./StickerFormatType.ts";

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-item-object
 * 
 * The smallest amount of data required to render a sticker. A partial sticker object.
 */
export interface StickerItem {
	/**
	 * id of the sticker
	 */
	id: snowflake;
	/**
	 * name of the sticker
	 */
	name: string;
	/**
	 * [type of sticker format](https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types)
	 */
	format_type: StickerFormatType;
}
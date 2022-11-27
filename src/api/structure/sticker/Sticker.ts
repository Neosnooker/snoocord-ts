import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";
import { StickerFormatType } from "./StickerFormatType.ts";
import { StickerType } from "./StickerType.ts";

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object
 *
 * Represents a sticker that can be sent in messages.
 *
 * \* A comma separated list of keywords is the format used in this field by standard stickers, but this is just a convention. Incidentally the client will always use a name generated from an emoji as the value of this field when creating or modifying a guild sticker.
 */
export interface Sticker {
  /**
   * [id of the sticker](https://discord.com/developers/docs/reference#image-formatting)
   */
  id: snowflake;
  /**
   * for standard stickers, id of the pack the sticker is from
   */
  pack_id?: snowflake;
  /**
   * name of the sticker
   */
  name: string;
  /**
   * description of the sticker
   */
  description: string | null;
  /**
   * autocomplete/suggestion tags for the sticker (max 200 characters)*
   */
  tags: string;
  /**
   * [type of sticker](https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types)
   */
  type: StickerType;
  /**
   * [type of sticker format](https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types)
   */
  format_type: StickerFormatType;
  /**
   * whether this guild sticker can be used, may be false due to loss of Server Boosts
   */
  available?: boolean;
  /**
   * id of the guild that owns this sticker
   */
  guild_id?: snowflake;
  /**
   * the user that uploaded the guild sticker
   */
  user?: User;
  /**
   * the standard sticker's sort order within its pack
   */
  sort_value?: number;
}

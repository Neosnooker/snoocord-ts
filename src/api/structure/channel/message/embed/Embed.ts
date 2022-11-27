import { EmbedImage } from "./EmbedImage.ts";
import { EmbedProvider } from "./EmbedProvider.ts";
import { EmbedThumbnail } from "./EmbedThumbnail.ts";
import { EmbedType } from "./EmbedType.ts";
import { EmbedVideo } from "./EmbedVideo.ts";

/**
 * https://discord.com/developers/docs/resources/channel#embed-object
 */
export interface Embed {
	/**
	 * title of embed
	 */
  title?: string;
	/**
	 * [type of embed](https://discord.com/developers/docs/resources/channel#embed-object-embed-types) (always "rich" for webhook embeds)
	 */
  type?: EmbedType;
	/**
	 * description of embed
	 */
  description?: string;
	/**
	 * url of embed
	 */
  url?: string;
	/**
	 * timestamp of embed content
	 */
  timestamp?: string;
	/**
	 * color code of the embed
	 */
  color?: number;
	/**
	 * footer information
	 */
  footer?: EmbedFooter;
	/**
	 * image information
	 */
  image?: EmbedImage;
	/**
	 * thumbnail information
	 */
  thumbnail?: EmbedThumbnail;
	/**
	 * video information
	 */
  video?: EmbedVideo;
	/**
	 * provider information
	 */
  provider?: EmbedProvider;
	/**
	 * author information
	 */
  author?: EmbedAuthor;
	/**
	 * fields information
	 */
  fields?: EmbedField[];
}

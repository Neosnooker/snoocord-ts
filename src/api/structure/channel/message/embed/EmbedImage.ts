/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export interface EmbedImage {
	/**
	 * source url of image (only supports http(s) and attachments)
	 */
	url: string;
	/**
	 * a proxied url of the image
	 */
	proxy_url?: string;
	/**
	 * height of image
	 */
	height?: number;
	/**
	 * width of image
	 */
	width?: number;
}
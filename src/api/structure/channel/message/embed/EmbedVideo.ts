/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export interface EmbedVideo {
  /**
   * source url of video
   */
  url?: string;
  /**
   * a proxied url of the video
   */
  proxy_url?: string;
  /**
   * height of video
   */
  height?: number;
  /**
   * width of video
   */
  width?: number;
}

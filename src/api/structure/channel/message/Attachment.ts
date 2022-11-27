import { snowflake } from "../../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure
 *
 * (i) For the `attachments` array in Message Create/Edit requests, only the `id` is required.
 *
 * \* Ephemeral attachments will automatically be removed after a set period of time. Ephemeral attachments on messages are guaranteed to be available as long as the message itself exists.
 */
export interface Attachment {
  /**
   * attachment id
   */
  id: snowflake;
  /**
   * name of file attached
   */
  filename: string;
  /**
   * description for the file (max 1024 characters)
   */
  description?: string;
  /**
   * the attachment's [media type](https://en.wikipedia.org/wiki/Media_type)
   */
  content_type?: string;
  /**
   * size of file in bytes
   */
  size: number;
  /**
   * source url of file
   */
  url: string;
  /**
   * a proxied url of file
   */
  proxy_url: string;
  /**
   * height of file (if image)
   */
  height?: number | null;
  /**
   * width of file (if image)
   */
  width?: number | null;
  /**
   * whether this attachment is ephemeral*
   */
  ephemeral?: boolean;
}

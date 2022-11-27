/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-types
 *
 * Embed types are "loosely defined" and, for the most part, are not used by our clients for rendering. Embed attributes power what is rendered. Embed types should be considered deprecated and might be removed in a future API version.
 */
export enum EmbedType {
  RICH = "rich",
  IMAGE = "image",
  VIDEO = "video",
  GIFV = "gifv",
  ARTICLE = "article",
  LINK = "link",
}

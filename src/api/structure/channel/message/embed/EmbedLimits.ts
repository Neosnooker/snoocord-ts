/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-limits
 *
 * To facilitate showing rich content, rich embeds do not follow the traditional limits of message content. However, some limits are still in place to prevent excessively large embeds. The following table describes the limits:
 *
 * All of the following limits are measured inclusively. Leading and trailing whitespace characters are not included (they are trimmed automatically).
 *
 * Additionally, the combined sum of characters in all `title`, `description`, `field.name`, `field.value`, `footer.text`, and `author.name` fields across all embeds attached to a message must not exceed 6000 characters. Violating any of these constraints will result in a `Bad Request` response.
 */
export const EmbedLimits = {
  title: 256,
  description: 4096,
  fields: 25,
  field: {
    name: 256,
    value: 1024,
  },
  footer: {
    text: 2048,
  },
  author: {
    name: 256,
  },
  /**
   * @internal
   * The limit of combined sum of characters as described in the EmbedLimits description.
   */
  sum: 6000,
};

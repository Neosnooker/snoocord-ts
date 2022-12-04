/**
 * https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-assets
 */
export interface ActivityAssets {
  /**
   * See [Activity Asset Image](https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-asset-image)
   */
  large_image?: string;
  /**
   * Text displayed when hovering over the large image of the activity
   */
  large_text?: string;
  /**
   * See [Activity Asset Image](https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-asset-image)
   */
  small_image?: string;
  /**
   * Text displayed when hovering over the small image of the activity
   */
  small_text?: string;
}

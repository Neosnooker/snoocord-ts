/**
 * https://canary.discord.com/developers/docs/resources/channel#modify-channel-json-params-group-dm
 *
 * Fires a [Channel Update](https://canary.discord.com/developers/docs/topics/gateway-events#channel-update) Gateway event.
 */
export interface JSONParamsGroupDM {
  /**
   * 1-100 character channel name
   */
  name: string;
  /**
   * base64 encoded icon
   */
  icon: string;
}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-flags
 */
export enum ApplicationFlags {
  /**
   * Intent required for bots in **100 or more servers** to receive [`presence_update` events](https://discord.com/developers/docs/topics/gateway-events#presence-update)
   */
  GATEWAY_PRESENCE = 1 << 12,
  /**
   * Intent required for bots in under 100 servers to receive [`presence_update` events](https://discord.com/developers/docs/topics/gateway-events#presence-update), found in Bot Settings
   */
  GATEWAY_PRESENCE_LIMITED = 1 << 13,
  /**
   * Intent required for bots in **100 or more servers** to receive member-related events like `guild_member_add`. See list of member-related events [under `GUILD_MEMBERS`](https://discord.com/developers/docs/topics/gateway#list-of-intents)
   */
  GATEWAY_GUILD_MEMBERS = 1 << 14,
  /**
   * Intent required for bots in under 100 servers to receive member-related events like `guild_member_add`, found in Bot Settings. See list of member-related events [under `GUILD_MEMBERS`](https://discord.com/developers/docs/topics/gateway#list-of-intents)
   */
  GATEWAY_GUILD_MEMBERS_LIMITED = 1 << 15,
  /**
   * Indicates unusual growth of an app that prevents verification
   */
  VERIFICATION_PENDING_GUILD_LIMIT = 1 << 16,
  /**
   * Indicates if an app is embedded within the Discord client (currently unavailable publicly)
   */
  EMBEDDED = 1 << 17,
  /**
   * Intent required for bots in **100 or more servers** to receive [message content](https://support-dev.discord.com/hc/en-us/articles/4404772028055)
   */
  GATEWAY_MESSAGE_CONTENT = 1 << 18,
  /**
   * Intent required for bots in under 100 servers to receive [message content](https://support-dev.discord.com/hc/en-us/articles/4404772028055), found in Bot Settings
   */
  GATEWAY_MESSAGE_CONTENT_LIMITED = 1 << 19,
  /**
   * Indicates if an app has registered global [application commands](https://discord.com/developers/docs/interactions/application-commands)
   */
  APPLICATION_COMMAND_BADGE = 1 << 23,
}

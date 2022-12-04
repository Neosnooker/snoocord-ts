/**
 * https://discord.com/developers/docs/topics/gateway#gateway-intents
 *
 * Maintaining a stateful application can be difficult when it comes to the amount of data your app is expected to process over a Gateway connection, especially at scale. Gateway intents are a system to help you lower the computational burden.
 *
 * Intents are bitwise values passed in the `intents` parameter when [Identifying](https://discord.com/developers/docs/topics/gateway#identifying) which correlate to a set of related events. For example, the event sent when a guild is created (`GUILD_CREATE`) and when a channel is updated (`CHANNEL_UPDATE`) both require the same `GUILDS (1 << 0)` intent (as listed in the table below). If you do not specify an intent when identifying, you will not receive any of the Gateway events associated with that intent.
 *
 * (i) Intents are optionally supported on the v6 gateway but required as of v8
 *
 * Two types of intents exist:
 * + **Standard intents** can be passed by default. You don't need any additional permissions or configurations.
 * + [**Privileged intents**](https://discord.com/developers/docs/topics/gateway#privileged-intents) require you to toggle the intent for your app in your app's settings within the Developer Portal before passing said intent. For verified apps (required for apps in 100+ guilds), the intent must also be approved after the verification process to use the intent. More information about privileged intents can be found [in the section below](https://discord.com/developers/docs/topics/gateway#privileged-intents).
 *
 * The connection with your app will be closed if it passes invalid intents ([`4013` close code](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes)), or a privileged intent that hasn't been configured or approved for your app ([`4014` close code](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes)).
 *
 * #### List of Intents
 * Below is a list of all intents and the Gateway events associated with them. Any events not listed means it's not associated with an intent and will always be sent to your app.
 *
 * All events, including those that aren't associated with an intent, are in the [Gateway events](https://discord.com/developers/docs/topics/gateway-events) documentation.
 *
 * \* [Thread Members Update](https://discord.com/developers/docs/topics/gateway-events#thread-members-update) contains different data depending on which intents are used.
 *
 * \** Events under the `GUILD_PRESENCES` and `GUILD_MEMBERS` intents are turned off by default on all API versions. If you are using API v6, you will receive those events if you are authorized to receive them and have enabled the intents in the Developer Portal. You do not need to use intents on API v6 to receive these events; you just need to enable the flags. If you are using API v8 or above, intents are mandatory and must be specified when identifying.
 *
 * \*** `MESSAGE_CONTENT` does not represent individual events, but rather affects what data is present for events that could contain message content fields. More information is in the [message content intent](https://discord.com/developers/docs/topics/gateway#message-content-intent) section.
 */
export enum GatewayIntents {
  /**
   * - GUILD_CREATE
   * - GUILD_UPDATE
   * - GUILD_DELETE
   * - GUILD_ROLE_CREATE
   * - GUILD_ROLE_UPDATE
   * - GUILD_ROLE_DELETE
   * - CHANNEL_CREATE
   * - CHANNEL_UPDATE
   * - CHANNEL_DELETE
   * - CHANNEL_PINS_UPDATE
   * - THREAD_CREATE
   * - THREAD_UPDATE
   * - THREAD_DELETE
   * - THREAD_LIST_SYNC
   * - THREAD_MEMBER_UPDATE
   * - THREAD_MEMBERS_UPDATE *
   * - STAGE_INSTANCE_CREATE
   * - STAGE_INSTANCE_UPDATE
   * - STAGE_INSTANCE_DELETE
   */
  GUILDS = (1 << 0),
  /**
   * - GUILD_MEMBER_ADD
   * - GUILD_MEMBER_UPDATE
   * - GUILD_MEMBER_REMOVE
   * - THREAD_MEMBERS_UPDATE *
   * **
   */
  GUILD_MEMBERS = (1 << 1),
  /**
   * - GUILD_BAN_ADD
   * - GUILD_BAN_REMOVE
   */
  GUILD_BANS = (1 << 2),
  /**
   * - GUILD_EMOJIS_UPDATE
   * - GUILD_STICKERS_UPDATE
   */
  GUILD_EMOJIS_AND_STICKERS = (1 << 3),
  /**
   * - GUILD_INTEGRATIONS_UPDATE
   * - INTEGRATION_CREATE
   * - INTEGRATION_UPDATE
   * - INTEGRATION_DELETE
   */
  GUILD_INTEGRATIONS = (1 << 4),
  /**
   * - WEBHOOKS_UPDATE
   */
  GUILD_WEBHOOKS = (1 << 5),
  /**
   * - INVITE_CREATE
   * - INVITE_DELETE
   */
  GUILD_INVITES = (1 << 6),
  /**
   * - VOICE_STATE_UPDATE
   */
  GUILD_VOICE_STATES = (1 << 7),
  /**
   * - PRESENCE_UPDATE
   * **
   */
  GUILD_PRESENCES = (1 << 8),
  /**
   * - MESSAGE_CREATE
   * - MESSAGE_UPDATE
   * - MESSAGE_DELETE
   * - MESSAGE_DELETE_BULK
   */
  GUILD_MESSAGES = (1 << 9),
  /**
   * - MESSAGE_REACTION_ADD
   * - MESSAGE_REACTION_REMOVE
   * - MESSAGE_REACTION_REMOVE_ALL
   * - MESSAGE_REACTION_REMOVE_EMOJI
   */
  GUILD_MESSAGE_REACTIONS = (1 << 10),
  /**
   * - TYPING_START
   */
  GUILD_MESSAGE_TYPING = (1 << 11),
  /**
   * - MESSAGE_CREATE
   * - MESSAGE_UPDATE
   * - MESSAGE_DELETE
   * - CHANNEL_PINS_UPDATE
   */
  DIRECT_MESSAGES = (1 << 12),
  /**
   * - MESSAGE_REACTION_ADD
   * - MESSAGE_REACTION_REMOVE
   * - MESSAGE_REACTION_REMOVE_ALL
   * - MESSAGE_REACTION_REMOVE_EMOJI
   */
  DIRECT_MESSAGE_REACTIONS = (1 << 13),
  /**
   * - TYPING_START
   */
  DIRECT_MESSAGE_TYPING = 1 << 14,
  /**
   * ***
   */
  MESSAGE_CONTENT = 1 << 15,
  /**
   * - GUILD_SCHEDULED_EVENT_CREATE
   * - GUILD_SCHEDULED_EVENT_UPDATE
   * - GUILD_SCHEDULED_EVENT_DELETE
   * - GUILD_SCHEDULED_EVENT_USER_ADD
   * - GUILD_SCHEDULED_EVENT_USER_REMOVE
   */
  GUILD_SCHEDULED_EVENTS = 1 << 16,
  /**
   * - AUTO_MODERATION_RULE_CREATE
   * - AUTO_MODERATION_RULE_UPDATE
   * - AUTO_MODERATION_RULE_DELETE
   */
  AUTO_MODERATION_CONFIGURATION = (1 << 20),
  /**
   * - AUTO_MODERATION_ACTION_EXECUTION
   */
  AUTO_MODERATION_EXECUTION = (1 << 21),
}

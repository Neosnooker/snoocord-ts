/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
 *
 * The table below lists audit log events and values (the `action_type` field) that your app may receive.
 *
 * The **Object Changed** column notes which object's values may be included in the entry. Though there are exceptions, possible keys in the `changes` array typically correspond to the object's fields. The descriptions and types for those fields can be found in the linked documentation for the object.
 *
 * If no object is noted, there won't be a `changes` array in the entry, though other fields like the `target_id` still exist and many have fields in the [`options` array](https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info).
 *
 * \* Object has exception(s) to available keys. See the [exceptions](https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-exceptions) section below for details.
 */
export enum AuditLogEvent {
  /**
   * Server settings were updated
   * + Object Changed: Guild
   */
  GUILD_UPDATE = 1,
  /**
   * Channel was created
   * + Object Changed: Channel
   */
  CHANNEL_CREATE = 10,
  /**
   * Channel settings were updated
   * + Object Changed: Channel
   */
  CHANNEL_UPDATE = 11,
  /**
   * Channel was deleted
   * + Object Changed: Channel
   */
  CHANNEL_DELETE = 12,
  /**
   * Permission overwrite was added to a channel
   * + Object Changed: Channel Overwrite
   */
  CHANNEL_OVERWRITE_CREATE = 13,
  /**
   * Permission overwrite was updated for a channel
   * + Object Changed: Channel Overwrite
   */
  CHANNEL_OVERWRITE_UPDATE = 14,
  /**
   * Permission overwrite was deleted from a channel
   * + Object Changed: Channel Overwrite
   */
  CHANNEL_OVERWRITE_DELETE = 15,
  /**
   * Member was removed from server
   */
  MEMBER_KICK = 20,
  /**
   * Members were pruned from server
   */
  MEMBER_PRUNE = 21,
  /**
   * Member was banned from server
   */
  MEMBER_BAN_ADD = 22,
  /**
   * Server ban was lifted for a member
   */
  MEMBER_BAN_REMOVE = 23,
  /**
   * Member was updated in server
   * + Object Changed: Member
   */
  MEMBER_UPDATE = 24,
  /**
   * Member was added or removed from a role
   * + Object Changed: Partial Role*
   */
  MEMBER_ROLE_UPDATE = 25,
  /**
   * Member was moved to a different voice channel
   */
  MEMBER_MOVE = 26,
  /**
   * Member was disconnected from a voice channel
   */
  MEMBER_DISCONNECT = 27,
  /**
   * Bot user was added to server
   */
  BOT_ADD = 28,
  /**
   * Role was created
   * + Object Changed: Role
   */
  ROLE_CREATE = 30,
  /**
   * Role was edited
   * + Object Changed: Role
   */
  ROLE_UPDATE = 31,
  /**
   * Role was deleted
   * + Object Changed: Role
   */
  ROLE_DELETE = 32,
  /**
   * Server invite was created
   * + Object Changed: Invite and Invite Metadata*
   */
  INVITE_CREATE = 40,
  /**
   * Server invite was updated
   * + Object Changed: Invite and Invite Metadata*
   */
  INVITE_UPDATE = 41,
  /**
   * Server invite was deleted
   * + Object Changed: Invite and Invite Metadata*
   */
  INVITE_DELETE = 42,
  /**
   * Webhook was created
   * + Object Changed: Webhook*
   */
  WEBHOOK_CREATE = 50,
  /**
   * Webhook properties or channel were updated
   * + Object Changed: Webhook*
   */
  WEBHOOK_UPDATE = 51,
  /**
   * Webhook was deleted
   * + Object Changed: Webhook*
   */
  WEBHOOK_DELETE = 52,
  /**
   * Emoji was created
   * + Object Changed: Emoji
   */
  EMOJI_CREATE = 60,
  /**
   * Emoji name was updated
   * + Object Changed: Emoji
   */
  EMOJI_UPDATE = 61,
  /**
   * Emoji was deleted
   * + Object Changed: Emoji
   */
  EMOJI_DELETE = 62,
  /**
   * Single message was deleted
   */
  MESSAGE_DELETE = 72,
  /**
   * Multiple messages were deleted
   */
  MESSAGE_BULK_DELETE = 73,
  /**
   * Message was pinned to a channel
   */
  MESSAGE_PIN = 74,
  /**
   * Message was unpinned from a channel
   */
  MESSAGE_UNPIN = 75,
  /**
   * App was added to server
   * + Object Changed: Integration
   */
  INTEGRATION_CREATE = 80,
  /**
   * App was updated (as an example, its scopes were updated)
   * + Object Changed: Integration
   */
  INTEGRATION_UPDATE = 81,
  /**
   * App was removed from server
   * + Object Changed: Integration
   */
  INTEGRATION_DELETE = 82,
  /**
   * Stage instance was created (stage channel becomes live)
   * + Object Changed: Stage Instance
   */
  STAGE_INSTANCE_CREATE = 83,
  /**
   * Stage instance details were updated
   * + Object Changed: Stage Instance
   */
  STAGE_INSTANCE_UPDATE = 84,
  /**
   * Stage instance was deleted (stage channel no longer live)
   * + Object Changed: Stage Instance
   */
  STAGE_INSTANCE_DELETE = 85,
  /**
   * Sticker was created
   * + Object Changed: Sticker
   */
  STICKER_CREATE = 90,
  /**
   * Sticker details were updated
   * + Object Changed: Sticker
   */
  STICKER_UPDATE = 91,
  /**
   * Sticker was deleted
   * + Object Changed: Sticker
   */
  STICKER_DELETE = 92,
  /**
   * Event was created
   * + Object Changed: Guild Scheduled Event
   */
  GUILD_SCHEDULED_EVENT_CREATE = 100,
  /**
   * Event was updated
   * + Object Changed: Guild Scheduled Event
   */
  GUILD_SCHEDULED_EVENT_UPDATE = 101,
  /**
   * Event was cancelled
   * + Object Changed: Guild Scheduled Event
   */
  GUILD_SCHEDULED_EVENT_DELETE = 102,
  /**
   * Thread was created in a channel
   * + Object Changed: Thread
   */
  THREAD_CREATE = 110,
  /**
   * Thread was updated
   * + Object Changed: Thread
   */
  THREAD_UPDATE = 111,
  /**
   * Thread was deleted
   * + Object Changed: Thread
   */
  THREAD_DELETE = 112,
  /**
   * Permissions were updated for a command
   * + Object Changed: Command Permission*
   */
  APPLICATION_COMMAND_PERMISSION_UPDATE = 121,
  /**
   * Auto Moderation rule was created
   * + Object Changed: Auto Moderation Rule
   */
  AUTO_MODERATION_RULE_CREATE = 140,
  /**
   * Auto Moderation rule was updated
   * + Object Changed: Auto Moderation Rule
   */
  AUTO_MODERATION_RULE_UPDATE = 141,
  /**
   * Auto Moderation rule was deleted
   * + Object Changed: Auto Moderation Rule
   */
  AUTO_MODERATION_RULE_DELETE = 142,
  /**
   * Message was blocked by AutoMod
   */
  AUTO_MODERATION_BLOCK_MESSAGE = 143,
  /**
   * Message was flagged by AutoMod
   */
  AUTO_MODERATION_FLAG_TO_CHANNEL = 144,
  /**
   * Member was timed out by AutoMod
   */
  AUTO_MODERATION_USER_COMMUNICATION_DISABLED = 145,
}

export enum ReceiveEvent {
  /**
   * Defines the heartbeat interval
   */
  HELLO = "HELLO",
  /**
   * Contains the initial state information
   */
  READY = "READY",
  /**
   * Response to Resume
   */
  RESUMED = "RESUMED",
  /**
   * Server is going away, client should reconnect to gateway and resume
   */
  RECONNECT = "RECONNECT",
  /**
   * Failure response to Identify or Resume or invalid active session
   */
  INVALID_SESSION = "INVALID_SESSION",
  /**
   * Application command permission was updated
   */
  APPLICATION_COMMAND_PERMISSIONS_UPDATE =
    "APPLICATION_COMMAND_PERMISSIONS_UPDATE",
  /**
   * Auto Moderation rule was created
   */
  AUTO_MODERATION_RULE_CREATE = "AUTO_MODERATION_RULE_CREATE",
  /**
   * Auto Moderation rule was updated
   */
  AUTO_MODERATION_RULE_UPDATE = "AUTO_MODERATION_RULE_UPDATE",
  /**
   * Auto Moderation rule was deleted
   */
  AUTO_MODERATION_RULE_DELETE = "AUTO_MODERATION_RULE_DELETE",
  /**
   * Auto Moderation rule was triggered and an action was executed (e.g. a message was blocked)
   */
  AUTO_MODERATION_ACTION_EXECUTION = "AUTO_MODERATION_ACTION_EXECUTION",
  /**
   * New guild channel created
   */
  CHANNEL_CREATE = "CHANNEL_CREATE",
  /**
   * Channel was updated
   */
  CHANNEL_UPDATE = "CHANNEL_UPDATE",
  /**
   * Channel was deleted
   */
  CHANNEL_DELETE = "CHANNEL_DELETE",
  /**
   * Message was pinned or unpinned
   */
  CHANNEL_PINS_UPDATE = "CHANNEL_PINS_UPDATE",
  /**
   * Thread created, also sent when being added to a private thread
   */
  THREAD_CREATE = "THREAD_CREATE",
  /**
   * Thread was updated
   */
  THREAD_UPDATE = "THREAD_UPDATE",
  /**
   * Thread was deleted
   */
  THREAD_DELETE = "THREAD_DELETE",
  /**
   * Sent when gaining access to a channel, contains all active threads in that channel
   */
  THREAD_LIST_SYNC = "THREAD_LIST_SYNC",
  /**
   * Thread member for the current user was updated
   */
  THREAD_MEMBER_UPDATE = "THREAD_MEMBER_UPDATE",
  /**
   * Some user(s) were added to or removed from a thread
   */
  THREAD_MEMBERS_UPDATE = "THREAD_MEMBERS_UPDATE",
  /**
   * Lazy-load for unavailable guild, guild became available, or user joined a new guild
   */
  GUILD_CREATE = "GUILD_CREATE",
  /**
   * Guild was updated
   */
  GUILD_UPDATE = "GUILD_UPDATE",
  /**
   * Guild became unavailable, or user left/was removed from a guild
   */
  GUILD_DELETE = "GUILD_DELETE",
  /**
   * User was banned from a guild
   */
  GUILD_BAN_ADD = "GUILD_BAN_ADD",
  /**
   * User was unbanned from a guild
   */
  GUILD_BAN_REMOVE = "GUILD_BAN_REMOVE",
  /**
   * Guild emojis were updated
   */
  GUILD_EMOJIS_UPDATE = "GUILD_EMOJIS_UPDATE",
  /**
   * Guild stickers were updated
   */
  GUILD_STICKERS_UPDATE = "GUILD_STICKERS_UPDATE",
  /**
   * Guild integration was updated
   */
  GUILD_INTEGRATIONS_UPDATE = "GUILD_INTEGRATIONS_UPDATE",
  /**
   * New user joined a guild
   */
  GUILD_MEMBER_ADD = "GUILD_MEMBER_ADD",
  /**
   * User was removed from a guild
   */
  GUILD_MEMBER_REMOVE = "GUILD_MEMBER_REMOVE",
  /**
   * Guild member was updated
   */
  GUILD_MEMBER_UPDATE = "GUILD_MEMBER_UPDATE",
  /**
   * Response to Request Guild Members
   */
  GUILD_MEMBERS_CHUNK = "GUILD_MEMBERS_CHUNK",
  /**
   * Guild role was created
   */
  GUILD_ROLE_CREATE = "GUILD_ROLE_CREATE",
  /**
   * Guild role was updated
   */
  GUILD_ROLE_UPDATE = "GUILD_ROLE_UPDATE",
  /**
   * Guild role was deleted
   */
  GUILD_ROLE_DELETE = "GUILD_ROLE_DELETE",
  /**
   * Guild scheduled event was created
   */
  GUILD_SCHEDULED_EVENT_CREATE = "GUILD_SCHEDULED_EVENT_CREATE",
  /**
   * Guild scheduled event was updated
   */
  GUILD_SCHEDULED_EVENT_UPDATE = "GUILD_SCHEDULED_EVENT_UPDATE",
  /**
   * Guild scheduled event was deleted
   */
  GUILD_SCHEDULED_EVENT_DELETE = "GUILD_SCHEDULED_EVENT_DELETE",
  /**
   * User subscribed to a guild scheduled event
   */
  GUILD_SCHEDULED_EVENT_USER_ADD = "GUILD_SCHEDULED_EVENT_USER_ADD",
  /**
   * User unsubscribed from a guild scheduled event
   */
  GUILD_SCHEDULED_EVENT_USER_REMOVE = "GUILD_SCHEDULED_EVENT_USER_REMOVE",
  /**
   * Guild integration was created
   */
  INTEGRATION_CREATE = "INTEGRATION_CREATE",
  /**
   * Guild integration was updated
   */
  INTEGRATION_UPDATE = "INTEGRATION_UPDATE",
  /**
   * Guild integration was deleted
   */
  INTEGRATION_DELETE = "INTEGRATION_DELETE",
  /**
   * User used an interaction, such as an Application Command
   */
  INTERACTION_CREATE = "INTERACTION_CREATE",
  /**
   * Invite to a channel was created
   */
  INVITE_CREATE = "INVITE_CREATE",
  /**
   * Invite to a channel was deleted
   */
  INVITE_DELETE = "INVITE_DELETE",
  /**
   * Message was created
   */
  MESSAGE_CREATE = "MESSAGE_CREATE",
  /**
   * Message was edited
   */
  MESSAGE_UPDATE = "MESSAGE_UPDATE",
  /**
   * Message was deleted
   */
  MESSAGE_DELETE = "MESSAGE_DELETE",
  /**
   * Multiple messages were deleted at once
   */
  MESSAGE_DELETE_BULK = "MESSAGE_DELETE_BULK",
  /**
   * User reacted to a message
   */
  MESSAGE_REACTION_ADD = "MESSAGE_REACTION_ADD",
  /**
   * User removed a reaction from a message
   */
  MESSAGE_REACTION_REMOVE = "MESSAGE_REACTION_REMOVE",
  /**
   * All reactions were explicitly removed from a message
   */
  MESSAGE_REACTION_REMOVE_ALL = "MESSAGE_REACTION_REMOVE_ALL",
  /**
   * All reactions for a given emoji were explicitly removed from a message
   */
  MESSAGE_REACTION_REMOVE_EMOJI = "MESSAGE_REACTION_REMOVE_EMOJI",
  /**
   * User was updated
   */
  PRESENCE_UPDATE = "PRESENCE_UPDATE",
  /**
   * Stage instance was created
   */
  STAGE_INSTANCE_CREATE = "STAGE_INSTANCE_CREATE",
  /**
   * Stage instance was updated
   */
  STAGE_INSTANCE_UPDATE = "STAGE_INSTANCE_UPDATE",
  /**
   * Stage instance was deleted or closed
   */
  STAGE_INSTANCE_DELETE = "STAGE_INSTANCE_DELETE",
  /**
   * User started typing in a channel
   */
  TYPING_START = "TYPING_START",
  /**
   * Properties about the user changed
   */
  USER_UPDATE = "USER_UPDATE",
  /**
   * Someone joined, left, or moved a voice channel
   */
  VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE",
  /**
   * Guild's voice server was updated
   */
  VOICE_SERVER_UPDATE = "VOICE_SERVER_UPDATE",
  /**
   * Guild channel webhook was created, update, or deleted
   */
  WEBHOOKS_UPDATE = "WEBHOOKS_UPDATE",
}

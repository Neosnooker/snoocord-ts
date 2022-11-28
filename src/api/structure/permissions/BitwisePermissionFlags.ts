/**
 * https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 *
 * Permissions are a way to limit and grant certain abilities to users in Discord. A set of base permissions can be configured at the guild level for different roles. When these roles are attached to users, they grant or revoke specific privileges within the guild. Along with the guild-level permissions, Discord also supports permission overwrites that can be assigned to individual roles or members on a per-channel basis.
 *
 * (i) [Application command permissions](https://discord.com/developers/docs/interactions/application-commands#permissions) allow you to enable or disable specific commands for entire channels in addition to individual roles or users.
 *
 * Permissions are stored in a variable-length integer serialized into a string, and are calculated using bitwise operations. For example, the permission value `123` will be serialized as `"123"`. For long-term stability, it's recommended to deserialize the permissions using your preferred languages' Big Integer libraries. The total permissions integer can be determined by OR-ing (`|`) together each individual value, and flags can be checked using AND (`&`) operations.
 *
 * In API v8 and above, all permissions are serialized as strings, including the `allow` and `deny` fields in overwrites. Any new permissions are rolled back into the base field.
 *
 * (i) In [API v6 (now deprecated)](https://discord.com/developers/docs/reference), the `permissions`, `allow`, and `deny` fields in roles and overwrites are still serialized as a number; however, these numbers shall not grow beyond 31 bits. During the remaining lifetime of API v6, all new permission bits will only be introduced in `permissions_new`, `allow_new`, and `deny_new`. These `_new` fields are just for response serialization; requests with these fields should continue to use the original `permissions`, `allow`, and `deny` fields, which accept both string or number values.
 *
 * ```py
 * # Permissions value that can Send Messages (0x800) and Add Reactions (0x40):
 * permissions = 0x40 | 0x800 # 2112
 *
 * # Checking for flags that are set:
 * (permissions & 0x40) == 0x40    # True
 * (permissions & 0x800) == 0x800 # True
 *
 * # Kick Members (0x2) was not set:
 * (permissions & 0x2) == 0x2 # False
 * ```
 *
 * Additional logic is required when permission overwrites are involved; this is further explained below. For more information about bitwise operations and flags, see [this page](https://en.wikipedia.org/wiki/Bit_field).
 *
 * Below is a table of all current permissions, their integer values in hexadecimal, brief descriptions of the privileges that they grant, and the channel type they apply to, if applicable.
 *
 * **\* These permissions require the owner account to use [two-factor authentication](https://discord.com/developers/docs/topics/oauth2#twofactor-authentication-requirement) when used on a guild that has server-wide 2FA enabled.**
 *
 * **\*\* See [Permissions for Timed Out Members](https://discord.com/developers/docs/topics/permissions#permissions-for-timed-out-members) to understand how permissions are temporarily modified for timed out users.**
 *
 * Note that permission names may be referred to differently in the Discord client. For example, "Manage Permissions" refers to MANAGE_ROLES, "Use Voice Activity" refers to USE_VAD, and "Timeout Members" refers to MODERATE_MEMBERS.
 */
export enum BitwisePermissionFlags {
  /**
   * Allows creation of instant invites
   * + Channel Type: T, V, S
   */
  CREATE_INSTANT_INVITE = 1 << 0,
  /**
   * Allows kicking members*
   */
  KICK_MEMBERS = 1 << 1,
  /**
   * Allows banning members*
   */
  BAN_MEMBERS = 1 << 2,
  /**
   * Allows all permissions and bypasses channel permission overwrites*
   */
  ADMINISTRATOR = 1 << 3,
  /**
   * Allows management and editing of channels*
   * + Channel Type: T, V, S
   */
  MANAGE_CHANNELS = 1 << 4,
  /**
   * Allows management and editing of the guild*
   */
  MANAGE_GUILD = 1 << 5,
  /**
   * Allows for the addition of reactions to messages
   * + Channel Type: T, V
   */
  ADD_REACTIONS = 1 << 6,
  /**
   * Allows for viewing of audit logs
   */
  VIEW_AUDIT_LOG = 1 << 7,
  /**
   * Allows for using priority speaker in a voice channel
   * + Channel Type: V
   */
  PRIORITY_SPEAKER = 1 << 8,
  /**
   * Allows the user to go live
   * + Channel Type: V
   */
  STREAM = 1 << 9,
  /**
   * Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels
   * + Channel Type: T, V, S
   */
  VIEW_CHANNEL = 1 << 10,
  /**
   * Allows for sending messages in a channel and creating threads in a forum (does not allow sending messages in threads)
   * + Channel Type: T, V
   */
  SEND_MESSAGES = 1 << 11,
  /**
   * Allows for sending of `/tts` messages
   * + Channel Type: T, V
   */
  SEND_TTS_MESSAGES = 1 << 12,
  /**
   * Allows for deletion of other users messages*
   * + Channel Type: T, V
   */
  MANAGE_MESSAGES = 1 << 13,
  /**
   * Links sent by users with this permission will be auto-embedded
   * + Channel Type: T, V
   */
  EMBED_LINKS = 1 << 14,
  /**
   * Allows for uploading images and files
   * + Channel Type: T, V
   */
  ATTACH_FILES = 1 << 15,
  /**
   * Allows for reading of message history
   * + Channel Type: T, V
   */
  READ_MESSAGE_HISTORY = 1 << 16,
  /**
   * Allows for using the `@everyone` tag to notify all users in a channel, and the `@here` tag to notify all online users in a channel
   * + Channel Type: T, V, S
   */
  MENTION_EVERYONE = 1 << 17,
  /**
   * Allows the usage of custom emojis from other servers
   * + Channel Type: T, V
   */
  USE_EXTERNAL_EMOJIS = 1 << 18,
  /**
   * Allows for viewing guild insights
   */
  VIEW_GUILD_INSIGHTS = 1 << 19,
  /**
   * Allows for joining of a voice channel
   * + Channel Type: V, S
   */
  CONNECT = 1 << 20,
  /**
   * Allows for speaking in a voice channel
   * + Channel Type: V
   */
  SPEAK = 1 << 21,
  /**
   * Allows for muting members in a voice channel
   * + Channel Type: V, S
   */
  MUTE_MEMBERS = 1 << 22,
  /**
   * Allows for deafening of members in a voice channel
   * + Channel Type: V, S
   */
  DEAFEN_MEMBERS = 1 << 23,
  /**
   * Allows for moving of members between voice channels
   * + Channel Type: V, S
   */
  MOVE_MEMBERS = 1 << 24,
  /**
   * Allows for using voice-activity-detection in a voice channel
   * + Channel Type: V
   */
  USE_VAD = 1 << 25,
  /**
   * Allows for modification of own nickname
   */
  CHANGE_NICKNAME = 1 << 26,
  /**
   * Allows for modification of other users nicknames
   */
  MANAGE_NICKNAMES = 1 << 27,
  /**
   * Allows management and editing of roles*
   * + Channel Type: T, V, S
   */
  MANAGE_ROLES = 1 << 28,
  /**
   * Allows management and editing of webhooks*
   * + Channel Type: T, V
   */
  MANAGE_WEBHOOKS = 1 << 29,
  /**
   * Allows management and editing of emojis and stickers*
   */
  MANAGE_EMOJIS_AND_STICKERS = 1 << 30,
  /**
   * Allows members to use application commands, including slash commands and context menu commands.
   * + Channel Type: T, V
   */
  USE_APPLICATION_COMMANDS = 1 << 31,
  /**
   * Allows for requesting to speak in stage channels. *(This permission is under active development and may be changed or removed.)*
   * + Channel Type: S
   */
  REQUEST_TO_SPEAK = 1 << 32,
  /**
   * Allows for creating, editing, and deleting scheduled events
   * + Channel Type: V, S
   */
  MANAGE_EVENTS = 1 << 33,
  /**
   * Allows for deleting and archiving threads, and viewing all private threads*
   * + Channel Type: T
   */
  MANAGE_THREADS = 1 << 34,
  /**
   * Allows for creating public and announcement threads
   * + Channel Type: T
   */
  CREATE_PUBLIC_THREADS = 1 << 35,
  /**
   * Allows for creating private threads
   * + Channel Type: T
   */
  CREATE_PRIVATE_THREADS = 1 << 36,
  /**
   * Allows the usage of custom stickers from other servers
   * + Channel Type: T, V
   */
  USE_EXTERNAL_STICKERS = 1 << 37,
  /**
   * Allows for sending messages in threads
   * + Channel Type: T
   */
  SEND_MESSAGES_IN_THREADS = 1 << 38,
  /**
   * Allows for using Activities (applications with the `EMBEDDED` flag) in a voice channel
   * + Channel Type: V
   */
  USE_EMBEDDED_ACTIVITIES = 1 << 39,
  /**
   * Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels**
   */
  MODERATE_MEMBERS = 1 << 40,
}

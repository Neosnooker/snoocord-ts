/**
 * https://discord.com/developers/docs/resources/guild#guild-object-mutable-guild-features
 *
 * \* Server also must be passing all discovery requirements
 */
export enum MutableGuildFeatures {
  /**
   * Enables Community Features in the guild
   * + Required Permissions: Administrator
   */
  COMMUNITY = "COMMUNITY",
  /**
   * Pauses all invites/access to the server
   * + Required Permissions: Manage Guild
   */
  INVITES_DISABLED = "INVITES_DISABLED",
  /**
   * Enables discovery in the guild, making it publicly listed
   * + Required Permissions: Administrator*
   */
  DISCOVERABLE = "DISCOVERABLE",
}

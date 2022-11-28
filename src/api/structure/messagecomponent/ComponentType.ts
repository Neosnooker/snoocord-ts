/**
 * https://discord.com/developers/docs/interactions/message-components#component-object-component-types
 */
export enum ComponentType {
  /**
   * Container for other components
   */
  ACTION_ROW = 1,
  /**
   * Button object
   */
  BUTTON = 2,
  /**
   * Select menu for picking from defined text options
   */
  STRING_SELECT = 3,
  /**
   * Text input object
   */
  TEXT_INPUT = 4,
  /**
   * Select menu for users
   */
  USER_SELECT = 5,
  /**
   * Select menu for roles
   */
  ROLE_SELECT = 6,
  /**
   * Select menu for mentionables (users and roles)
   */
  MENTIONABLE_SELECT = 7,
  /**
   * Select menu for channels
   */
  CHANNEL_SELECT = 8,
}

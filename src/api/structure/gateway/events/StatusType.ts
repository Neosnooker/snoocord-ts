/**
 * https://discord.com/developers/docs/topics/gateway-events#update-presence-status-types
 */
export enum StatusType {
  /**
   * Online
   */
  ONLINE = "online",
  /**
   * Do Not Disturb
   */
  DND = "dnd",
  /**
   * AFK
   */
  IDLE = "idle",
  /**
   * Invisible and shown as offline
   */
  INVISIBLE = "invisible",
  /**
   * Offline
   */
  OFFLINE = "offline",
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 *
 * All gateway events in Discord are tagged with an opcode that denotes the payload type. Your connection to our gateway may also sometimes close. When it does, you will receive a close code that tells you what happened.
 */
export enum GatewayOpcode {
  /**
   * An event was dispatched.
   * + Client Action: Receive
   */
  DISPATCH = 0,
  /**
   * Fired periodically by the client to keep the connection alive.
   * + Client Action: Send/Receive
   */
  HEARTBEAT = 1,
  /**
   * Starts a new session during the initial handshake.
   * + Client Action: Send
   */
  IDENTIFY = 2,
  /**
   * Update the client's presence.
   * + Client Action: Send
   */
  PRESENCE_UPDATE = 3,
  /**
   * Used to join/leave or move between voice channels.
   * + Client Action: Send
   */
  VOICE_STATE_UPDATE = 4,
  /**
   * Resume a previous session that was disconnected.
   * + Client Action: Send
   */
  RESUME = 6,
  /**
   * You should attempt to reconnect and resume immediately.
   * + Client Action: Receive
   */
  RECONNECT = 7,
  /**
   * Request information about offline guild members in a large guild.
   * + Client Action: Send
   */
  REQUEST_GUILD_MEMBER = 8,
  /**
   * The session has been invalidated. You should reconnect and identify/resume accordingly.
   * + Client Action: Receive
   */
  INVALID_SESSION = 9,
  /**
   * Sent immediately after connecting, contains the `heartbeat_interval` to use.
   * + Client Action: Receive
   */
  HELLO = 10,
  /**
   * Sent in response to receiving a heartbeat to acknowledge that it has been received.
   * + Client Action: Receive
   */
  HEARTBEAT_ACK = 11,
}

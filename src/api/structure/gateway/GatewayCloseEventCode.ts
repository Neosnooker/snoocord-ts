/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes
 *
 * In order to prevent broken reconnect loops, you should consider some close codes as a signal to stop reconnecting. This can be because your token expired, or your identification is invalid. This table explains what the application defined close codes for the gateway are, and which close codes you should not attempt to reconnect.
 */
export enum GatewayCloseEventCode {
  /**
   * We're not sure what went wrong. Try reconnecting?
   * + Reconnect: true
   */
  UNKNOWN_ERROR = 4000,
  /**
   * You sent an invalid [Gateway opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes) or an invalid payload for an opcode. Don't do that!
   * + Reconnect: true
   */
  UNKNOWN_OPCODE = 4001,
  /**
   * You sent an invalid [payload](https://discord.com/developers/docs/topics/gateway#sending-events) to Discord. Don't do that!
   * + Reconnect: true
   */
  DECODE_ERROR = 4002,
  /**
   * You sent us a payload prior to [identifying](https://discord.com/developers/docs/topics/gateway#identifying).
   * + Reconnect: true
   */
  NOT_AUTHENTICATED = 4003,
  /**
   * The account token sent with your [identify payload](https://discord.com/developers/docs/topics/gateway-events#identify) is incorrect.
   */
  AUTHENTICATION_FAILED = 4004,
  /**
   * You sent more than one identify payload. Don't do that!
   * + Reconnect: true
   */
  ALREADY_AUTHENTICATED = 4005,
  /**
   * The sequence sent when [resuming](https://discord.com/developers/docs/topics/gateway-events#resume) the session was invalid. Reconnect and start a new session.
   * + Reconnect: true
   */
  INVALID_SEQ = 4007,
  /**
   * Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this.
   * + Reconnect: true
   */
  RATE_LIMITED = 4008,
  /**
   * Your session timed out. Reconnect and start a new one.
   * + Reconnect: true
   */
  SESSION_TIMED_OUT = 4009,
  /**
   * You sent us an invalid [shard when identifying](https://discord.com/developers/docs/topics/gateway#sharding).
   * + Reconnect: false
   */
  INVALID_SHARD = 4010,
  /**
   * The session would have handled too many guilds - you are required to [shard](https://discord.com/developers/docs/topics/gateway#sharding) your connection in order to connect.
   * + Reconnect: false
   */
  SHARDING_REQUIRED = 4011,
  /**
   * You sent an invalid version for the gateway.
   * + Reconnect: false
   */
  INVALID_API_VERSION = 4012,
  /**
   * You sent an invalid intent for a [Gateway Intent](https://discord.com/developers/docs/topics/gateway#gateway-intents). You may have incorrectly calculated the bitwise value.
   * + Reconnect: false
   */
  INVALID_INTENT = 4013,
  /**
   * You sent a disallowed intent for a [Gateway Intent](https://discord.com/developers/docs/topics/gateway#gateway-intents). You may have tried to specify an intent that you have not [enabled or are not approved for](https://discord.com/developers/docs/topics/gateway#privileged-intents).
   * + Reconnect: false
   */
  DISALLOWED_INTENT = 4014,
}

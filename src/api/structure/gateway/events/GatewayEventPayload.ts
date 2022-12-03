import { GatewayOpcode } from "../GatewayOpcode.ts";

/**
 * https://discord.com/developers/docs/topics/gateway-events#payload-structure
 *
 * Gateway event payloads have a common structure, but the contents of the associated data (`d`) varies between the different events.
 *
 * \* `s` and `t` are `null` when `op` is not `0` ([Gateway Dispatch opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes)).
 */
export interface GatewayEventPayload {
  /**
   * [Gateway opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes), which indicates the payload type
   */
  op: GatewayOpcode;
  /**
   * Event data
   */
  d: Record<string | number, unknown> | null;
  /**
   * Sequence number of event used for [resuming sessions](https://discord.com/developers/docs/topics/gateway#resuming) and [heartbeating](https://discord.com/developers/docs/topics/gateway#sending-heartbeats)
   */
  s: number | null;
  /**
   * Event name
   */
  t: string | null;
}

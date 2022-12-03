import { GatewayPresenceUpdate } from "./GatewayPresenceUpdate.ts";
import { IdentifyConnectionProperties } from "./IdentifyConnectionProperties.ts";

/**
 * https://discord.com/developers/docs/topics/gateway-events#identify-identify-structure
 *
 * Used to trigger the initial handshake with the gateway.
 *
 * Details about identifying is in the [Gateway documentation](https://discord.com/developers/docs/topics/gateway#identifying).
 */
export interface IdentifyStructure {
  /**
   * Authentication token
   */
  token: string;
  /**
   * [Connection properties](https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties)
   */
  properties: IdentifyConnectionProperties;
  /**
   * Whether this connection supports compression of packets
   * + Default: false
   */
  compress?: boolean;
  /**
   * Value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list
   * + Default: 50
   */
  large_threshold?: number;
  /**
   * Used for [Guild Sharding](https://discord.com/developers/docs/topics/gateway#sharding)
   * @type array of two integers (shard_id, num_shards)
   */
  shard?: [number, number][];
  /**
   * Presence structure for initial presence information
   */
  presence?: GatewayPresenceUpdate;
  /**
   * [Gateway Intents](https://discord.com/developers/docs/topics/gateway#gateway-intents) you wish to receive
   */
  intents: number;
}

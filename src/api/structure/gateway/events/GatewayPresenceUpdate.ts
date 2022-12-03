import { Activity } from "./activity/Activity.ts";
import { StatusType } from "./StatusType.ts";

/**
 * https://discord.com/developers/docs/topics/gateway-events#update-presence-gateway-presence-update-structure
 *
 * Sent by the client to indicate a presence or status update.
 */
export interface GatewayPresenceUpdate {
  /**
   * Unix time (in milliseconds) of when the client went idle, or null if the client is not idle
   */
  since: number | null;
  /**
   * User's activities
   */
  activities: Pick<Activity, "name" | "type" | "url">[];
  /**
   * User's new [status](https://discord.com/developers/docs/topics/gateway-events#update-presence-status-types)
   */
  status: StatusType;
  /**
   * Whether or not the client is afk
   */
  afk: boolean;
}

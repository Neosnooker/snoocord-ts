import { ActivityEmoji } from "./ActivityEmoji.ts";
import { ActivityTimestamps } from "./ActivityTimestamps.ts";
import { Button } from "../../../messagecomponent/Button.ts";
import { snowflake } from "../../../snowflake.ts";

/**
 * https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-structure
 *
 * (i) Bots are only able to send `name`, `type`, and optionally `url`.
 */
export interface Activity {
  /**
   * Activity's name
   */
  name: string;
  /**
   * [Activity type](https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types)
   */
  type: number;
  /**
   * Stream URL, is validated when type is 1
   */
  url?: string | null;
  /**
   * Unix timestamp (in milliseconds) of when the activity was added to the user's session
   */
  created_at: number;
  /**
   * Unix timestamps for start and/or end of the game
   */
  timestamps?: ActivityTimestamps;
  /**
   * Application ID for the game
   */
  application_id?: snowflake;
  /**
   * What the player is currently doing
   */
  details?: string | null;
  /**
   * User's current party status
   */
  state?: string | null;
  /**
   * Emoji used for a custom status
   */
  emoji?: ActivityEmoji | null;
  /**
   * Information for the current party of the player
   */
  party?: Party;
  /**
   * Images for the presence and their hover texts
   */
  assets?: Assets;
  /**
   * Secrets for Rich Presence joining and spectating
   */
  secrets?: Secrets;
  /**
   * Whether or not the activity is an instanced game session
   */
  instance?: boolean;
  /**
   * [Activity flags](https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-flags) `OR`d together, describes what the payload includes
   */
  flags?: number;
  /**
   * Custom buttons shown in the Rich Presence (max 2)
   */
  buttons?: Button[];
}

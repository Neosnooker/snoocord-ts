import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object
 *
 * A *Stage Instance* holds information about a live stage.
 */
export interface StageInstance {
  /**
   * The id of this Stage instance
   */
  id: snowflake;
  /**
   * The guild id of the associated Stage channel
   */
  guild_id: snowflake;
  /**
   * The id of the associated Stage channel
   */
  channel_id: snowflake;
  /**
   * The topic of the Stage instance (1-120 characters)
   */
  topic: string;
  /**
   * The [privacy level](https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level) of the Stage instance
   */
  privacy_level: number;
  /**
   * Whether or not Stage Discovery is disabled (deprecated)
   */
  discoverable_disabled: boolean;
  /**
   * The id of the scheduled event for this Stage instance
   */
  guild_scheduled_event_id: snowflake | null;
}

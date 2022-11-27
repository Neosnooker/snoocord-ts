import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 *
 * Additional data used when an action is executed. Different fields are relevant based on the value of [action type](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types).
 *
 * * Maximum of 2419200 seconds (4 weeks)
 */
export interface ActionMetadata {
  /**
   * + Associated Action Types: SEND_ALERT_MESSAGE
   * channel to which user content should be logged
   */
  channel_id: snowflake;
  /**
   * + Associated Action Types: TIMEOUT
   * timeout duration in seconds *
   */
  duration_seconds: number;
}

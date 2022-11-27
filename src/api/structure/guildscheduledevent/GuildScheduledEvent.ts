import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";
import { GuildScheduledEventEntityMetadata } from "./GuildScheduledEventEntityMetadata.ts";
import { GuildScheduledEventEntityType } from "./GuildScheduledEventEntityType.ts";
import { GuildScheduledEventPrivacyLevel } from "./GuildScheduledEventPrivacyLevel.ts";
import { GuildScheduledEventStatus } from "./GuildScheduledEventStatus.ts";

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object
 *
 * A representation of a scheduled event in a [guild](https://discord.com/developers/docs/resources/guild).
 *
 * \* `creator_id` will be null and `creator` will not be included for events created before October 25th, 2021, when the concept of `creator_id` was introduced and tracked.
 *
 * \** See [field requirements by entity type](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-field-requirements-by-entity-type) to understand the relationship between `entity_type` and the following fields: `channel_id`, `entity_metadata`, and `scheduled_end_time`
 */
export interface GuildScheduledEvent {
  /**
   * the id of the scheduled event
   */
  id: snowflake;
  /**
   * the guild id which the scheduled event belongs to
   */
  guild_id: snowflake;
  /**
   * the channel id in which the scheduled event will be hosted, or `null` if [scheduled entity type](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types) is `EXTERNAL`**
   */
  channel_id: snowflake | null;
  /**
   * the id of the user that created the scheduled event *
   */
  creator_id?: snowflake | null;
  /**
   * the name of the scheduled event (1-100 characters)
   */
  name: string;
  /**
   * the description of the scheduled event (1-1000 characters)
   */
  description?: string | null;
  /**
   * the time the scheduled event will start
   */
  scheduled_start_time: string;
  /**
   * the time the scheduled event will end, required if entity_type is `EXTERNAL`**
   */
  scheduled_end_time: string;
  /**
   * the privacy level of the scheduled event
   */
  privacy_level: GuildScheduledEventPrivacyLevel;
  /**
   * the status of the scheduled event
   */
  status: GuildScheduledEventStatus;
  /**
   * the type of the scheduled event
   */
  entity_type: GuildScheduledEventEntityType;
  /**
   * the id of an entity associated with a guild scheduled event
   */
  entity_id: snowflake | null;
  /**
   * additional metadata for the guild scheduled event**
   */
  entity_metadata: GuildScheduledEventEntityMetadata | null;
  /**
   * the user that created the scheduled event
   */
  creator?: User;
  /**
   * the number of users subscribed to the scheduled event
   */
  user_count?: number;
  /**
   * the [cover image hash](https://discord.com/developers/docs/reference#image-formatting) of the scheduled event
   */
  image?: string | null;
}

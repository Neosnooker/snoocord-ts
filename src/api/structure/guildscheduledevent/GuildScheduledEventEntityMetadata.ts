/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata
 *
 * \* required for events with `'entity_type': EXTERNAL`
 */
export interface GuildScheduledEventEntityMetadata {
  /**
   * location of the event (1-100 characters)*
   */
  location?: string;
}

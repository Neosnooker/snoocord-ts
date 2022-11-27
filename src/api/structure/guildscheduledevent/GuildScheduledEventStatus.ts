/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status
 *
 * \* Once `status` is set to `COMPLETED` or `CANCELED`, the `status` can no longer be updated
 */
export enum GuildScheduledEventStatus {
  SCHEDULED = 1,
  ACTIVE = 2,
  /**
   * \*
   */
  COMPLETED = 3,
  /**
   * \*
   */
  CANCELED = 4,
}

/**
 * https://discord.com/developers/docs/resources/channel#thread-metadata-object
 *
 * The thread metadata object contains a number of thread-specific channel fields that are not needed by other channel types.
 */
export interface ThreadMetadata {
  /**
   * whether the thread is archived
   */
  archived: boolean;
  /**
   * the thread will stop showing in the channel list after `auto_archive_duration` minutes of inactivity, can be set to: 60, 1440, 4320, 10080
   */
  auto_archive_duration: number;
  /**
   * timestamp when the thread's archive status was last changed, used for calculating recent activity
   */
  archive_timestamp: string;
  /**
   * whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it
   */
  locked: boolean;
  /**
   * whether non-moderators can add other non-moderators to a thread; only available on private threads
   */
  invitable?: boolean;
  /**
   * timestamp when the thread was created; only populated for threads created after 2022-01-09
   */
  create_timestamp?: string | null;
}

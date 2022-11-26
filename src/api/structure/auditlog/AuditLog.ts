/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure
 *
 * When an administrative action is performed in a guild, an entry is added to its audit log. Viewing audit logs requires the `VIEW_AUDIT_LOG` permission and can be fetched by apps using the [`GET /guilds/{guild.id}/audit-logs` endpoint](https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log), or seen by users in the guild's **Server Settings**. All audit log entries are stored for 45 days.
 *
 * When an app is performing an eligible action using the APIs, it can pass an `X-Audit-Log-Reason` header to indicate why the action was taken. More information is in the [audit log entry](https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object) section.
 * 
 * \* Threads referenced in [THREAD_CREATE] and [THREAD_UPDATE] events are included in the threads map since archived threads might not be kept in memory by clients.
 */
export interface AuditLog {
  /**
   * List of application commands referenced in the audit log
   */
  application_commands: ApplicationCommand[];
  /**
   * List of audit log entries, sorted from most to least recent
   */
  audit_log_entries: AuditLogEntry[];
  /**
   * List of auto moderation rules referenced in the audit log
   */
  auto_moderation_rules: AutoModerationRule[];
  /**
   * List of guild scheduled events referenced in the audit log
   */
  guild_scheduled_events: GuildScheduledEvent[];
  /**
   * List of partial integration objects.
   */
  integrations: Partial<Integration>[];
  /**
   * List of threads referenced in the audit log*
   */
  threads: Channel /** THREADS */;
  /**
   * List of users referenced in the audit log
   */
  users: User[];
  /**
   * List of webhooks referenced in the audit log
   */
  webhooks: Webhook[];
}

import { snowflake } from "../snowflake.ts";
import { AuditLogChange } from "./AuditLogChange.ts";
import { AuditLogEvent } from "./AuditLogEvent.ts";
import { OptionalAuditEntryInfo } from "./OptionalAuditEntryInfo.ts";

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object
 *
 * Each audit log entry represents a single administrative action (or [event](https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events)), indicated by `action_type`. Most entries contain one to many changes in the changes array that affected an entity in Discord—whether that's a user, channel, guild, emoji, or something else.
 *
 * The information (and structure) of an entry's changes will be different depending on its type. For example, in `MEMBER_ROLE_UPDATE` events there is only one change: a member is either added or removed from a specific role. However, in `CHANNEL_CREATE` events there are many changes, including (but not limited to) the channel's name, type, and permission overwrites added. More details are in the [change object](https://discord.com/developers/docs/resources/audit-log#audit-log-change-object) section.
 *
 * Apps can specify why an administrative action is being taken by passing an `X-Audit-Log-Reason` request header, which will be stored as the audit log entry's `reason` field. The `X-Audit-Log-Reason` header supports 1-512 URL-encoded UTF-8 characters. Reasons are visible to users in the client and to apps when fetching audit log entries with the API.
 */
export interface AuditLogEntry {
  /**
   * ID of the affected entity (webhook, user, role, etc.)
   */
  target_id: string | null;
  /**
   * Changer made to the target_id
   */
  changes: AuditLogChange[];
  /**
   * User or app that made the changes
   */
  user_id: snowflake | null;
  /**
   * ID of the entry
   */
  id: snowflake;
  /**
   * Type of action that occurred
   */
  action_type: AuditLogEvent;
  /**
   * Additional info for certain event types
   */
  options?: OptionalAuditEntryInfo;
  /**
   * Reason for the change (1-512 characters)
   */
  reason?: string;
}

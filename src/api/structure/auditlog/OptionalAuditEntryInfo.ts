import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
 */
export interface OptionalAuditEntryInfo {
  /**
   * ID of the app whose permissions were targeted
   * + Event Types: APPLICATION_COMMAND_PERMISSION_UPDATE
   */
  application_id: snowflake;
  /**
   * Name of the Auto Moderation rule that was triggered
   * + Event Types: AUTO_MODERATION_BLOCK_MESSAGE & AUTO_MODERATION_FLAG_TO_CHANNEL & AUTO_MODERATION_USER_COMMUNICATION_DISABLED
   */
  auto_moderation_rule_name: string;
  /**
   * Trigger type of the Auto Moderation rule that was triggered
   * + Event Types: AUTO_MODERATION_BLOCK_MESSAGE & AUTO_MODERATION_FLAG_TO_CHANNEL & AUTO_MODERATION_USER_COMMUNICATION_DISABLED
   */
  auto_moderation_rule_trigger_type: string;
  /**
   * Channel in which the entities were targeted
   * + Event Types: MEMBER_MOVE & MESSAGE_PIN & MESSAGE_UNPIN & MESSAGE_DELETE & STAGE_INSTANCE_CREATE & STAGE_INSTANCE_UPDATE & STAGE_INSTANCE_DELETE & AUTO_MODERATION_BLOCK_MESSAGE & AUTO_MODERATION_FLAG_TO_CHANNEL & AUTO_MODERATION_USER_COMMUNICATION_DISABLED
   */
  channel_id: snowflake;
  /**
   * Number of entities that were targeted
   * + Event Types: MESSAGE_DELETE & MESSAGE_BULK_DELETE & MEMBER_DISCONNECT & MEMBER_MOVE
   */
  count: string;
  /**
   * Number of days after which inactive members were kicked
   * + Event Types: MEMBER_PRUNE
   */
  delete_member_days: string;
  /**
   * ID of the overwritten entity
   * + Event Types: CHANNEL_OVERWRITE_CREATE & CHANNEL_OVERWRITE_UPDATE & CHANNEL_OVERWRITE_DELETE
   */
  id: snowflake;
  /**
   * Number of numbers removed by the prune
   * + Event Types: MEMBER_PRUNE
   */
  members_removed: string;
  /**
   * ID of the message that was targeted
   * + Event Types: MESSAGE_PIN & MESSAGE_UNPIN
   */
  message_id: snowflake;
  /**
   * Name of the role if type is "0" (not present if type is "1")
   * + Event Types: CHANNEL_OVERWRITE_CREATE & CHANNEL_OVERWRITE_UPDATE & CHANNEL_OVERWRITE_DELETE
   */
  role_name: string;
  /**
   * Type of overwritten entity - role ("0") or member ("1")
   * + Event Types: CHANNEL_OVERWRITE_CREATE & CHANNEL_OVERWRITE_UPDATE & CHANNEL_OVERWRITE_DELETE
   */
  type: string;
}

import { snowflake } from "../snowflake.ts";
import { AutoModerationAction } from "./AutoModerationAction.ts";
import { EventType } from "./EventType.ts";
import { TriggerMetadata } from "./TriggerMetadata.ts";
import { TriggerType } from "./TriggerType.ts";

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure
 *
 * Auto Moderation is a feature which allows each [guild](https://discord.com/developers/docs/resources/guild) to set up rules that trigger based on some criteria. For example, a rule can trigger whenever a message contains a specific keyword.
 *
 * Rules can be configured to automatically execute actions whenever they trigger. For example, if a user tries to send a message which contains a certain keyword, a rule can trigger and block the message before it is sent.
 */
export interface AutoModerationRule {
  /**
   * the id of this rule
   */
  id: snowflake;
  /**
   * the id of the guild which this rule belongs to
   */
  guild_id: snowflake;
  /**
   * the rule name
   */
  name: string;
  /**
   * the user which first created this rule
   */
  creator_id: snowflake;
  /**
   * the rule [event type](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types)
   */
  event_type: EventType;
  /**
   * the rule [trigger type](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types)
   */
  trigger_type: TriggerType;
  /**
   * the rule [trigger metadata](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata)
   */
  trigger_metadata: TriggerMetadata;
  /**
   * the actions which will execute when the rule is triggered
   */
  actions: AutoModerationAction[];
  /**
   * whether the rule is enabled
   */
  enabled: boolean;
  /**
   * the role ids that should not be affected by the rule (Maximum of 20)
   */
  exempt_roles: snowflake[];
  /**
   * the channel ids that should not be affected by the rule (Maximum of 50)
   */
  exempt_channels: snowflake[];
}

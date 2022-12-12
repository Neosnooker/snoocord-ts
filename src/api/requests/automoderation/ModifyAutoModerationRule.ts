import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { AutoModerationAction } from "../../structure/automoderation/AutoModerationAction.ts";
import { AutoModerationRule } from "../../structure/automoderation/AutoModerationRule.ts";
import { EventType } from "../../structure/automoderation/EventType.ts";
import { TriggerMetadata } from "../../structure/automoderation/TriggerMetadata.ts";
import { TriggerType } from "../../structure/automoderation/TriggerType.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [guild id, auto moderation rule id]
 *
 * ---
 * https://canary.discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
 *
 * Modify an existing rule. Returns an [auto moderation rule](https://canary.discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object) on success. Fires an [Auto Moderation Rule Update](https://canary.discord.com/developers/docs/topics/gateway-events#auto-moderation-rule-update) Gateway event.
 *
 * (i) Requires `MANAGE_GUILD` [permissions](https://canary.discord.com/developers/docs/resources/auto-moderation#auto-moderation-permission-requirements).
 *
 * (i) All parameters for this endpoint are optional.
 *
 * (i) This endpoint supports the `X-Audit-Log-Reason` header.
 *
 * * Can be omitted based on `trigger_type`. See the `Associated Trigger Types `column in [trigger metadata](https://canary.discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata) to understand which `trigger_type` values require `trigger_metadata` to be set.
 */
export const ModifyAutoModerationRule: RequestFunctionBase<
  [snowflake],
  Partial<{
    /**
     * the rule name
     */
    name: string;
    /**
     * the [event type](https://canary.discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types)
     */
    event_type: EventType; // The event type.
    /**
     * the [trigger type](https://canary.discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types)
     */
    trigger_type: TriggerType;
    /**
     * the [trigger metadata](https://canary.discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata)*
     */
    trigger_metadata?: TriggerMetadata;
    /**
     * the actions which will execute when the rule is triggered
     */
    actions: AutoModerationAction[];
    /**
     * whether the rule is enabled (False by default)
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
  }>,
  AutoModerationRule,
  {
    "X-Audit-Log-Reason": string;
  }
> = (httpClient, urlParameters, additionalParameters) =>
  httpClient.sendRequestToDiscordEndpoint<AutoModerationRule>({
    endpoint: `/guilds/${urlParameters[0]}/auto-moderation/rules`,
    method: RequestMethod.PATCH,
    additionalParameters,
  });

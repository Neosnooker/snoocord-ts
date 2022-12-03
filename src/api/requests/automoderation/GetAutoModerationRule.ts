import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { AutoModerationRule } from "../../structure/automoderation/AutoModerationRule.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [guild id, auto moderation rule id]
 *
 * ---
 * https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule
 *
 * Get a single rule. Returns an [auto moderation rule](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object) object.
 *
 * (i) This endpoint requires the `MANAGE_GUILD` [permission](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-permission-requirements).
 */
export const GetAutoModerationRule: RequestFunctionBase<
  [snowflake, snowflake],
  undefined,
  AutoModerationRule
> = (httpClient, urlParameters, _additionalParameters) =>
  httpClient.sendRequestToDiscordEndpoint<AutoModerationRule>({
    endpoint: `/guilds/${urlParameters[0]}/auto-moderation/rules/${
      urlParameters[1]
    }`,
    method: RequestMethod.GET,
  });

import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { AutoModerationRule } from "../../structure/automoderation/AutoModerationRule.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [guild id]
 *
 * ---
 * https://canary.discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild
 *
 * Get a list of all rules currently configured for the guild. Returns a list of [auto moderation rule](https://canary.discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object) objects for the given guild.
 *
 * (i) This endpoint requires the `MANAGE_GUILD` [permission](https://canary.discord.com/developers/docs/resources/auto-moderation#auto-moderation-permission-requirements).
 */
export const ListAutoModerationRules: RequestFunctionBase<
  [snowflake],
  undefined,
  AutoModerationRule[]
> = (httpClient, urlParameters, _additionalParameters) =>
  httpClient.sendRequestToDiscordEndpoint<AutoModerationRule[]>({
    endpoint: `/guilds/${urlParameters[0]}/auto-moderation/rules`,
    method: RequestMethod.GET,
  });

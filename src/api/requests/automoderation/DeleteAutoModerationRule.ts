import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [guild id]
 *
 * ---
 * https://canary.discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule
 *
 * (i) This endpoint requires the `MANAGE_GUILD` [permission](https://canary.discord.com/developers/docs/resources/auto-moderation#auto-moderation-permission-requirements).
 *
 * (i) This endpoint supports the `X-Audit-Log-Reason` header.
 */
export const CreateAutoModerationRule: RequestFunctionBase<
  [snowflake, snowflake],
  undefined,
  undefined,
  {
    "X-Audit-Log-Reason": string;
  }
> = (httpClient, urlParameters, _additionalParameters) =>
  httpClient.sendRequestToDiscordEndpoint<undefined>({
    endpoint: `/guilds/${urlParameters[0]}/auto-moderation/rules/${
      urlParameters[1]
    }`,
    method: RequestMethod.DELETE,
  });

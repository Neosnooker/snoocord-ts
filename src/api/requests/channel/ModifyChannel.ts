import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { Channel } from "../../structure/channel/Channel.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";
import { JSONParamsGroupDM } from "./modifychannel/JSONParamsGroupDM.ts";
import { JSONParamsGuildChannel } from "./modifychannel/JSONParamsGuildChannel.ts";
import { JSONParamsThread } from "./modifychannel/JSONParamsThread.ts";

/**
 * @param urlParameters [channel id]
 *
 * ---
 * https://canary.discord.com/developers/docs/resources/channel#modify-channel
 *
 * Update a channel's settings. Returns a [channel](https://canary.discord.com/developers/docs/resources/channel#channel-object) on success, and a 400 BAD REQUEST on invalid parameters. All JSON parameters are optional.
 * 
 * (i) This endpoint supports the `X-Audit-Log-Reason` header.
 */
export const ModifyChannel: RequestFunctionBase<
  [snowflake],
  Partial<JSONParamsGuildChannel | JSONParamsGroupDM | JSONParamsThread>,
  Channel,
  {
    "X-Audit-Log-Reason": string
  }
> = (httpClient, urlParameters, _additionalParameters, additionalHeaders) =>
  httpClient.sendRequestToDiscordEndpoint<Channel>({
    endpoint: `/channels/${urlParameters[0]}`,
    method: RequestMethod.PATCH,
    additionalHeaders
  });

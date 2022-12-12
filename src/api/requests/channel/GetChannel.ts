import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { Channel } from "../../structure/channel/Channel.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [channel id]
 *
 * ---
 * https://canary.discord.com/developers/docs/resources/channel#get-channel
 *
 * Get a channel by ID. Returns a [channel](https://canary.discord.com/developers/docs/resources/channel#channel-object) object. If the channel is a thread, a [thread member](https://canary.discord.com/developers/docs/resources/channel#thread-member-object) object is included in the returned result.
 */
export const GetChannel: RequestFunctionBase<
  [snowflake],
  undefined,
  Channel
> = (httpClient, urlParameters, _additionalParameters) =>
  httpClient.sendRequestToDiscordEndpoint<Channel>({
    endpoint: `/channels/${urlParameters[0]}`,
    method: RequestMethod.GET,
  });

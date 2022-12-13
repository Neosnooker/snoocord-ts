import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { Message } from "../../structure/channel/message/Message.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [channel id, message id]
 *
 * ---
 * https://canary.discord.com/developers/docs/resources/channel#get-channel-message
 *
 * Returns a specific message in the channel. If operating on a guild channel, this endpoint requires the `READ_MESSAGE_HISTORY` permission to be present on the current user. Returns a [message](https://canary.discord.com/developers/docs/resources/channel#message-object) object on success.
 */
export const GetChannelMessage: RequestFunctionBase<
  [snowflake, snowflake],
  undefined,
  Message
> = (httpClient, urlParameters, _additionalParameters) =>
  httpClient.sendRequestToDiscordEndpoint<Message>({
    endpoint: `/channels/${urlParameters[0]}/messages/${urlParameters[1]}`,
    method: RequestMethod.GET,
  });

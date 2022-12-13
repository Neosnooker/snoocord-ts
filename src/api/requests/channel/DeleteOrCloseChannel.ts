import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { Channel } from "../../structure/channel/Channel.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [channel id]
 *
 * ---
 * https://discord.com/developers/docs/resources/channel#deleteclose-channel
 *
 * Delete a channel, or close a private message. Requires the `MANAGE_CHANNELS` permission for the guild, or `MANAGE_THREADS` if the channel is a thread. Deleting a category does not delete its child channels; they will have their `parent_id` removed and a [Channel Update](https://canary.discord.com/developers/docs/topics/gateway-events#channel-update) Gateway event will fire for each of them. Returns a [channel](https://canary.discord.com/developers/docs/resources/channel#channel-object) object on success. Fires a [Channel Delete](https://canary.discord.com/developers/docs/topics/gateway-events#channel-delete) Gateway event (or [Thread Delete](https://canary.discord.com/developers/docs/topics/gateway-events#thread-delete) if the channel was a thread).
 * 
 * (!) Deleting a guild channel cannot be undone. Use this with caution, as it is impossible to undo this action when performed on a guild channel. In contrast, when used with a private message, it is possible to undo the action by opening a private message with the recipient again.
 * 
 * (i) For Community guilds, the Rules or Guidelines channel and the Community Updates channel cannot be deleted.
 * 
 * (i) This endpoint supports the `X-Audit-Log-Reason` header.
 */
export const ModifyChannel: RequestFunctionBase<
  [snowflake],
  undefined,
  Channel,
  {
    "X-Audit-Log-Reason": string
  }
> = (httpClient, urlParameters, _additionalParameters, additionalHeaders) =>
  httpClient.sendRequestToDiscordEndpoint<Channel>({
    endpoint: `/channels/${urlParameters[0]}`,
    method: RequestMethod.DELETE,
    additionalHeaders
  });

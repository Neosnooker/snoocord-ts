import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { Message } from "../../structure/channel/message/Message.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [channel id]
 *
 * ---
 * https://canary.discord.com/developers/docs/resources/channel#get-channel-messages
 *
 * Returns the messages for a channel. If operating on a guild channel, this endpoint requires the `VIEW_CHANNEL` permission to be present on the current user. If the current user is missing the `READ_MESSAGE_HISTORY` permission in the channel then this will return no messages (since they cannot read the message history). Returns an array of [message](https://canary.discord.com/developers/docs/resources/channel#message-object) objects on success.
 * 
 * (i) The `before`, `after`, and `around` parameters are mutually exclusive, only one may be passed at a time.
 */
export const GetChannelMessages: RequestFunctionBase<
  [snowflake],
  {
    /**
     * Get messages around this message ID
     * + Default: absent
     */
    around?: snowflake,
    /**
     * Get messages before this message ID
     * + Default: absent
     */
    before?: snowflake,
    /**
     * Get messages after this message ID
     * + Default: absent
     */
    after?: snowflake,
    /**
     * Max number of messages to return (1-100)
     * + Default: 50
     */
    limit?: number
  },
  Message[]
> = (httpClient, urlParameters, _additionalParameters) =>
  httpClient.sendRequestToDiscordEndpoint<Message[]>({
    endpoint: `/channels/${urlParameters[0]}/messages`,
    method: RequestMethod.GET,
  });

import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { AuditLog } from "../../structure/auditlog/AuditLog.ts";
import { AllowedMentions } from "../../structure/channel/message/AllowedMentions.ts";
import { Attachment } from "../../structure/channel/message/Attachment.ts";
import { Embed } from "../../structure/channel/message/embed/Embed.ts";
import { MessageReference } from "../../structure/channel/message/MessageReference.ts";
import { MessageComponent } from "../../structure/messagecomponent/MessageComponent.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [channel id]
 *
 * ---
 * https://discord.com/developers/docs/resources/channel#create-message
 *
 * Discord may strip certain characters from message content, like invalid unicode characters or characters which cause unexpected message formatting. If you are passing user-generated strings into message content, consider sanitizing the data to prevent unexpected behavior and utilizing allowed_mentions to prevent unexpected mentions.
 *
 * Post a [message](https://discord.com/developers/docs/resources/channel#message-object) to a guild text or DM channel. Returns a message object. Fires a [Message Create](https://discord.com/developers/docs/topics/gateway-events#message-create) Gateway event. See [message formatting](https://discord.com/developers/docs/reference#message-formatting) for more information on how to properly format messages.
 *
 * To create a message as a reply to another message, apps can include a [`message_reference`](https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure) with a `message_id`. The `channel_id` and `guild_id` in the `message_reference` are optional, but will be validated if provided.
 *
 * Files must be attached using a `multipart/form-data` body as described in [Uploading Files](https://discord.com/developers/docs/reference#uploading-files).
 *
 * #### Limitations
 * + When operating on a guild channel, the current user must have the `SEND_MESSAGES` permission.
 * + When sending a message with `tts` (text-to-speech) set to `true`, the current user must have the `SEND_TTS_MESSAGES` permission.
 * + When creating a message as a reply to another message, the current user must have the `READ_MESSAGE_HISTORY` permission.
 *   + The referenced message must exist and cannot be a system message.
 * + The maximum request size when sending a message is **8MiB**
 * For the embed object, you can set every field except `type` (it will be `rich` regardless of if you try to set it), `provider`, `video`, and any `height`, `width`, or `proxy_url` values for images.
 *
 * #### JSON/Form Params
 * (i) When creating a message, apps must provide a value for **at least one of** `content`, `embeds`, `sticker_ids`, `components`, or `files[n]`.
 */
export const GetGuildAuditLog: RequestFunctionBase<[snowflake], {
  content?: string;
  nonce?: number | string;
  tts?: boolean;
  embeds?: Embed[];
  allowed_mentions?: AllowedMentions;
  message_reference?: MessageReference;
  components?: MessageComponent[];
  sticker_ids?: snowflake[];
  // files?: FileContent
  payload_json?: string;
  attachments?: Partial<Attachment>[];
  flags?: number;
}, AuditLog> = (httpClient, urlParameters, additionalParameters) =>
  httpClient.sendRequestToDiscordEndpoint<AuditLog>({
    endpoint: `/channels/${urlParameters[0]}/messages`,
    method: RequestMethod.POST,
    additionalParameters: additionalParameters,
  });

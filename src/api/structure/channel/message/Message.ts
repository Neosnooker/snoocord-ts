import { Application } from "../../application/Application.ts";
import { MessageInteraction } from "../../interaction/MessageInteraction.ts";
import { MessageComponent } from "../../messagecomponent/MessageComponent.ts";
import { snowflake } from "../../snowflake.ts";
import { Sticker } from "../../sticker/Sticker.ts";
import { StickerItem } from "../../sticker/StickerItem.ts";
import { User } from "../../user/User.ts";
import { Channel } from "../Channel.ts";
import { Attachment } from "./Attachment.ts";
import { ChannelMention } from "./ChannelMention.ts";
import { Embed } from "./embed/Embed.ts";
import { MessageActivity } from "./MessageActivity.ts";
import { MessageReference } from "./MessageReference.ts";
import { Reaction } from "./Reaction.ts";

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-structure
 *
 * Represents a message sent in a channel within Discord.
 *
 * (i) Fields specific to the `MESSAGE_CREATE` and `MESSAGE_UPDATE` events are listed in the [Gateway documentation](https://discord.com/developers/docs/topics/gateway-events#message-create).
 *
 * (!) `content`, `embeds`, `attachments`, and `components` require the [`MESSAGE_CONTENT` intent](https://discord.com/developers/docs/topics/gateway#message-content-intent) to receive non-empty values.
 *
 * \* The author object follows the structure of the user object, but is only a valid user in the case where the message is generated by a user or bot user. If the message is generated by a webhook, the author object corresponds to the webhook's id, username, and avatar. You can tell if a message is generated by a webhook by checking for the `webhook_id` on the message object.
 *
 * \** An app will receive empty values in the `content`, `embeds`, `attachments`, and `components` fields if they have not configured (or been approved for) the [`MESSAGE_CONTENT` privileged intent (`1 << 15`)](https://discord.com/developers/docs/topics/gateway#message-content-intent).
 *
 * \*** Not all channel mentions in a message will appear in `mention_channels`. Only textual channels that are visible to everyone in a lurkable guild will ever be included. Only crossposted messages (via Channel Following) currently include `mention_channels` at all. If no mentions in the message meet these requirements, this field will not be sent.
 *
 * \**** This field is only returned for messages with a `type` of `19` (REPLY) or `21` (THREAD_STARTER_MESSAGE). If the message is a reply but the `referenced_message` field is not present, the backend did not attempt to fetch the message that was being replied to, so its state is unknown. If the field exists but is null, the referenced message was deleted.
 */
export interface Message {
  /**
   * id of the message
   */
  id: snowflake;
  /**
   * id of the channel the message was sent in
   */
  channel_id: snowflake;
  /**
   * the author of this message (not guaranteed to be a valid user, see below)*
   */
  author: User;
  /**
   * contents of the message**
   */
  content: string;
  /**
   * when this message was sent
   */
  timestamp: string;
  /**
   * when this message was edited (or null if never)
   */
  edited_timestamp: string | null;
  /**
   * whether this was a TTS message
   */
  tts: boolean;
  /**
   * whether this message mentions everyone
   */
  mention_everyone: boolean;
  /**
   * users specifically mentioned in the message
   */
  mentions: User[];
  /**
   * roles specifically mentioned in this message
   */
  mention_roles: snowflake[];
  /**
   * channels specifically mentioned in this message
   */
  mention_channels?: ChannelMention[];
  /**
   * any attached files
   */
  attachments: Attachment[];
  /**
   * any embedded content
   */
  embeds: Embed[];
  /**
   * reactions to the message
   */
  reactions?: Reaction[];
  /**
   * used for validating a message was sent
   */
  nonce?: number | string;
  /**
   * whether this message is pinned
   */
  pinned: boolean;
  /**
   * if the message is generated by a webhook, this is the webhook's id
   */
  webhook_id?: snowflake;
  /**
   * [type of message](https://discord.com/developers/docs/resources/channel#message-object-message-types)
   */
  type: number;
  /**
   * sent with Rich Presence-related chat embeds
   */
  activity?: MessageActivity;
  /**
   * sent with Rich Presence-related chat embeds
   */
  application?: Partial<Application>;
  /**
   * if the message is an [Interaction](https://discord.com/developers/docs/interactions/receiving-and-responding) or application-owned webhook, this is the id of the application
   */
  application_id?: snowflake;
  /**
   * data showing the source of a crosspost, channel follow add, pin, or reply message
   */
  message_reference?: MessageReference;
  /**
   * [message flags](https://discord.com/developers/docs/resources/channel#message-object-message-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field)
   */
  flags?: number;
  /**
   * the message associated with the message_reference
   */
  referenced_message?: Message | null;
  /**
   * sent if the message is a response to an [Interaction](https://discord.com/developers/docs/interactions/receiving-and-responding)
   */
  interaction?: MessageInteraction;
  /**
   * the thread that was started from this message, includes [thread member](https://discord.com/developers/docs/resources/channel#thread-member-object) object
   */
  thread?: Channel;
  /**
   * sent if the message contains components like buttons, action rows, or other interactive components
   */
  components?: MessageComponent[];
  /**
   * sent if the message contains stickers
   */
  sticker_items?: StickerItem[];
  /**
   * @deprecated
   * **Deprecated** the stickers sent with the message
   */
  stickers?: Sticker[];
  /**
   * A generally increasing integer (there may be gaps or duplicates) that represents the approximate position of the message in a thread, it can be used to estimate the relative position of the message in a thread in company with `total_message_sent` on parent thread
   */
  position?: number;
}

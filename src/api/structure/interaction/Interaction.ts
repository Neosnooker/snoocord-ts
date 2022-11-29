import { Message } from "../channel/message/Message.ts";
import { GuildMember } from "../guild/GuildMember.ts";
import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";
import { InteractionData } from "./InteractionData.ts";
import { InteractionType } from "./InteractionType.ts";

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 *
 * An [**Interaction**](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object) is the message that your application receives when a user uses an application command or a message component.
 *
 * For [Slash Commands](https://discord.com/developers/docs/interactions/application-commands#slash-commands), it includes the values that the user submitted.
 *
 * For [User Commands](https://discord.com/developers/docs/interactions/application-commands#user-commands) and [Message Commands](https://discord.com/developers/docs/interactions/application-commands#message-commands), it includes the resolved user or message on which the action was taken.
 *
 * For [Message Components](https://discord.com/developers/docs/interactions/message-componentss) it includes identifying information about the component that was used. It will also include some metadata about how the interaction was triggered: the `guild_id`, `channel_id`, `member` and other fields. You can find all the values in our data models below.
 *
 * \* This is always present on application command, message component, and modal submit interaction types. It is optional for future-proofing against new interaction types
 *
 * \** `member` is sent when the interaction is invoked in a guild, and `user` is sent when invoked in a DM
 *
 * \*** This is available on all interaction types except PING
 */
export interface Interaction {
  /**
   * ID of the interaction
   */
  id: snowflake;
  /**
   * ID of the application this interaction is for
   */
  application_id: snowflake;
  /**
   * Type of interaction
   */
  type: InteractionType;
  /**
   * Interaction data payload*
   */
  data?: InteractionData;
  /**
   * Guild that the interaction was sent from
   */
  guild_id?: snowflake;
  /**
   * Channel that the interaction was sent from
   */
  channel_id?: snowflake;
  /**
   * Guild member data for the invoking user, including permissions**
   */
  member?: GuildMember;
  /**
   * Guild member data for the invoking user, including permissions
   */
  user?: User;
  /**
   * Continuation token for responding to the interaction
   */
  token: string;
  /**
   * Read-only property, always `1`
   */
  version: 1;
  /**
   * For components, the message they were attached to
   */
  message: Message;
  /**
   * Bitwise set of permissions the app or bot has within the channel the interaction was sent from
   */
  app_permissions?: string;
  /**
   * Selected [language](https://discord.com/developers/docs/reference#locales) of the invoking user***
   */
  locale?: string;
  /**
   * [Guild's preferred locale](https://discord.com/developers/docs/resources/guild#guild-object), if invoked in a guild
   */
  guild_locale?: string;
}

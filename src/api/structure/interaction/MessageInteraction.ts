import { GuildMember } from "../guild/GuildMember.ts";
import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";
import { InteractionType } from "./InteractionType.ts";

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object
 *
 * This is sent on the [message object](https://discord.com/developers/docs/resources/channel#message-object) when the message is a response to an Interaction without an existing message.
 *
 * (i) This means responses to [Message Components](https://discord.com/developers/docs/interactions/message-components) do not include this property, instead including a [message reference](https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure) object as components always exist on preexisting messages.
 */
export interface MessageInteraction {
  /**
   * ID of the interaction
   */
  id: snowflake;
  /**
   * Type of interaction
   */
  type: InteractionType;
  /**
   * Name of the [application command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure), including subcommands and subcommand groups
   */
  name: string;
  /**
   * User who invoked the interaction
   */
  user: User;
  /**
   * Member who invoked the interaction in the guild
   */
  member?: Partial<GuildMember>;
}

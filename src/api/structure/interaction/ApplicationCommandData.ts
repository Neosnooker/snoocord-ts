import { snowflake } from "../snowflake.ts";
import { ApplicationCommandInteractionDataOption } from "./ApplicationCommandInteractionDataOption.ts";
import { ResolvedData } from "./ResolvedData.ts";

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 *
 * (i) Sent in `APPLICATION_COMMAND` and `APPLICATION_COMMAND_AUTOCOMPLETE` interactions.
 *
 * \* This can be partial when in response to `APPLICATION_COMMAND_AUTOCOMPLETE`
 */
export interface ApplicationCommandData {
  /**
   * the [`ID`](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) of the invoked command
   */
  id: snowflake;
  /**
   * the [`name`](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) of the invoked command
   */
  name: string;
  /**
   * the [`type`](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure) of the invoked command
   */
  type: number;
  /**
   * converted users + roles + channels + attachments
   */
  resolved?: ResolvedData;
  /**
   * the params + values from the user*
   */
  options?: ApplicationCommandInteractionDataOption;
  /**
   * the id of the guild the command is registered to
   */
  guild_id?: snowflake;
  /**
   * id of the user or message targeted by a [user](https://discord.com/developers/docs/interactions/application-commands#user-commands) or [message](https://discord.com/developers/docs/interactions/application-commands#message-commands) command
   */
  target_id?: snowflake;
}

import { snowflake } from "../snowflake.ts";
import { ApplicationCommandOption } from "./ApplicationCommandOption.ts";
import { ApplicationCommandType } from "./ApplicationCommandType.ts";

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object
 *
 * Application commands are native ways to interact with apps in the Discord client. There are 3 types of commands accessible in different interfaces: the chat input, a message's context menu (top-right menu or right-clicking in a message), and a user's context menu (right-clicking on a user).
 *
 * ### Application Command Naming
 * `CHAT_INPUT` command names and command option names must match the following regex `^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$` with the unicode flag set. If there is a lowercase variant of any letters used, you must use those. Characters with no lowercase variants and/or uncased letters are still allowed. `USER` and `MESSAGE` commands may be mixed case and can include spaces.
 *
 * (!) `default_permission` will soon be deprecated. You can instead set `default_member_permissions` to `"0"` to disable the command for everyone except admins by default, and/or set `dm_permission` to `false` to disable globally-scoped commands inside of DMs with your app
 */
export interface ApplicationCommand {
  /**
   * Unique ID of command
   * + Valid Types: all
   */
  id: snowflake;
  /**
   * [Type of command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types), defaults to `1`
   * + Valid Types: all
   */
  type?: ApplicationCommandType;
  /**
   * ID of the parent application
   * + Valid Types: all
   */
  application_id: snowflake;
  /**
   * guild id of the command, if not global
   * + Valid Types: all
   */
  guild_id?: snowflake;
  /**
   * [Name of command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-naming), 1-32 characters
   * + Valid Types: all
   */
  name: string;
  /**
   * Localization dictionary for `name` field. Values follow the same restrictions as `name`
   * + Valid Types: all
   */
  name_localizations?: Record</* locale */ string, string> | null;
  /**
   * Description for `CHAT_INPUT` commands, 1-100 characters. Empty string for `USER` and `MESSAGE` commands
   * + Valid Types: all
   */
  description: string;
  /**
   * Localization dictionary for `description` field. Values follow the same restrictions as `description`
   * + Valid Types: all
   */
  description_localizations?: Record<string, /* locale */ string> | null;
  /**
   * Parameters for the command, max of 25
   * + Valid Types: CHAT_INPUT
   */
  options?: ApplicationCommandOption[];
  /**
   * Set of [permissions](https://discord.com/developers/docs/topics/permissions) represented as a bit set
   * + Valid Types: all
   */
  default_member_permissions: string | null;
  /**
   * Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
   * + Valid Types: all
   */
  dm_permission?: boolean;
  /**
   * Not recommended for use as field will soon be deprecated. Indicates whether the command is enabled by default when the app is added to a guild, defaults to `true`
   * + Valid Types: all
   */
  default_permission?: boolean | null;
  /**
   * Autoincrementing version identifier updated during substantial record changes
   * + Valid Types: all
   */
  version: snowflake;
}

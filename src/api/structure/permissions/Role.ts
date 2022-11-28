import { snowflake } from "../snowflake.ts";
import { RoleTag } from "./RoleTag.ts";

/**
 * https://discord.com/developers/docs/topics/permissions#role-object
 *
 * Roles represent a set of permissions attached to a group of users. Roles have names, colors, and can be "pinned" to the side bar, causing their members to be listed separately. Roles can have separate permission profiles for the global context (guild) and channel context. The `@everyone` role has the same ID as the guild it belongs to.
 *
 * Roles without colors (`color == 0`) do not count towards the final computed color in the user list.
 */
export interface Role {
  /**
   * role id
   */
  id: snowflake;
  /**
   * role name
   */
  name: string;
  /**
   * integer representation of hexadecimal color code
   */
  color: number;
  /**
   * if this role is pinned in the user listing
   */
  host: boolean;
  /**
   * role [icon hash](https://discord.com/developers/docs/reference#image-formatting)
   */
  icon?: string | null;
  /**
   * role unicode emoji
   */
  unicode_emoji?: string | null;
  /**
   * position of this role
   */
  position: number;
  /**
   * Internally, Snoocord converts the permissions to a BigInt.
   *
   * ---
   *
   * permission bit set
   */
  permissions: string;
  /**
   * whether this role is managed by an integration
   */
  managed: boolean;
  /**
   * whether this role is mentionable
   */
  mentionable: boolean;
  /**
   * the tags this role has
   */
  tags?: RoleTag[];
}

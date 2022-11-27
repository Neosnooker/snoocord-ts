import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object
 *
 * See [permissions](https://discord.com/developers/docs/topics/permissions#permissions) for more information about the `allow` and `deny` fields.
 */
export interface Overwrite {
  /**
   * role or user id
   */
  id: snowflake;
  /**
   * either 0 (role) or 1 (member)
   */
  type: number;
  /**
   * permission bit set
   */
  allow: string;
  /**
   * permission bit set
   */
  deny: string;
}

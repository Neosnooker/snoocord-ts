import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export interface RoleTag {
  /**
   * the id of the bot this role belongs to
   */
  bot_id?: snowflake;
  /**
   * the id of the integration this role belongs to
   */
  integration_id?: snowflake;
  /**
   * whether this is the guild's premium subscriber role
   */
  premium_subscriber?: null;
}

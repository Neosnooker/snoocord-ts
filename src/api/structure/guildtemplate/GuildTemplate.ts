import { Guild } from "../guild/Guild.ts";
import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";

/**
 * https://discord.com/developers/docs/resources/guild-template#guild-template-object
 *
 * Represents a code that when used, creates a guild based on a snapshot of an existing guild.
 */
export interface GuildTemplate {
  /**
   * the template code (unique ID)
   */
  code: string;
  /**
   * template name
   */
  name: string;
  /**
   * the description for the template
   */
  description: string | null;
  /**
   * number of times this template has been used
   */
  usage_count: number;
  /**
   * the ID of the user who created the template
   */
  creator_id: snowflake;
  /**
   * the user who created the template
   */
  creator: User;
  /**
   * when this template was created
   */
  created_at: string;
  /**
   * when this template was last synced to the source guild
   */
  updated_at: string;
  /**
   * the ID of the guild this template is based on
   */
  source_guild_id: snowflake;
  /**
   * the guild snapshot this template contains
   */
  serialized_source_guild: Partial<Guild>;
  /**
   * whether the template has unsynced changes
   */
  is_dirty: boolean | null;
}

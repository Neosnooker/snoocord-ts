import { Channel } from "../../channel/Channel.ts";
import { snowflake } from "../../snowflake.ts";
import { User } from "../../user/User.ts";

/**
 * https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure
 *
 * (!) The fields `id`, `discriminator` and `avatar` are anonymized to prevent abuse.
 */
export interface GuildWidget {
  /**
   * guild id
   */
  id: snowflake;
  /**
   * guild name (2-100 characters)
   */
  name: string;
  /**
   * instant invite for the guilds specified widget invite channel
   */
  instant_invite: string | null;
  /**
   * voice and stage channels which are accessible by @everyone
   */
  channels: Partial<Channel>;
  /**
   * special widget user objects that includes users presence (Limit 100)
   */
  members: Partial<User>;
  /**
   * number of online members in this guild
   */
  presence_count: number;
}

import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/guild#unavailable-guild-object
 *
 * A partial [guild](https://discord.com/developers/docs/resources/guild#guild-object) object. Represents an Offline Guild, or a Guild whose information has not been provided through [Guild Create](https://discord.com/developers/docs/topics/gateway-events#guild-create) events during the Gateway connect.
 */
export interface UnavailableGuild {
  /**
   * guild id
   */
  id: snowflake;
  /**
   * whether the guild is unavailable
   */
  unavailable: true;
}

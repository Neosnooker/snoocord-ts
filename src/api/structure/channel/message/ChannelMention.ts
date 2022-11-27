import { snowflake } from "../../snowflake.ts";
import { ChannelType } from "../ChannelType.ts";

/**
 * https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure
 */
export interface ChannelMention {
  /**
   * id of the channel
   */
  id: snowflake;
  /**
   * id of the guild containing the channel
   */
  guild_id: snowflake;
  /**
   * the [type of channel](https://discord.com/developers/docs/resources/channel#channel-object-channel-types)
   */
  type: ChannelType;
  /**
   * the name of the channel
   */
  name: string;
}

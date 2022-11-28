import { snowflake } from "../../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure
 */
export interface GuildWidgetSettings {
  /**
   * whether the widget is enabled
   */
  enabled: boolean;
  /**
   * the widget channel id
   */
  channel_id: snowflake | null;
}

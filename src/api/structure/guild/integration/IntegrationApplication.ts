import { snowflake } from "../../snowflake.ts";
import { User } from "../../user/User.ts";

/**
 * https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure
 */
export interface IntegrationApplication {
  /**
   * the id of the app
   */
  id: snowflake;
  /**
   * the name of the app
   */
  name: string;
  /**
   * the [icon hash](https://discord.com/developers/docs/reference#image-formatting) of the app
   */
  icon: string | null;
  /**
   * the description of the app
   */
  description: string;
  /**
   * the bot associated with this application
   */
  bot?: User;
}

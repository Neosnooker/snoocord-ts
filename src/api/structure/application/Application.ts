import { InstallParams } from "./InstallParams.ts";
import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface Application {
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
   * an array of rpc orign urls, if rpc is enabled
   */
  rpc_origins?: string[];
  /**
   * when false only app owner can join the app's bot to guilds
   */
  bot_public: boolean;
  /**
   * when true the app's bot will only join upon completion of the full oauth2 code grant flow
   */
  bot_require_code_grant: boolean;
  /**
   * the url of the app's terms of service
   */
  terms_of_service_url?: string;
  /**
   * the url of the app's privacy policy
   */
  privacy_policy_url?: string;
  /**
   * partial user object containing info on the owner of the application
   */
  owner?: Partial<null /* TODO: set to User */>;
  /**
   * @deprecated
   * **deprecated and will be removed in v11.** An empty string.
   */
  summary: string;
  /**
   * the hex encoded key for verification in interactions and the GameSDK's [GetTicket](https://discord.com/developers/docs/game-sdk/applications#getticket)
   */
  verify_key: string;
  /**
   * if the application belongs to a team, this will be a list of the members of that team
   */
  team: /* TODO: set to Team|null */ null;
  /**
   * if this application is a game sold on Discord, this field will be the guild to which it has been linked
   */
  guild_id: snowflake;
  /**
   * if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
   */
  primary_sku_id: snowflake;
  /**
   * if this application is a game sold on Discord, this field will be the URL slug that links to the store page
   */
  slug?: string;
  /**
   * the application's default rich presence invite [cover image hash](https://discord.com/developers/docs/reference#image-formatting)
   */
  cover_image?: string;
  /**
   * the application's public flags
   */
  flags?: number;
  /**
   * up to 5 tags describing the content and functionality of the application
   */
  tags?: string[];
  /**
   * settings for the application's default in-app authorization link, if enabled
   */
  install_params?: InstallParams;
  /**
   * the application's default custom authorization link, if enabled
   */
  custom_install_url?: string;
}

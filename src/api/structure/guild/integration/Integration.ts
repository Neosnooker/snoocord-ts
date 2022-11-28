import { snowflake } from "../../snowflake.ts";
import { User } from "../../user/User.ts";
import { IntegrationAccount } from "./IntegrationAccount.ts";
import { IntegrationApplication } from "./IntegrationApplication.ts";
import { IntegrationExpireBehavior } from "./IntegrationExpireBehavior.ts";

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 *
 * \* These fields are not provided for discord bot integrations.
 */
export interface Integration {
  /**
   * integration id
   */
  id: snowflake;
  /**
   * integration name
   */
  name: string;
  /**
   * integration type (twitch, youtube, or discord)
   */
  type: string;
  /**
   * is this integration enabled*
   */
  enabled?: boolean;
  /**
   * is this integration syncing*
   */
  syncing?: boolean;
  /**
   * id that this integration uses for "subscribers"*
   */
  role_id?: snowflake;
  /**
   * whether emoticons should be synced for this integration (twitch only currently)*
   */
  enable_emoticons?: boolean;
  /**
   * the behavior of expiring subscribers*
   */
  expire_behavior?: IntegrationExpireBehavior;
  /**
   * the grace period (in days) before expiring subscribers*
   */
  expire_grace_period?: number;
  /**
   * user for this integration*
   */
  user?: User;
  /**
   * integration account information
   */
  account: IntegrationAccount;
  /**
   * when this integration was last synced*
   */
  synced_at?: string;
  /**
   * how many subscribers this integration has*
   */
  subscriber_count?: number;
  /**
   * has this integration been revoked*
   */
  revoked?: boolean;
  /**
   * The bot/OAuth2 application for discord integrations
   */
  application?: IntegrationApplication;
  /**
   * the scopes the application has been authorized for
   */
  scopes: /*OAuth2Scopes*/ string[];
}

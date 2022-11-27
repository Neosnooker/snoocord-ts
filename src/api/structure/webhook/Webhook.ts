import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";
import { WebhookType } from "./WebhokType.ts";

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 *
 * Webhooks are a low-effort way to post messages to channels in Discord. They do not require a bot user or authentication to use.
 *
 * \* These fields will be absent if the webhook creator has since lost access to the guild where the followed channel resides
 */
export interface Webhook {
  /**
   * the id of the webhook
   */
  id: snowflake;
  /**
   * the [type](https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types) of the webhook
   */
  type: WebhookType;
  /**
   * the guild id this webhook is for, if any
   */
  guild_id?: snowflake | null;
  /**
   * the channel id this webhook is for, if any
   */
  channel_id: snowflake | null;
  /**
   * the user this webhook was created by (not returned when getting a webhook with its token)
   */
  user?: User;
  /**
   * the default name of the webhook
   */
  name: string | null;
  /**
   * the default user avatar [hash](https://discord.com/developers/docs/reference#image-formatting) of the webhook
   */
  avatar: string | null;
  /**
   * the secure token of the webhook (returned for Incoming Webhooks)
   */
  token?: string;
  /**
   * the bot/OAuth2 application that created this webhook
   */
  application_id: snowflake | null;
  /**
   * the guild of the channel that this webhook is following (returned for Channel Follower Webhooks)*
   */
  source_guild?: Partial<Guild>;
  /**
   * the channel that this webhook is following (returned for Channel Follower Webhooks)*
   */
  source_channel?: Partial<Channel>;
  /**
   * the url used for executing the webhook (returned by the [webhooks](https://discord.com/developers/docs/topics/oauth2#webhooks) OAuth2 flow)
   */
  url?: string;
}

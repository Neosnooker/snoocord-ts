import { Emoji } from "../emoji/Emoji.ts";
import { Role } from "../permissions/Role.ts";
import { snowflake } from "../snowflake.ts";
import { Sticker } from "../sticker/Sticker.ts";
import { DefaultMessageNotificationLevel } from "./DefaultMessageNotificationLevel.ts";
import { ExplicitContentFilterLevel } from "./ExplicitContentFilterLevel.ts";
import { GuildFeatures } from "./GuildFeatures.ts";
import { GuildNSFWLevel } from "./GuildNSFWLevel.ts";
import { MFALevel } from "./MFALevel.ts";
import { PremiumTier } from "./PremiumTier.ts";
import { VerificationLevel } from "./VerificationLevel.ts";
import { WelcomeScreen } from "./WelcomeScreen.ts";

/**
 * https://discord.com/developers/docs/resources/guild#guild-object
 *
 * Guilds in Discord represent an isolated collection of users and channels, and are often referred to as "servers" in the UI.
 *
 * (i) Fields specific to the `GUILD_CREATE` event are listed in the [Gateway Events documentation](https://discord.com/developers/docs/topics/gateway-events#guild-create).
 *
 * \* These fields are only sent when using the GET Current User Guilds endpoint and are relative to the requested user
 *
 * \** This field is deprecated and is replaced by channel.rtc_region
 */
export interface Guild {
  /**
   * guild id
   */
  id: snowflake;
  /**
   * guild name (2-100 characters, excluding trailing and leading whitespace)
   */
  name: string;
  /**
   * [icon hash](https://discord.com/developers/docs/reference#image-formatting)
   */
  icon: string | null;
  /**
   * [icon hash](https://discord.com/developers/docs/reference#image-formatting), returned when in the template object
   */
  icon_hash?: string | null;
  /**
   * [splash hash](https://discord.com/developers/docs/reference#image-formatting)
   */
  splash: string | null;
  /**
   * [discovery splash hash](https://discord.com/developers/docs/reference#image-formatting); only present for guilds with the "DISCOVERABLE" feature
   */
  discovery_splash: string | null;
  /**
   * true if [the user](https://discord.com/developers/docs/resources/user#get-current-user-guilds) is the owner of the guild*
   */
  owner?: boolean;
  /**
   * id of owner
   */
  owner_id: snowflake;
  /**
   * total permissions for [the user](https://discord.com/developers/docs/resources/user#get-current-user-guilds) in the guild (excludes overwrites)*
   */
  permissions?: string;
  /**
   * @deprecated
   * [voice region](https://discord.com/developers/docs/resources/voice#voice-region-object) id for the guild (deprecated)**
   */
  region?: string | null;
  /**
   * id of afk channel
   */
  afk_channel_id: snowflake | null;
  /**
   * afk timeout in seconds, can be set to: 60, 300, 900, 1800, 3600
   */
  afk_timeout: number;
  /**
   * true if the server widget is enabled
   */
  widget_enabled?: boolean;
  /**
   * the channel id that the widget will generate an invite to, or `null` if set to no invite
   */
  widget_channel_id?: snowflake | null;
  /**
   * [verification level](https://discord.com/developers/docs/resources/guild#guild-object-verification-level) required for the guild
   */
  verification_level: VerificationLevel;
  /**
   * default [message notifications level](https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level)
   */
  default_message_notifications: DefaultMessageNotificationLevel;
  /**
   * [explicit content filter level](https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level)
   */
  explicit_content_filter: ExplicitContentFilterLevel;
  /**
   * roles in the guild
   */
  roles: Role[];
  /**
   * custom guild emojis
   */
  emojis: Emoji[];
  /**
   * enabled guild features
   */
  features: GuildFeatures[];
  /**
   * required [MFA level](https://discord.com/developers/docs/resources/guild#guild-object-mfa-level) for the guild
   */
  mfa_level: MFALevel;
  /**
   * application id of the guild creator if it is bot-created
   */
  application_id: string | null;
  /**
   * the id of the channel where guild notices such as welcome messages and boost events are posted
   */
  system_channel_id: snowflake | null;
  /**
   * [system channel flags](https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags)
   */
  system_channel_flags: number;
  /**
   * the id of the channel where Community guilds can display rules and/or guidelines
   */
  rules_channel_id: snowflake | null;
  /**
   * the maximum number of presences for the guild (`null` is always returned, apart from the largest of guilds)
   */
  max_presences?: number | null;
  /**
   * the maximum number of members for the guild
   */
  max_members?: number;
  /**
   * the vanity url code for the guild
   */
  vanity_url_code: string | null;
  /**
   * the description of a guild
   */
  description: string | null;
  /**
   * [banner hash](https://discord.com/developers/docs/reference#image-formatting)
   */
  banner: string | null;
  /**
   * [premium tier](https://discord.com/developers/docs/resources/guild#guild-object-premium-tier) (Server Boost level)
   */
  premium_tier: PremiumTier;
  /**
   * the number of boosts this guild currently has
   */
  premium_subscription_count?: number;
  /**
   * the preferred [locale](https://discord.com/developers/docs/reference#locales) of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to "en-US"
   */
  preferred_locale: string;
  /**
   * the id of the channel where admins and moderators of Community guilds receive notices from Discord
   */
  public_updates_channel_id: snowflake | null;
  /**
   * the maximum amount of users in a video channel
   */
  max_video_channel_users?: number;
  /**
   * approximate number of members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true`
   */
  approximate_member_count?: number;
  /**
   * approximate number of non-offline members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true`
   */
  approximate_presence_count?: number;
  /**
   * the welcome screen of a Community guild, shown to new members, returned in an [Invite](https://discord.com/developers/docs/resources/invite#invite-object)'s guild object
   */
  welcome_screen?: WelcomeScreen;
  /**
   * [guild NSFW level](https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level)
   */
  nsfw_level: GuildNSFWLevel;
  /**
   * custom guild stickers
   */
  stickers?: Sticker[];
  /**
   * whether the guild has the boost progress bar enabled
   */
  premium_progress_bar_enabled: boolean;
}

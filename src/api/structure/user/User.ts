import { snowflake } from "../snowflake.ts";
import { PremiumType } from "./PremiumType.ts";

/**
 * https://discord.com/developers/docs/resources/user#user-object
 *
 * Users in Discord are generally considered the base entity. Users can spawn across the entire platform, be members of guilds, participate in text and voice chat, and much more. Users are separated by a distinction of "bot" vs "normal." Although they are similar, bot users are automated users that are "owned" by another user. Unlike normal users, bot users do not have a limitation on the number of Guilds they can be a part of.
 *
 * ### Usernames and Nicknames
 *
 * Discord enforces the following restrictions for usernames and nicknames:
 *
 * 1. Names can contain most valid unicode characters. We limit some zero-width and non-rendering characters.
 * 2. Usernames must be between 2 and 32 characters long.
 * 3. Nicknames must be between 1 and 32 characters long.
 * 4. Names are sanitized and trimmed of leading, trailing, and excessive internal whitespace.
 *
 * The following restrictions are additionally enforced for usernames:
 * 1. Usernames cannot contain the following substrings: `@`, `#`, `:`, ` ``` `, `discord`
 * 2. Usernames cannot be: `everyone`, `here`
 *
 * There are other rules and restrictions not shared here for the sake of spam and abuse mitigation, but the majority of users won't encounter them. It's important to properly handle all error messages returned by Discord when editing or updating names.
 */
export interface User {
  /**
   * the user's id
   * + Required OAuth2 Scope: identify
   */
  id: snowflake;
  /**
   * the user's username, not unique across the platform
   * + Required OAuth2 Scope: identify
   */
  username: string;
  /**
   * the user's 4-digit discord-tag
   * + Required OAuth2 Scope: identify
   */
  discriminator: string;
  /**
   * the user's [avatar hash](https://discord.com/developers/docs/reference#image-formatting)
   * + Required OAuth2 Scope: identify
   */
  avatar: string | null;
  /**
   * whether the user belongs to an OAuth2 application
   * + Required OAuth2 Scope: identify
   */
  bot?: boolean;
  /**
   * whether the user is an Official Discord System user (part of the urgent message system)
   * + Required OAuth2 Scope: identify
   */
  system?: boolean;
  /**
   * whether the user has two factor enabled on their account
   * + Required OAuth2 Scope: identify
   */
  mfa_enabled?: boolean;
  /**
   * the user's [banner hash](https://discord.com/developers/docs/reference#image-formatting)
   * + Required OAuth2 Scope: identify
   */
  banner?: string | null;
  /**
   * the user's banner color encoded as an integer representation of hexadecimal color code
   * + Required OAuth2 Scope: identify
   */
  accent_color?: number | null;
  /**
   * the user's chosen [language option](https://discord.com/developers/docs/reference#locales)
   * + Required OAuth2 Scope: identify
   */
  locale?: string;
  /**
   * whether the email on this account has been verified
   * + Required OAuth2 Scope: email
   */
  verified?: boolean;
  /**
   * the user's email
   * + Required OAuth2 Scope: email
   */
  email?: string | null;
  /**
   * the [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
   * + Required OAuth2 Scope: identify
   */
  flags?: number;
  /**
   * the [type of Nitro subscription](https://discord.com/developers/docs/resources/user#user-object-premium-types) on a user's account
   * + Required OAuth2 Scope: identify
   */
  premium_type?: PremiumType;
  /**
   * the public [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
   * + Required OAuth2 Scope: identify
   */
  public_flags?: number;
}

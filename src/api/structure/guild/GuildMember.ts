import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 *
 * (i) The field `user` won't be included in the member object attached to `MESSAGE_CREATE` and `MESSAGE_UPDATE` gateway events.
 *
 * (i) In `GUILD_` events, `pending` will always be included as true or false. In non `GUILD_` events which can only be triggered by non-`pending` users, `pending` will not be included.
 */
export interface GuildMember {
  /**
   * the user this guild member represents
   */
  user?: User;
  /**
   * this user's guild nickname
   */
  nick?: string | null;
  /**
   * the member's [guild avatar hash](https://discord.com/developers/docs/reference#image-formatting)
   */
  avatar?: string | null;
  /**
   * array of [role](https://discord.com/developers/docs/topics/permissions#role-object) object ids
   */
  roles: snowflake[];
  /**
   * when the user joined the guild
   */
  joined_at: string;
  /**
   * when the user started [boosting](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-) the guild
   */
  premium_since?: string | null;
  /**
   * whether the user is deafened in voice channels
   */
  deaf: boolean;
  /**
   * whether the user is muted in voice channels
   */
  mute: boolean;
  /**
   * whether the user has not yet passed the guild's [Membership Screening](https://discord.com/developers/docs/resources/guild#membership-screening-object) requirements
   */
  pending?: boolean;
  /**
   * total permissions of the member in the channel, including overwrites, returned when in the interaction object
   */
  permissions?: string;
  /**
   * when the user's [timeout](https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ) will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out
   */
  communication_disabled_until?: string;
}

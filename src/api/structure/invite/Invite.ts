import { Application } from "../application/Application.ts";
import { Channel } from "../channel/Channel.ts";
import { GuildScheduledEvent } from "../guildscheduledevent/GuildScheduledEvent.ts";
import { User } from "../user/User.ts";
import { InviteTargetType } from "./InviteTargetType.ts";

/**
 * https://discord.com/developers/docs/resources/invite#invite-object
 *
 * Represents a code that when used, adds a user to a guild or group DM channel.
 */
export interface Invite {
  /**
   * the invite code (unique ID)
   */
  code: string;
  /**
   * the guild this invite is for
   */
  guild?: Partial<Guild>;
  /**
   * the channel this invite is for
   */
  channel: Partial<Channel> | null;
  /**
   * the user who created the invite
   */
  inviter?: User;
  /**
   * the [type of target](https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types) for this voice channel invite
   */
  target_type: InviteTargetType;
  /**
   * the user whose stream to display for this voice channel stream invite
   */
  target_user: User;
  /**
   * the embedded application to open for this voice channel embedded application invite
   */
  target_application?: Partial<Application>;
  /**
   * approximate count of online members, returned from the `GET /invites/<code>` endpoint when `with_counts` is `true`
   */
  approximate_presence_count?: number;
  /**
   * approximate count of total members, returned from the `GET /invites/<code>` endpoint when `with_counts` is `true`
   */
  approximate_member_count?: number;
  /**
   * the expiration date of this invite, returned from the `GET /invites/<code>` endpoint when `with_expiration` is `true`
   */
  expires_at?: string | null;
  /**
   * stage instance data if there is a public [Stage instance](https://discord.com/developers/docs/resources/stage-instance) in the Stage channel this invite is for (deprecated)
   */
  stage_instance?: InviteStageInstance;
  /**
   * guild scheduled event data, only included if `guild_scheduled_event_id` contains a valid guild scheduled event id
   */
  guild_scheduled_event?: GuildScheduledEvent;
}

import { snowflake } from "../snowflake.ts";
import { User } from "../user/User.ts";
import { MembershipState } from "./MembershipStateEnum.ts";

/**
 * https://canary.discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export interface TeamMember {
  /**
   * the user's [membership state](https://canary.discord.com/developers/docs/topics/teams#data-models-membership-state-enum) on the team
   */
  membership_state: MembershipState;
  /**
   * will always be `["*"]`
   */
  permissions: string[];
  /**
   * the id of the parent team of which they are a member
   */
  team_id: snowflake;
  /**
   * the avatar, discriminator, id, and username of the user
   */
  user: Partial<User>;
}

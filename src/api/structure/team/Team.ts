import { snowflake } from "../snowflake.ts";
import { TeamMember } from "./TeamMember.ts";

/**
 * https://canary.discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface Team {
  /**
   * a hash of the image of the team's icon
   */
  icon: string | null;
  /**
   * the unique id of the team
   */
  id: snowflake;
  /**
   * the members of the team
   */
  members: TeamMember[];
  /**
   * the name of the team
   */
  name: string;
  /**
   * the user id of the current team owner
   */
  owner_user_id: snowflake;
}

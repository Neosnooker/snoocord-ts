import { User } from "../user/User.ts";

/**
 * https://discord.com/developers/docs/resources/guild#ban-object-ban-structure
 */
export interface Ban {
  /**
   * the reason for the ban
   */
  reason: string | null;
  /**
   * the banned user
   */
  user: User;
}

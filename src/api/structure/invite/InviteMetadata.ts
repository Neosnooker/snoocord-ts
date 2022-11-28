/**
 * https://discord.com/developers/docs/resources/invite#invite-metadata-object
 *
 * Extra information about an invite, will extend the [invite](https://discord.com/developers/docs/resources/invite#invite-object) object.
 */
export interface InviteMetadata {
  /**
   * number of times this invite has been used
   */
  uses: number;
  /**
   * max number of times this invite can be used
   */
  max_uses: number;
  /**
   * duration (in seconds) after which the invite expires
   */
  max_age: number;
  /**
   * whether this invite only grants temporary membership
   */
  temporary: boolean;
  /**
   * when this invite was created
   */
  created_at: string;
}

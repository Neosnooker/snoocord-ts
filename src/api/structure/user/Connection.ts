import { VisibilityType } from "./VisibilityType.ts";

/**
 * https://discord.com/developers/docs/resources/user#connection-object
 *
 * The connection object that the user has attached.
 */
export interface Connection {
  /**
   * id of the connection account
   */
  id: string;
  /**
   * the username of the connection account
   */
  name: string;
  /**
   * the [service](https://discord.com/developers/docs/resources/user#connection-object-services) of this connection
   */
  type: string;
  /**
   * whether the connection is revoked
   */
  revoked?: boolean;
  /**
   * an array of partial [server integrations](https://discord.com/developers/docs/resources/guild#integration-object)
   */
  integrations?: Partial</*TODO: ServerIntegration*/ Record<string, unknown>>;
  /**
   * whether the connection is verified
   */
  verified: boolean;
  /**
   * whether friend sync is enabled for this connection
   */
  friend_sync: boolean;
  /**
   * whether activities related to this connection will be shown in presence updates
   */
  show_activity: boolean;
  /**
   * whether this connection has a corresponding third party OAuth2 token
   */
  two_way_link: boolean;
  /**
   * [visibility](https://discord.com/developers/docs/resources/user#connection-object-visibility-types) of this connection
   */
  visibility: VisibilityType;
}

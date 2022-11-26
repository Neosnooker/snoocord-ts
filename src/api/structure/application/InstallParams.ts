/**
 * https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure
 */
export interface InstallParams {
  /**
   * the [scopes](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes) to add the application to the server with
   */
  scopes: string[];
  /**
   * the [permissions](https://discord.com/developers/docs/topics/permissions) to request for the bot role
   */
  permissions: string;
}

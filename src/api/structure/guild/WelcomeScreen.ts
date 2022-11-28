import { WelcomeScreenChannel } from "./WelcomeScreenChannel.ts";

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
 */
export interface WelcomeScreen {
  /**
   * the server description shown in the welcome screen
   */
  description: string | null;
  /**
   * the channels shown in the welcome screen, up to 5
   */
  welcome_channels: WelcomeScreenChannel[];
}

import { snowflake } from "../snowflake.ts";

/**
 * https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 *
 * Used to represent a user's voice connection status.
 */
export interface VoiceState {
  /**
   * the guild id this voice state is for
   */
  guild_id?: snowflake;
  /**
   * the channel id this user is connected to
   */
  channel_id: snowflake | null;
  /**
   * the user id this voice state is for
   */
  user_id: snowflake;
  /**
   * the guild member this voice state is for
   */
  member?: GuildMember;
  /**
   * the session id for this voice state
   */
  session_id: string;
  /**
   * whether this user is deafened by the server
   */
  deaf: boolean;
  /**
   * whether this user is muted by the server
   */
  mute: boolean;
  /**
   * whether this user is locally deafened
   */
  self_deaf: boolean;
  /**
   * whether this user is locally muted
   */
  self_mute: boolean;
  /**
   * whether this user is streaming using "Go Live"
   */
  self_stream?: boolean;
  /**
   * whether this user's camera is enabled
   */
  self_video: boolean;
  /**
   * whether this user's permission to speak is denied
   */
  suppress: boolean;
  /**
   * the time at which the user requested to speak
   */
  request_to_speak_timestamp: string | null;
}

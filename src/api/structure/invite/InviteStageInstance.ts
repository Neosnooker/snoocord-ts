/**
 * @deprecated
 * https://discord.com/developers/docs/resources/invite#invite-stage-instance-object-invite-stage-instance-structure
 * 
 * (!) This is deprecated.
 */
export interface InviteStageInstance {
	/**
	 * the members speaking in the Stage
	 */
	members: Partial<GuildMember>[];
	/**
	 * the number of users in the Stage
	 */
	participant_count: number;
	/**
	 * the number of users speaking in the Stage
	 */
	speaker_count: number;
	/**
	 * the topic of the Stage instance (1-120 characters)
	 */
	topic: string;
}
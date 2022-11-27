/**
 * https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types
 */
export enum AllowedMentionTypes {
	/**
	 * Controls role mentions
	 */
	ROLE_MENTIONS = "roles",
	/**
	 * Controls user mentions
	 */
	USER_MENTIONS = "users",
	/**
	 * Controls `@everyone` and `@here` mentions
	 */
	EVERYONE = "everyone"
}
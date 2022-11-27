/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-types
 * 
 * (!) Type `19` and `20` are only available in API v8 and above. In v6, they are represented as type `0`. Additionally, type `21` is only available in API v9 and above.
 * 
 * \* Can only be deleted by members with `MANAGE_MESSAGES` permission
 */
export enum MessageType {
	/**
	 * + Deletable: true
	 */
  DEFAULT = 0,
	/**
	 * + Deletable: false
	 */
  RECIPIENT_ADD = 1,
	/**
	 * + Deletable: false
	 */
  RECIPIENT_REMOVE = 2,
	/**
	 * + Deletable: false
	 */
  CALL = 3,
	/**
	 * + Deletable: false
	 */
  CHANNEL_NAME_CHANGE = 4,
	/**
	 * + Deletable: false
	 */
  CHANNEL_ICON_CHANGE = 5,
	/**
	 * + Deletable: true
	 */
  CHANNEL_PINNED_MESSAGE = 6,
	/**
	 * + Deletable: true
	 */
  USER_JOIN = 7,
	/**
	 * + Deletable: true
	 */
  GUILD_BOOST = 8,
	/**
	 * + Deletable: true
	 */
  GUILD_BOOST_TIER_1 = 9,
	/**
	 * + Deletable: true
	 */
  GUILD_BOOST_TIER_2 = 10,
	/**
	 * + Deletable: true
	 */
  GUILD_BOOST_TIER_3 = 11,
	/**
	 * + Deletable: true
	 */
  CHANNEL_FOLLOW_ADD = 12,
	/**
	 * + Deletable: false
	 */
  GUILD_DISCOVERY_DISQUALIFIED = 14,
	/**
	 * + Deletable: false
	 */
  GUILD_DISCOVERY_REQUALIFIED = 15,
	/**
	 * + Deletable: false
	 */
  GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16,
	/**
	 * + Deletable: false
	 */
  GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17,
	/**
	 * + Deletable: true
	 */
  THREAD_CREATED = 18,
	/**
	 * + Deletable: true
	 */
  REPLY = 19,
	/**
	 * + Deletable: true
	 */
  CHAT_INPUT_COMMAND = 20,
	/**
	 * + Deletable: false
	 */
  THREAD_STARTER_MESSAGE = 21,
	/**
	 * + Deletable: true
	 */
  GUILD_INVITE_REMINDER = 22,
	/**
	 * + Deletable: true
	 */
  CONTEXT_MENU_COMMAND = 23,
	/**
	 * + Deletable: true*
	 */
  AUTO_MODERATION_ACTION = 24,
}

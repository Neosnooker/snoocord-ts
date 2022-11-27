import { MessageActivityType } from "./MessageActivityType.ts";

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
 */
export interface MessageActivity {
	/**
	 * [type of message activity](https://discord.com/developers/docs/resources/channel#message-object-message-activity-types)
	 */
	type: MessageActivityType;
	/**
	 * party_id from a [Rich Presence event](https://discord.com/developers/docs/rich-presence/how-to#updating-presence-update-presence-payload-fields)
	 */
	party_id?: string;
}
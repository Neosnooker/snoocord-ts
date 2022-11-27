import { snowflake } from "../../snowflake.ts";
import { AllowedMentionTypes } from "./AllowedMentionTypes.ts";

/**
 * https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure
 * 
 * The allowed mention field allows for more granular control over mentions without various hacks to the message content. This will always validate against message content to avoid phantom pings (e.g. to ping everyone, you must still have `@everyone` in the message content), and check against user/bot permissions.
 * 
 * ### Allowed Mentions Reference
 *
 * Due to the complexity of possibilities, we have included a set of examples and behavior for the allowed mentions field.
 *
 * If `allowed_mentions` is not passed in (i.e. the key does not exist), the mentions will be parsed via the content. This corresponds with existing behavior.
 *
 * In the example below we would ping @here (and also @role124 and @user123)
 *
 * ```json
 * {
 * 	"content": "@here Hi there from <@123>, cc <@&124>"
 * }
 * ```
 *
 * To suppress all mentions in a message use:
 * 
 * ```json
 * {
 * 	"content": "@everyone hi there, <@&123>",
 * 	"allowed_mentions": {
 * 		"parse": []
 * 	}
 * }
 * ```
 * 
 * This will suppress all mentions in the message (no @everyone or user mention).
 *
 * The `parse` field is mutually exclusive with the other fields. In the example below, we would ping users `123` and role `124`, but not @everyone. Note that passing a `Falsy` value ([], null) into the "users" field does not trigger a validation error.
 * 
 * ```json
 * {
 *  "content": "@everyone <@123> <@&124>",
 *  "allowed_mentions": {
 *    "parse": ["users", "roles"],
 *    "users": []
 *  }
 * }
 * ```
 * 
 * In the next example, we would ping @everyone, (and also users 123 and 124 if they suppressed @everyone mentions), but we would not ping any roles.
 *
 * ```json
 * {
 *  "content": "@everyone <@123> <@124> <@125> <@&200>",
 *  "allowed_mentions": {
 *    "parse": ["everyone"],
 *    "users": ["123", "124"]
 *  }
 * }
 * ```
 *
 * Due to possible ambiguities, not all configurations are valid. An invalid configuration is as follows
 *
 * ```json
 * {
 *  "content": "@everyone <@123> <@124> <@125> <@&200>",
 *  "allowed_mentions": {
 *    "parse": ["users"],
 *    "users": ["123", "124"]
 *  }
 * }
 * ```
 *
 * Because `parse: ["users"]` and `users: [123, 124]` are both present, we would throw a validation error. This is because the conditions cannot be fulfilled simultaneously (they are mutually exclusive).
 *
 * Any entities with an ID included in the list of IDs can be mentioned. Note that the IDs of entities not present in the message's content will simply be ignored. e.g. The following example is valid, and would mention user 123, but not user 125 since there is no mention of user 125 in the content.
 *
 * ```json
 * {
 *  "content": "<@123> Time for some memes.",
 *  "allowed_mentions": {
 *    "users": ["123", "125"]
 *  }
 * }
 * ```
 */
export interface AllowedMentions {
	/**
	 * An array of [allowed mention types](https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types) to parse from the content.
	 */
	parse: AllowedMentionTypes[];
	/**
	 * Array of role_ids to mention (Max size of 100)
	 */
	roles: snowflake[];
	/**
	 * Array of user_ids to mention (Max size of 100)
	 */
	users: snowflake[];
	/**
	 * For replies, whether to mention the author of the message being replied to (default false)
	 */
	replied_user: boolean;
}

// TODO: implement an internal check for invalid allowedmentions
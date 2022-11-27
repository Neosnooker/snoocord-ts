import { ActionMetadata } from "./ActionMetadata.ts";
import { ActionType } from "./ActionType.ts";

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure
 *
 * An action which will execute whenever a rule is triggered.
 *
 * * Can be omitted based on `type`. See the `Associated Action Types` column in [action metadata](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata) to understand which `type` values require `metadata` to be set.
 */
export interface AutoModerationAction {
  /**
   * the type of action
   */
  type: ActionType;
  /**
   * additional metadata needed during execution for this specific action type*
   */
  metadata?: ActionMetadata;
}

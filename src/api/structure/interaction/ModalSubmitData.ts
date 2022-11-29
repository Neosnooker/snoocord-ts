import { MessageComponent } from "../messagecomponent/MessageComponent.ts";

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure
 */
export interface ModalSubmitData {
  /**
   * the [`custom_id`](https://discord.com/developers/docs/interactions/message-components#custom-id) of the modal
   */
  custom_id: string;
  /**
   * the values submitted by the user
   */
  components: MessageComponent[];
}

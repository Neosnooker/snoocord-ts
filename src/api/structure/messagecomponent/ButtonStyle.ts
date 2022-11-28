/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
 *
 * Buttons come in a variety of styles to convey different types of actions. These styles also define what fields are valid for a button.
 *
 * + Non-link buttons must have a custom_id, and cannot have a url
 * + Link buttons must have a url, and cannot have a custom_id
 * + Link buttons do not send an interaction to your app when clicked
 */
export enum ButtonStyle {
  PRIMARY = 1,
  SECONDARY = 2,
  SUCCESS = 3,
  DANGER = 4,
  LINK = 5,
}

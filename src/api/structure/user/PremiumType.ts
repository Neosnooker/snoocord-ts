/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 *
 * Premium types denote the level of premium a user has. Visit the [Nitro](https://discord.com/nitro) page to learn more about the premium plans we currently offer.
 */
export enum PremiumType {
  /**
   * None
   */
  NONE = 0,
  /**
   * Nitro Classic
   */
  NITRO_CLASSIC = 1,
  /**
   * Nitro
   */
  NITRO = 2,
  /**
   * Nitro Basic
   */
  NITRO_BASIC = 3,
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure
 *
 * [Under work]
 *
 * Many audit log events include a `changes` array in their [entry object](https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure). The [structure for the individual changes](https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure) varies based on the event type and its changed objects, so apps shouldn't depend on a single pattern of handling audit log events.
 *
 * (!) If `new_value` is not present in the change object while `old_value` is, it indicates that the property has been reset or set to `null`. If `old_value` isn't included, it indicated that the property was previously `null`.
 */
export interface AuditLogChange {
  /**
   * New value of the key
   */
  new_value?: unknown;
  /**
   * Old value of the key
   */
  old_value?: unknown;
  /**
   * Name of the changed entity, with a few [exceptions](https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-exceptions)
   */
  key: string;
}

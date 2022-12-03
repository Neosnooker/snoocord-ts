import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { AuditLog } from "../../structure/auditlog/AuditLog.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { RequestFunctionBase } from "../RequestFunctionBase.ts";

/**
 * @param urlParameters [guild id]
 *
 * ---
 * https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
 *
 * Returns an [audit log](https://discord.com/developers/docs/resources/audit-log#audit-log-object) object for the guild. Requires the [`VIEW_AUDIT_LOG`](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags) permission.
 */
export const GetGuildAuditLog: RequestFunctionBase<[snowflake], {
  user_id?: snowflake;
  action_type?: number;
  before?: snowflake;
  limit?: number;
}, AuditLog> = (httpClient, urlParameters, additionalParameters) =>
  httpClient.sendRequestToDiscordEndpoint<AuditLog>({
    endpoint: `/guilds/${urlParameters[0]}/audit-logs`,
    method: RequestMethod.GET,
    additionalParameters: additionalParameters,
  });

import { HTTPClient } from "../../../client/httpclient/HTTPClient.ts";
import { RequestMethod } from "../../../client/httpclient/RequestMethod.ts";
import { AuditLog } from "../../structure/auditlog/AuditLog.ts";
import { snowflake } from "../../structure/snowflake.ts";
import { BaseRequestType } from "../BaseType.ts";

export const GetGuildAuditLog: BaseRequestType<[snowflake], {
  user_id?: snowflake;
  action_type?: number;
  before?: snowflake;
  limit?: number;
}, AuditLog> = (httpClient: HTTPClient, urlParameters, customParameters) =>
  httpClient.sendRequestToDiscordEndpoint<undefined, AuditLog>(
    `/guilds/${urlParameters[0]}/audit-logs`,
    RequestMethod.GET,
    undefined,
    customParameters,
  );

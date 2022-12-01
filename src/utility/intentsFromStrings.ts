import { GatewayIntents } from "../api/structure/gateway/GatewayIntents.ts";

export function intentsFromStrings(
  ...strings: (keyof typeof GatewayIntents)[]
) {
  return strings.map((s) => GatewayIntents[s]).reduce((x, y) => x + y, 0);
}

import "module-alias/register";
import { configFactory } from "@/infra/dependencies/factories/config.factory";
import { env } from "./infra/dependencies/factories/env.factory";
(async () => {
  console.clear()
  await env.capture();
  await configFactory().run(env.variables.config.app.port);
})();

import "module-alias/register";
import { configFactory } from "@/infra/dependencies/factories/config.factory";

(async () => {
  console.clear();
  await configFactory().run(3000);
})();

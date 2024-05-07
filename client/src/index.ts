import "module-alias/register";
import { configFactory } from "@/infra/dependencies/factories/config.factory";

configFactory().run(23);

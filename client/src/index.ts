import "module-alias/register";
import { configFactory } from "./infra/dependencies/factories/config.factory";
import { container } from "./infra/dependencies/container";

configFactory().run(23);

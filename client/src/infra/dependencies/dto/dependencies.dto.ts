import { CaptureControllers } from "@/infra/utils/captureControllers";
import { CPU } from "@/infra/utils/cpu";
import { Environment } from "@/infra/utils/env";
import log4js from "log4js";

export type DependenciesDTO = {
  logger: log4js.Logger;
  captureControllers: CaptureControllers;
  env: Environment;
  cpu: CPU;
};

import { CaptureControllers } from "@/infra/utils/captureControllers";
import log4js from "log4js";

export type DependenciesDTO = {
  logger: log4js.Logger;
  captureControllers: CaptureControllers;
};

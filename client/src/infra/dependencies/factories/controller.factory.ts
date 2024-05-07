import { container } from "@/infra/dependencies/container";
import { Controller } from "@/infra/utils/controller";

export const controllerFactory = (): Controller => {
  return container.resolve("controller");
};

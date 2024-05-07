import { controllerFactory } from "@/infra/dependencies/factories/controller.factory";

const controller = controllerFactory().on(({ req, res, dependencies }) => {
  dependencies.logger.info("Test controller called");
});

export default controller;

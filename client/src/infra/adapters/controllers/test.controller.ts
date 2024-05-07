import { controllerFactory } from "@/infra/dependencies/factories/controller.factory";

const controller = controllerFactory().on(({ req, res, dependencies }) => {
  dependencies.logger.info("Test controller called");
  res.send(req.body);
});

export default controller;

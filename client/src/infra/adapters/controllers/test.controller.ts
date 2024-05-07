import { controllerFactory } from "@/infra/dependencies/factories/controller.factory";

const controller = controllerFactory().on((req, res) => {
  res.send(req.body);
});

export default controller;

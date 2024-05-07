import { DependenciesDTO } from "../dependencies/dto/dependencies.dto";
import { NextFunction, Request, Response } from "express";

type ParamsHandle = {
  req: Request;
  res: Response;
  dependencies: DependenciesDTO;
  next: NextFunction;
};

type ControllerHandle = (params: ParamsHandle) => Promise<void> | void;

export class Controller {
  dependencies: DependenciesDTO;
  handle: ControllerHandle;

  constructor(dependencies: DependenciesDTO) {
    this.dependencies = dependencies;
  }

  on(handle: ControllerHandle) {
    this.handle = handle;
    return this;
  }
}

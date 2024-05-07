import { DependenciesDTO } from "../dependencies/dto/dependencies.dto";
import { Request, Response } from "express";

export class Controller {
  dependencies: DependenciesDTO;
  handle: (req: Request, res: Response) => Promise<void> | void;

  constructor(dependencies: DependenciesDTO) {
    this.dependencies = dependencies;
  }

  on(handle: (req: Request, res: Response) => Promise<void> | void) {
    this.handle = handle;
  }
}

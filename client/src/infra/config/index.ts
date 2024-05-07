import Log4js from "log4js";
import { DependenciesDTO } from "../dependencies/dto/dependencies.dto";

export default class Config {
  logger: Log4js.Logger;
  constructor(dependencies: DependenciesDTO) {
    this.logger = dependencies.logger;
  }

  run(port: number) {
    this.logger.info(`Server is running on port ${port}`);
  }
}

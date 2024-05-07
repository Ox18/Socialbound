import { DependenciesDTO } from "@/infra/dependencies/dto/dependencies.dto";

export default class Config {
  dependencies: DependenciesDTO;

  constructor(dependencies: DependenciesDTO) {
    this.dependencies = dependencies;
  }

  async run(port: number) {
    const controllers = await this.dependencies.captureControllers.run();

    this.dependencies.logger.info(`Server is 2running on port ${port}`);

    controllers.map((controller) => {
      controller.execute();
    });
  }
}

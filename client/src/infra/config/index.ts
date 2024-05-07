import { DependenciesDTO } from "@/infra/dependencies/dto/dependencies.dto";

export default class Config {
  dependencies: DependenciesDTO;

  constructor(dependencies: DependenciesDTO) {
    this.dependencies = dependencies;
  }

  async run(port: number) {
    this.dependencies.logger.info(`Server is running on port ${port}`);
    this.dependencies.logger.debug("Compiled successfully!");
    this.dependencies.logger.mark(
      "You can now call the server on the specified port"
    );
    this.dependencies.logger.mark("Local: http://localhost:" + port);
    this.dependencies.logger.mark(
      "On Your Network: http://" +
        this.dependencies.cpu.captureIp() +
        ":" +
        port
    );
    this.dependencies.logger.mark(
      "Note that the development build is not optimized."
    );
    this.dependencies.logger.mark(
      "To create a production build, use npm run build."
    );
  }
}

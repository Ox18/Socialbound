import { readFile } from "node:fs/promises";
import { parse } from "ini";
import fs from "fs";
import { DependenciesDTO } from "../dependencies/dto/dependencies.dto";
import path from "path";
import { EnvConfig } from "../interfaces";

export class Environment {
  private dependencies: DependenciesDTO;
  variables: EnvConfig;

  constructor(dependencies: DependenciesDTO) {
    this.variables = {} as EnvConfig;
    this.dependencies = dependencies;
  }

  async capture(): Promise<void> {
    this.dependencies.logger.info("Capturing environment variables");
    const captured = await this.getKeys();
    this.dependencies.logger.info("Environment variables captured");
    this.variables = captured as unknown as EnvConfig;
  }
  private async getKeys(): Promise<Record<string, unknown>> {
    const dir = path.join(__dirname, "../../../config");

    return new Promise((resolve, reject) => {
      fs.readdir(dir, async (err, filenames) => {
        if (err) {
          reject(err);
        }

        const variables = {};

        const filesValid = filenames.filter((filename) =>
          filename.endsWith(".ini")
        );

        for (let file of filesValid) {
          const pathFile = path.join(dir, file);

          const r = await this.getDataFromFile(
            pathFile,
            file.replace(".ini", "")
          );

          this.dependencies.logger.info(
            `Captured environment variable: ${r.key}`
          );
          variables[r.key] = r.value;
        }
        resolve(variables);
      });
    });
  }

  async getDataFromFile(
    pathFile: string,
    filename: string
  ): Promise<{
    key: string;
    value: Record<string, unknown>;
  }> {
    const content = await readFile(pathFile, {
      encoding: "utf-8",
    });

    const key = filename;
    const value = parse(content);

    return { key, value };
  }
}

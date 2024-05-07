import fs from "fs";
import path from "path";
import { Controller } from "@/infra/utils/controller";

export class CaptureControllers {
  private controllers: Controller[] = [];

  async run(): Promise<Controller[]> {
    const dir = path.join(__dirname, "../adapters/controllers");

    return new Promise((resolve, reject) => {
      fs.readdir(dir, (err, files) => {
        if (err) {
          reject(err);
        }

        files.forEach((file) => {
          const controller = require(path.join(dir, file));
          this.controllers.push(controller.default);
        });

        resolve(this.controllers);
      });
    });
  }
}

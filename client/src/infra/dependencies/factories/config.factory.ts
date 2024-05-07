import Config from "@/infra/config";
import { container } from "@/infra/dependencies/container";

export const configFactory = (): Config => {
  return container.resolve("config");
};

import Config from "../../../infra/config";
import { container } from "../container";

export const configFactory = (): Config => {
  return container.resolve("config");
};

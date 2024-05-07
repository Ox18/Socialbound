import { container } from "@/infra/dependencies/container";
import { Environment } from "@/infra/utils/env";

export const env = container.resolve("env") as Environment;

import { getLogger, configure, Logger } from "log4js";

configure({
  appenders: {
    out: { type: "stdout" },
    file: {
      type: "file",
      filename: "logs/app.log",
    },
  },
  categories: {
    default: { appenders: ["out", "file"], level: "debug" },
  },
});

const makeNamespace = (base: string): string => {
  return "[" + base + "]";
};

export const logger = getLogger(makeNamespace("app")) as Logger;

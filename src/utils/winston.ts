import winston from "winston";
import { WinstonTransport as AxiomTransport } from "@axiomhq/winston";
import { format } from "winston";

const logger = winston.createLogger({
  level: "info",
  format: format.json(),
  defaultMeta: { service: import.meta.env.VITE_AXIOM_USER_SERVICE },
  transports: [
    new AxiomTransport({
      token: import.meta.env.VITE_AXIOM_API_KEY || "",
      dataset: import.meta.env.VITE_AXIOM_DATASET,
    }),
  ],
});

// Add the console logger if we're not in production
if (process.env.NODE_ENV != "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

logger.log({
  level: "info",
  message: "Logger successfully setup",
});

export default logger;

import { errors } from "celebrate";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import Knex from "knex";
import { Model } from "objection";
import { types } from "pg";
import { databaseConfig } from "./config";
import cors from "./middlewares/cors";
import errorHandler from "./middlewares/error-handler";
import { errorLogger, requestLogger } from "./middlewares/logger";
import rateLimiter from "./middlewares/rate-limit";
import routes from "./routes";

const { PORT = 3000 } = process.env;

const app = express();

const knex = Knex(databaseConfig);

types.setTypeParser(1700, "text", parseFloat);

Model.knex(knex);

app.use(requestLogger);
app.use(rateLimiter);
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App слушает порт ${PORT}`);
});

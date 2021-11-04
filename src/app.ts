import express from "express";
import userRouter from "./routes/user";
import monitaRouter from "./routes/monita";
import errorHandler from "./middleware/error";
import cookieParser from "cookie-parser";
import cors from "cors";

import config, { corsOptions } from "./config";

export default function (database: any) {
  const app = express();
  app.use(cookieParser());
  app.use(express.json());
  app.use(cors(corsOptions));

  app.get("/", (req, res) => {
    res.send("It works");
  });

  //router
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/monitas", monitaRouter);
  app.use(errorHandler);

  return app;
}

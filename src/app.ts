import express, { Request, Response, Router } from "express";
import userRouter from "./routes/user";
import monitaRouter from "./routes/monita";
import errorHandler from "./middleware/error";
import cookieParser from "cookie-parser";
import cors from "cors";
require("./database");
import config, { corsOptions } from "./config";

// export default function (database: any) {
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send([{ name: "user1" }, { name: "user2" }]);
});

//router
app.use("/api/v1/users", userRouter);
app.use("/api/v1/monitas", monitaRouter);
app.use(errorHandler);

export default app;
//   return app;
// }

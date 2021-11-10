import express, { Request, Response, Router } from "express";
import userRouter from "./routes/user";
import monitaRouter from "./routes/monita";
import errorHandler from "./middleware/error";
import cookieParser from "cookie-parser";
import cors from "cors";
import MyError from "./utils/MyError";

require("./database");
// import { corsOptions } from "./config";

const whiteList = [process.env.FRONT_END];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    // console.log(whiteList);
    // console.log(whiteList.indexOf(origin));
    // if (whiteList.indexOf(origin) !== -1) {
    // console.log(origin);
    if (origin !== process.env.FRONT_END) {
      callback(null, true);
    } else {
      // callback(new Error("Block.."));
      throw new MyError({
        message: "Хандах эрхгүй байна",
        messageCode: "AUTH401",
        statusCode: 401,
      });
    }
  },
  allowedHeaders: "Authorization, Set-Cookie, Content-Type",
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
};

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

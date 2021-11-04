import config from "./config";
import mongoose from "mongoose";

const uri: string = config.databaseURL || "";

mongoose.connect(uri);
console.log("MongoDB database connection established successfully");
// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// export default connection;

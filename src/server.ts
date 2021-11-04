import config from "./config";
import express from "express";
// import makeApp from "./app";
import app from "./app";

const port = config.port || 5000;

// const app = makeApp(database);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

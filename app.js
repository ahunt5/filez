import express from "express";
const app = express();
export default app;

import filesRouter from "./api/files.js";
import foldersRouter from "./api/folders.js";

app.use(express.json());

app.use("/files", filesRouter);
app.use("/folders", foldersRouter);

app.use((err, req, res, next) => {
  if (err.code === "23505") {
    return res.status(400).send(err.detail);
  }

  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong!");
});

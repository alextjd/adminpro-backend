import "core-js/stable";
import "regenerator-runtime/runtime";

import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import path from "path";

import { databaseConnection } from "./database/config";
import indexRouter from "./routes";
import usersRouter from "./routes/users";

dotenv.config();
var app = express();
databaseConnection();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;

import "core-js/stable";
import "regenerator-runtime/runtime";

import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import path from "path";

import { databaseConnection } from "./database/config";
import indexRouter from "./routes/index.routes";
import usersRouter from "./routes/user.routes";
import cors from "cors";

// Core initialization
dotenv.config();
const app = express();

// Database connection
databaseConnection();

// General initialization and middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api", indexRouter);
app.use("/api/users", usersRouter);

export default app;
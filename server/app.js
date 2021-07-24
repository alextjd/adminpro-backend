import 'core-js/stable';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import path from 'path';

import { databaseConnection } from './database/config';
import handleError from './middlewares/error-handler.middleware';
import authRouter from './routes/auth.routes';
import doctorsRouter from './routes/doctor.routes';
import hospitalsRouter from './routes/hospital.routes';
import indexRouter from './routes/index.routes';
import searchRouter from './routes/search.routes';
import usersRouter from './routes/user.routes';

// Core initialization
dotenv.config();
const app = express();

// Database connection
databaseConnection();

// General initialization and middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api', indexRouter);
app.use('/api/login', authRouter);
app.use('/api/user', usersRouter);
app.use('/api/hospital', hospitalsRouter);
app.use('/api/doctor', doctorsRouter);
app.use('/api/search', searchRouter);

// Exception handler
app.use(handleError);

export default app;

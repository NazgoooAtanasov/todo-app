import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import dbConfig from './database.js';
import todoRouter from './todoRouter.js';

dotenv.config();

dbConfig(process.env.CONNECTIONSTRING);

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api/v1/todos', todoRouter);


app.listen(port);
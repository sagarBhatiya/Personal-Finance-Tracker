import express from 'express';
import cors from 'cors';
import { db } from './db/db.js';
import { readdirSync } from 'fs';

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', import(`./routes/${route}`).then((module) => module.default)));

// server
const server = () => {
    db();
    app.listen(3000, () => {
        console.log('listening to port:', 3000);
    });
};

server();

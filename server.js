import express from 'express';
import router from './routes/index.js';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import path from 'path';
// import fs from 'fs';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

global.appRoot = path.resolve(__dirname);
app.use(express.json());
app.use('/', router);
connectDB();
app.use('/', express.static(path.join(__dirname, 'public')));

// Default Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`App Running at Port ${PORT}`);
});

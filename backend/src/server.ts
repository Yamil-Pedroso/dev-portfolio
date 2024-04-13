import express from 'express';
import { Request, Response } from 'express';
import colors, { enable } from 'colors'
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db';
import routes from './routes/index'

dotenv.config({
    path: path.join(__dirname, '.', 'config', 'config.env') 
});

const PORT = process.env.PORT || 8080;
connectDB();
const app = express()

app.use(express.json())
app.use(cors());
colors.enable()

//Middlewares

//Routes
app.use('/api/v1', routes)

// JSON
//app.use('/', (req: Request, res: Response) => {
//    res.json({
//        welcome: 'Hi World'
//    })
//})

// HTML
//app.use('/', (req: Request, res: Response) => {
//    res.sendFile(path.join(__dirname, './static/index.html'))
//})

//HTML
//app.use('/', (req: Request, res: Response) => {
//    res.send('Hi world')
//})

// XML
//app.use('/', (req: Request, res: Response) => {
//    res.type('application/xml');
//    res.send('<message>Hi World</message>');
//});

// CSV
//app.use('/', (req: Request, res: Response) => {
//    res.type('text/csv');
//    res.send('title,content\nHi,World');
//});

//YAML
//app.use('/', (req: Request, res: Response) => {
//    res.type('text/yaml');
//    res.send('title,content\nHi,World');
//});

//SQL
//app.use('/', (req: Request, res: Response) => {
//    res.type('text/sql');
//    res.send('title,content\nHi,World');
//});

//app.use('/', (req: Request, res: Response) => {
//    res.type('text/sql'); 
//    res.send("INSERT INTO messages (content) VALUES ('Hi World');");
//});



app.listen(PORT, () => {
    console.log(`The api is running on ${PORT}`)
})

import express from 'express';
import { Request, Response } from 'express';
import morgan from 'morgan';
import colors, { enable } from 'colors'
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import connectDB from './config/db';
import { v2 as cloudinary } from 'cloudinary';
import routes from './routes/index'

dotenv.config({
    path: path.join(__dirname, '.', 'config', 'config.env') 
});

const PORT = process.env.PORT || 8080;
connectDB();

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const app = express()
app.use(morgan('dev'))
app.use(express.json())
colors.enable()

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(cookieParser());
const cookieTime = process.env.COOKIE_TIME as any;
const cookieSecret = process.env.COOKIE_SECRET as any;
app.use(
    cookieSession({
      name: 'session',
      maxAge: cookieTime * 24 * 60 * 60 * 1000,
      keys: [cookieSecret],
      secure: true, // Only send over HTTPS
      sameSite: 'none', // Allow cross-origin requests
      httpOnly: true, // Makes the cookie accessible only on the server-side
    }),
  )



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

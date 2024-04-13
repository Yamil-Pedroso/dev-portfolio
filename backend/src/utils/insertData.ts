import connectDB from "../config/db";
import colors from "colors"
import dotenv from "dotenv"
import path from "path"
import { Message } from "../models/Message"
import welcome from "../data/welcome.json"

colors.enable();

dotenv.config({ path: path.resolve(__dirname, '..', 'config', 'config.env') });

const insertData = async () => {
  try {
    await connectDB()
    
    await Message.deleteMany()

    const data = welcome

    await Message.insertMany(data)
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (error: any) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
} 

insertData()
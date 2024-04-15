import connectDB from "../config/db";
import colors from "colors"
import dotenv from "dotenv"
import path from "path"
import { Potion } from "../models/Potion"
import potions from "../data/potions"

colors.enable();

dotenv.config({ path: path.resolve(__dirname, '..', 'config', 'config.env') });

const insertData = async () => {
  try {
    await connectDB()
    
    await Potion.deleteMany()

    const data = potions as any

    await Potion.insertMany(data)
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (error: any) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
} 

insertData()
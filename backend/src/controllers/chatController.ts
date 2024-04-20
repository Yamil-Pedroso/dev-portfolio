import { Request, Response } from "express";
import { Message, IChat } from '../models/Chat';

export const getMessages = async (req: Request, res: Response) => {
    try {
        const messages = await Message.find();
        res.json({ success: true, data: messages });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                success: false, message: "Failed to retrieve messages", error: error.message
            });
        } else {
            res.status(500).json({
                success: false, message: "Unknown error occurred"
            });
        }
    }
}

export const createMessage = async (req: Request, res: Response) => {
    try {
        const { message, sender } = req.body;

        if (!message || !sender) {
            return res.status(400).json({
                success: false, message: "Message and sender are required"
            });
        }

        const newMessage = await Message.create({ message, sender });
        res.status(201).json(newMessage); 
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                success: false, message: "Failed to create message", error: error.message
            });
        } else {
            res.status(500).json({
                success: false, message: "Unknown error occurred"
            });
        }
    }
}

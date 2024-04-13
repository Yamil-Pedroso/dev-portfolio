import { Request, Response } from "express";
import { Message, IMessage } from '../models/Message'
import welcome from "../data/welcome.json"

export const getMessages = async (req: Request, res: Response) => {
    try {
        const message = await Message.find()
        res.json(message)
    } catch (error: any) {
        res.status(500).json({
            success: false, message: error.message
        })
    }
}

export const createMessage = async (req: Request, res: Response) => {
    try {
        const { message } = req.body
         
        const myMessage = await Message.create({ message })
    
        res.status(201).json({ success: true, message: "Message created", data: myMessage})
    } catch (error: any) {
        res.status(500).json({
            success: false, message: error.message
        })
    }
}

export const updateMessage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { message } = req.body

        const updatedMessage = await Message.findByIdAndUpdate(
            id,
            { message },
            { new: true, runValidators: true } 
        );

        if (!updatedMessage) {
            return res.status(404).json({ success: false, message: "No message found with that ID" });
        }
        //const { id } = req.params;
        //const { message } = req.body;
//
        //const messageDoc = await Message.findById(id);
//
        //if (!messageDoc) {
        //    return res.status(404).json({ success: false, message: "No message found with that ID" });
        //}
//
        //messageDoc.message = message;
//
        //const updatedMessage = await messageDoc.save();
        console.log("Updated document:", updatedMessage);

        res.status(200).json({ success: true, message: 'Message updated successfully', data: updatedMessage });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

// Delete message
export const deletMessage = async (req: Request, res: Response) => {
     try {
        const { id } = req.params
        const { message } = req.body
        const messageDeleted = await Message.findByIdAndDelete(id, { message })
        if (!messageDeleted) {
            res.status(404).json({ message: 'Message not found' });
            return;
        }

        messageDeleted.message = message
        res.json({success: true, message: 'Message deleted' });

     } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        })
     }
}
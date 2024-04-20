import { Schema, model } from 'mongoose';

interface IChat {
    message: string;
    sender: string; 
}

const messageSchema = new Schema<IChat>({
    message: { type: String, required: true },
    sender: { type: String, required: true },  
},
{ timestamps: true }); 

const Message = model<IChat>("Message", messageSchema);

export { Message, IChat };

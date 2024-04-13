import { Schema, model, Types } from 'mongoose'

interface IMessage {
    message?: string
}

const messageSchema = new Schema<IMessage>({
    message: { type: String, required: true }
})

const Message = model<IMessage>("Message", messageSchema)

export { Message, IMessage}


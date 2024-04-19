import { Schema, model, Types } from "mongoose";

interface IPayment {
    name: string;
    image: string;
    amount: number;
    currency: string;
    status: string;
    stripeId: string;
    paymentMethod: string;
    paymentDate: Date;
    clientSecret?: string;
}

const paymentSchema = new Schema<IPayment>({
    name: { type: String, required: true },
    image: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: {
        type: String,
        enum: ["pending", "succeeded", "failed"],
        default: "pending",
    },
    stripeId: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    paymentDate: { type: Date, required: true },
    clientSecret: { type: String },

}, { timestamps: true });

const Payment = model<IPayment>("Payment", paymentSchema);

export { Payment, IPayment };
import { Schema, model, Types } from "mongoose";

interface IPotion {
    owner?: Types.ObjectId | undefined;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
}

const potionSchema = new Schema<IPotion>({
    owner: { type: Schema.Types.ObjectId, ref: "User", required: false },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
});

const Potion = model<IPotion>("Potion", potionSchema);

export { Potion, IPotion }


import { Schema, model, Types } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isAdmin?: boolean;
    potions?: Types.ObjectId[];
    isValidatedPassword(enteredPassword: string): Promise<boolean>;
    getSignedJwtToken(): string;
    getResetPasswordToken(): string;
    resetPasswordToken: string | undefined;
    resetPasswordExpire: Date | undefined;
 }

 const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    avatar: { type: String, default: "https://res.cloudinary.com/ddgf7ijdc/image/upload/v1706787809/yami_lil00v.jpg" },
    isAdmin: { type: Boolean, default: false },
    potions: [{ type: Schema.Types.ObjectId, ref: "Potion" }],
    resetPasswordToken: { type: String },
    resetPasswordExpire: { type: Date },
}, {
    timestamps: true,
});

// Hash the password before saving the user to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
userSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Compare the password of the user
userSchema.methods.isValidatedPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

const User = model<IUser>("User", userSchema);

export { User, IUser}

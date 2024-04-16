import { Request, Response, NextFunction } from "express";
import { User, IUser } from "../models/User";
import bcrypt from "bcryptjs";
import cookieToken from "../utils/cookieToken";
import CustomError from "../utils/customError";
import { v2 as cloudinary } from "cloudinary";
import { Potion } from "../models/Potion";
import transporter from "../utils/nodeMailer";

// Register a new user
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            throw new CustomError("Please fill in all fields", 400);
        }

        let user = await User.findOne({ email });

        if (user) {
            throw new CustomError("User already exists", 400);
        }

        let myAvatar = "https://res.cloudinary.com/ddgf7ijdc/image/upload/v1706787809/yami_lil00v.jpg";
        if(req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "userAvatars/avatars",
                width: 150,
                crop: "scale",
            });
            myAvatar = result.secure_url;
        }

        user = new User({
            name,
            email,
            password,
            avatar: myAvatar,
        });

        user = await User.create(user);

        cookieToken(user, res);
    } catch (error: any) {
        next(new CustomError(error.message, 400));
    }
};

// Get all users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const userCount = await User.find().countDocuments()
        const potionId = await Potion.find().select('_id');
        console.log("potionId", potionId);

		const allUsers = await User.find().populate('potions', 'name description category price');
        

        res.status(200).json({ success: true, users: userCount, data: allUsers });
	} catch (error: any) {
		res.status(500).json({ msg: error.message });
	}
};

// Login user
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new CustomError('Please fill in all fields', 400);
        }

        // Check for existing user
        const user = await User.findOne({ email });

        if (!user) {
            throw new CustomError('Invalid credentials', 401);
        }

        // Check if password matches
        const isMatch = await (user as IUser).isValidatedPassword(password);

        if (!isMatch) {
            throw new CustomError('Invalid credentials', 401);
        }

        // After creating the user, we need to send the token to the client
        cookieToken(user, res);

    } catch (error: any) {
        next(new CustomError(error.message, 500));
    }
};

// Upload user avatar
export const uploadAvatar = async (req: Request, res: Response, next: NextFunction) => {
    const { path } = req.file as any
  try {
    let result = await cloudinary.uploader.upload(path, {
      folder: 'userAvatars/Avatars',
    });
    res.status(200).json(result.secure_url)
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Internal server error',
    });
  }
};

// Update user
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            throw new CustomError('User not found', 404);
        }

        if (req.file) {
            const avatarUrl = await cloudinary.uploader.upload(req.file.path, {
                folder: 'userAvatars/Avatars',
            }).then((result) => result.secure_url);

            user.avatar = avatarUrl;
        }

        if (req.body.name) user.name = req.body.name;
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }


        const updatedUser = await user.save() as IUser;

        cookieToken(updatedUser, res);
    } catch (error: any) {
        next(new CustomError(error.message, 500));
    }
};

// Forgot Password
export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
    const  email = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email could not be sent. User not found." });
        }

        const resetToken = user.getResetPasswordToken();
        await user.save({ validateBeforeSave: false });

        const resetUrl = `http://<tu-dominio>/reset-password/${resetToken}`;

        const message = {
            from: "yami@gmail.com", 
            to: "yami@gmail.com", 
            subject: "Password Reset Request",
            text: `You are receiving this email because you (or someone else) have requested the reset of a password. Please make a PUT request to the following URL: ${resetUrl}`,
            html: `<p>You are receiving this email because you (or someone else) have requested the reset of a password. Please click on the following link, or paste this into your browser to complete the process:</p><p><a href="${resetUrl}">${resetUrl}</a></p>`
        };

        await transporter.sendMail(message);

        res.status(200).json({ success: true, data: "Email sent" });
    } catch (error: any) {
        console.error("Failed to send email:", error);
        return next(new CustomError("Failed to send email, please try again later.", 500));
    }
};


// Reset Password
export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    const resetPasswordToken = req.params.resetToken;
    const { password } = req.body;

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) {
            throw new CustomError("Invalid Reset Token", 400);
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(201).json({
            success: true,
            data: "Password Reset Success",
        });
    } catch (error: any) {
        next(new CustomError(error.message, 500));
    }
};



// Logout user
export const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.cookie('token', null, {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });
        res.status(200).json({ success: true, data: {} });
    } catch (error: any) {
        next(new CustomError(error.message, 500));
    }
};

// Delete user
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (error: any) {
        console.error(error);
        next(new CustomError(error.message, 500));
    }
};

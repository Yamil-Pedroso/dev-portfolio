import { Request, Response, NextFunction } from "express";
import { User, IUser } from "../models/User";
import bcrypt from "bcryptjs";
import cookieToken from "../utils/cookieToken";
import CustomError from "../utils/customError";
import { v2 as cloudinary } from "cloudinary";
import { Potion } from "../models/Potion";

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


        const updatedUser = await user.save();

        cookieToken(updatedUser, res);
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

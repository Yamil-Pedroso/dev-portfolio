import { Request, Response, NextFunction } from 'express';
import { Potion, IPotion } from '../models/Potion';
import { User, IUser } from '../models/User';
import CustomError from '../utils/customError';

interface AuthenticatedRequest extends Request {
    user?: any;
}

// Add a new potion
export const addPotion = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const userData = req.user;
         const { name, description, category, price } = req.body;

         const potion = await Potion.create({
                owner: userData.id,
                name,
                description,
                category,
                price,
            });

            await User.findByIdAndUpdate(userData.id, {
                $push: { potions: potion._id },
            });

            res.status(201).json({ 
                success: true,
                data: potion,
             });
    } catch (error: any) {
        next(new CustomError(error.message, 400));
    }
};

// Get all potions
export const getPotions = async (req: Request, res: Response, next: NextFunction) => {
     const countPotions = await Potion.countDocuments();
    try {
        const potions = await Potion.find().populate('owner', 'name email');
        res.status(200).json({
            success: true,
            potions: countPotions,
            data: potions,
        });
    } catch (error: any) {
        next(new CustomError(error.message, 400));
    }
};

// Get a single potion
export const getPotion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const potion = await Potion.findById(id);

        if (!potion) {
            throw new CustomError('Potion not found', 404);
        }

        res.status(200).json({
            success: true,
            data: potion,
        });
    } catch (error: any) {
        next(new CustomError(error.message, 400));
    }
};

// Update a potion
// Update a potion
export const updatePotion = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const userData = req.user;
        const { id } = req.params;
        const updates = req.body;

        const potion = await Potion.findById(id) as any;
        if (!potion) {
            return res.status(404).json({ success: false, message: "Potion not found" });
        }

        if (potion?.owner.toString() !== userData.id) {
            return res.status(403).json({ success: false, message: "User not authorized to update this potion" });
        }

        const fieldsToUpdate = ['name', 'description', 'category', 'price'];
        fieldsToUpdate.forEach(field => {
            if (updates.hasOwnProperty(field)) {
                potion[field] = updates[field];
            }
        });

        await potion.save();
        res.status(200).json({
            success: true,
            message: "Potion updated successfully",
            data: potion
        });

    } catch (error: any) {
        next(new CustomError(error.message, 400));
    }
};


// Delete a potion
export const deletePotion = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const userData = req.user;
        const { id } = req.params;

        const potion = await Potion.findById(id) as any;
        if (!potion) {
            return res.status(404).json({ success: false, message: "Potion not found" });
        }

        if (potion?.owner.toString() !== userData.id) {
            return res.status(403).json({ success: false, message: "User not authorized to delete this potion" });
        }

        await Potion.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Potion deleted successfully" });

    }
    catch (error: any) {
        next(new CustomError(error.message, 400));
    }
};


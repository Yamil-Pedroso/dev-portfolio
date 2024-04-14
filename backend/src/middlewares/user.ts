import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/User';

interface IGetUserAuthInfoRequest extends Request {
    user?: IUser | null;
}

export const isLoggedIn = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Not authorized to access this route, login first' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
        console.log('Decoded token:', decoded.id);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Not authorized to access this route, login first' });
    }
}

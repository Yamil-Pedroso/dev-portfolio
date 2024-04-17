import { Router } from 'express';
import multer from 'multer';

const router = Router();

// Multer config
const upload = multer({ dest: '/tmp' });
const storage = multer.memoryStorage();

import {
    registerUser,
    getUsers,
    loginUser,
    logoutUser,
    updateUser,
    uploadAvatar,
    deleteUser,
    forgotPassword,
    resetPassword,
    updatePassword,
} from '../controllers/userController';
import { isLoggedIn } from '../middlewares/user';

router.post('/register', upload.single('avatar'), registerUser);
router.get('/users', getUsers);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.put('/update/:id', upload.single('avatar'), updateUser);
router.post('/upload-avatar', upload.single('avatar'), uploadAvatar);
router.delete('/delete/:id', deleteUser);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);
router.put('/update-password', isLoggedIn, updatePassword);


export default router;

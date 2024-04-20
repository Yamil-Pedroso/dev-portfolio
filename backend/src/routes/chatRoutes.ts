import { Router } from 'express';
import { getMessages, createMessage } from '../controllers/chatController';

const router = Router();

router.get('/messages', getMessages);

router.post('/messages', createMessage);

export default router;

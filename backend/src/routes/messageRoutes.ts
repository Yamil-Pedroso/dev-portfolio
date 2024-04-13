import  express, { Router } from 'express'

const router = Router()

import {
    getMessages,
    createMessage,
    updateMessage,
    deletMessage
} from '../controllers/messageController'

router.get('/messages', getMessages)
router.post('/create-message', createMessage)
router.put('/update-message/:id', updateMessage)
router.delete('/delete-message/:id', deletMessage)

export default router
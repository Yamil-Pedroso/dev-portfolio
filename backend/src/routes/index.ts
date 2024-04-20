import { Router } from 'express'
import user from './userRoutes'
import potion from './potionRoutes'
import payment from './paymentRoutes'
import chat from './chatRoutes'

const router = Router()

router.use('/', user)
router.use('/', potion)
router.use('/', payment)
router.use('/', chat)

export default router

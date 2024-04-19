import { Router } from 'express'
import user from './userRoutes'
import potion from './potionRoutes'
import message from './messageRoutes'
import payment from './paymentRoutes'

const router = Router()

router.use('/', user)
router.use('/', potion)
router.use('/', message)
router.use('/', payment)

export default router

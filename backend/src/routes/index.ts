import { Router } from 'express'
import user from './userRoutes'
import potion from './potionRoutes'
import message from './messageRoutes'

const router = Router()

router.use('/', user)
router.use('/', potion)
router.use('/', message)

export default router

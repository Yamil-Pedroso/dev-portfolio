import express, { Router } from 'express'
import message from './messageRoutes'

const router = Router()

router.use('/', message)

export default router

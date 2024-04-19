import express from 'express';
import { Router } from 'express';

const router = Router();

import { createPayment } from '../controllers/paymentController';

router.post('/create-payment', createPayment);

export default router;
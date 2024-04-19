import { Request, Response, NextFunction } from 'express';
import { Payment, IPayment } from '../models/Payment';
import { stripe, customerId } from '../config/stripe';


// Create a payment
export const createPayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
       
        const {name, amount, currency, status, image, paymentMethod, paymentDate } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: currency || 'chf',
            customer: "cus_PfYLjlyrjAaEyH",
            payment_method: paymentMethod,
            confirmation_method: 'automatic',
            confirm: false,
            //return_url: 'https://yampe-webdeveloper.netlify.app/',
        }) as any;

        const payment: IPayment = {
            name,
            amount,
            currency,
            status,
            image,
            stripeId: paymentIntent.id,
            paymentMethod,
            paymentDate,
        };

        await Payment.create(payment);

        res.status(201).json({ success: true, data: payment, clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
        console.error('Error to create payment:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
}

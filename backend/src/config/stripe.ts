import Stripe from 'stripe';

const apiKey = process.env.STRIPE_SECRET_KEY as string;
const customerId = process.env.STRIPE_CUSTOMER_ID as string;


const stripe = new Stripe("sk_test_51N6wYOBO47rgKbjyHBtRPPMm3gg4JePqiV9XqWYpE01n7t76zBVndY1o0SSqDBBTyQKGoe3j0NzcH7MbpLVLlNF600iZvqwMGY", {
  apiVersion: '2024-04-10',
});


export { stripe , customerId };

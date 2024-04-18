import { stripePromise, Elements } from "../services/stripe"
import CheckoutForm from "./CheckoutForm"


const StripeApp = () => {
    const options = {
        clientSecret: '{{CLIENT_SECRET}}'
      };
    return (
        <Elements stripe={stripePromise} 
        options={options}
        >
            <CheckoutForm />
        </Elements>
    )
}

export default StripeApp
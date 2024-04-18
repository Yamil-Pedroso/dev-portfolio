import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51N6wYOBO47rgKbjy4oCbiJFPpLM1K3E6rGCK1BsN9jpUWiMOiTUUTU2zWor32DKwvReVQoJU0cfimwXErwqDNB6d00NMQ1BwJX');

export { stripePromise, Elements }
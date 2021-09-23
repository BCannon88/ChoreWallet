import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './stripe.css';

const asyncStripe = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        })

        if (error) {
            console.log('[error]', error)
        } else {
            console.log('success', paymentMethod)
        }
    }

    return (
        <form className="stripeDesign" onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Make a Payment
            </button>
        </form>
    )
}

const Stripe = () => {
    return (
        <Elements stripe={asyncStripe}>
            <CheckoutForm />
        </Elements>
    )
}

export default Stripe;
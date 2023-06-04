import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = ({ price }) => {
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessign] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
            console.log(price)
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        console.log(card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError("")
            console.log("Payment Method:", paymentMethod)
        }

        setProcessign(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "unknown",
                        email: user?.email || "anonymous"
                    },
                },
            },
        );

        if(confirmError){
            console.log(confirmError)
        }
        console.log(paymentIntent)

        setProcessign(false);

        if(paymentIntent.status === 'succeeded'){
            
            setTransactionId(paymentIntent.id)
            // todo: next steps 
        }
    }
    return (
        <>
            <form className="w-full m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-secondary btn-sm mt-8" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with TransactionId: {transactionId}</p> }
        </>
    );
};

export default CheckoutForm;
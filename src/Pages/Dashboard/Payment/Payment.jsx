import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();

    const total = cart?.reduce((sum, item) => { return sum + item.price }, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="">
            <SectionTitle title="Payment" subTitle="Please proceed payment!"></SectionTitle>
            <div>
                <p>Total payment: ${price}</p>
            </div>
            <div className="bg-base-200 p-4">
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
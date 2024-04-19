import { useState, useEffect } from "react";
import createPayment from "../hooks";
import { Toaster, toast } from "sonner";
import { stripePromise, Elements } from "../services/stripe";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { play5, xbox } from "../../../../assets";
import Spiner from "../spiner/Spiner";

interface CheckoutFormProps {
  onSuccessfulCheckout: () => void;
  status?: "pending" | "succeeded" | "error";
}

const CheckoutForm = ({ onSuccessfulCheckout }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const name = "Playstation 5";
  const amount = 559;
  const image = "https://images.unsplash.com/photo-1617864064479-f203fc7897c0?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const createPaymentClientSecret = async () => {
     
      try {
        const response = await createPayment({
          name,
          amount,
          currency: "chf",
          status: "succeeded",
          image,
          stripeId: "pi_3OqDGhBO47rgKbjy0Gwl6Gui",
          paymentMethod: "pm_1OqDGgBO47rgKbjyySEck3dX",
          paymentDate: "2024-04-19T00:00:00.000Z",
        } 

      );
        if (response.success && response.clientSecret) {
          setClientSecret(response.clientSecret);
        } else {
          console.error("Failed to retrieve client secret");
          setError("Failed to retrieve client secret");
        }
      } catch (error) {
        console.error("Error retrieving client secret:", error);
        setError("Error retrieving client secret");
      }
    };

    createPaymentClientSecret();
  }, []);

  useEffect(() => {
    if (paymentStatus === "confirmed" || error) {
      const timer = setTimeout(() => {
        setError(null);
        setPaymentStatus("pending");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [paymentStatus, error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) {
      return;
    }
    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Card information is invalid.");
      setLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    setLoading(false);

    if (result.error && result.error.message) {
      setError(result.error.message);
    } else if (
      result.paymentIntent &&
      result.paymentIntent.status === "succeeded"
    ) {
      toast.success("Payment successful!");
      setError(null);
      setPaymentStatus("confirmed");
      onSuccessfulCheckout();

      cardElement.clear();
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 20px",
            backgroundColor: "#5469d4",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          disabled={isLoading}
        >
          {isLoading ? <Spiner /> : "Pay"}
        </button>
        <p
          style={{
            color: paymentStatus === "confirmed" ? "green" : "black",
            textAlign: "center",
          }}
        >
          {paymentStatus === "confirmed" ? "Payment confirmed" : ""}
        </p>
        {error && <div style={{ color: "#9e2146" }}>{error}</div>}
        <Toaster position="top-center" />
      </form>
    </div>
  );
};

const StripeApp = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        onSuccessfulCheckout={() => console.log("Payment successful!")}
      />
    </Elements>
  );
};

export default StripeApp;

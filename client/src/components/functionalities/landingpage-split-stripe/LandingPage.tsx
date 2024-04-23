import { useState } from "react";
import { Container } from "./styles";
import { MdClose } from "react-icons/md";
import StripeApp from "./stripe-comp/StripeApp";
import { play5, xbox } from "../../../assets";

export interface Console {
  id: number;
  name: string;
  image: string;
  amount: number;
}

type ConsoleObject = Console[];

export const consoleObject: ConsoleObject = [
  {
    id: 1,
    name: "Playstation 5",
    image: play5,
    amount: 599,
  },
  {
    id: 2,
    name: "Xbox Series X",
    image: xbox,
    amount: 499,
  },
];

const LandingPage = () => {
  const [hoveredSplitLeft, setHoveredSplitLeft] = useState(false);
  const [hoveredSplitRight, setHoveredSplitRight] = useState(false);

  const [paymentBoxActive, setPaymentBoxActive] = useState(false);
  const [selectedConsole, setSelectedConsole] = useState<Console | null>(
    null
  ) as any;

  const handleClickPaymentBox = (console: Console) => {
    setPaymentBoxActive(true);
    setSelectedConsole(console);
  };

  const handleMouseEnter = (side: string) => {
    const splitLeft = document.querySelector(".split.left") as HTMLElement;
    const splitRight = document.querySelector(".split.right") as HTMLElement;

    if (side === "left") {
      setHoveredSplitLeft(true);
      splitLeft.style.width = "75%";
      splitRight.style.width = "25%";
    } else {
      setHoveredSplitRight(true);
      splitLeft.style.width = "25%";
      splitRight.style.width = "75%";
    }
  };

  const handleMouseLeave = (side: string) => {
    const splitLeft = document.querySelector(".split.left") as HTMLElement;
    const splitRight = document.querySelector(".split.right") as HTMLElement;

    if (side === "left") {
      setHoveredSplitLeft(false);
      splitLeft.style.width = "50%";
      splitRight.style.width = "50%";
    } else {
      setHoveredSplitRight(false);
      splitLeft.style.width = "50%";
      splitRight.style.width = "50%";
    }
  };

  return (
    <>
      <Container>
        <div
          className="split left"
          onMouseEnter={() => handleMouseEnter("left")}
          onMouseLeave={() => handleMouseLeave("left")}
        >
          <h1 className="title">Playstation 5</h1>
          <div
            id="play5"
            onClick={() => handleClickPaymentBox(consoleObject[0])}
            className={`btn-buy`}
          >
            Buy Now
          </div>
        </div>
        <div
          className="split right"
          onMouseEnter={() => handleMouseEnter("right")}
          onMouseLeave={() => handleMouseLeave("right")}
        >
          <h1 className="title">XBox Series X</h1>
          <div
            id="xbox"
            onClick={() => handleClickPaymentBox(consoleObject[1])}
            className="btn-buy"
          >
            Buy Now
          </div>
        </div>
        <div
          className="payment-box"
          style={{ display: paymentBoxActive ? "block" : "none" }}
        >
          <MdClose
            className="close-icon"
            style={{ cursor: "pointer" }}
            onClick={() => setPaymentBoxActive(false)}
          />
          <p className="header-text">Stripe test method of payment</p>
          <div className="sub-text">
            <p className="stripe-card-text">
              Card stripe num: <span>4242 4242 4242 4242</span>
            </p>
            <span>Other inputs: random</span>
          </div>
          <StripeApp />

          {selectedConsole && (
            <div className="console-info">
              <img src={selectedConsole.image} alt="console" />
              <div>
                <p>{selectedConsole.name}</p>
                <p>{selectedConsole.amount} chf</p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default LandingPage;

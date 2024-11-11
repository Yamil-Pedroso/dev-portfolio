import { useState } from "react";
import { Container, HorizontalButtons } from "./styles";

interface IButtonTouch {
  btnClickedX?: boolean;
  btnClickedY?: boolean;
  btnClickedA?: boolean;
  btnClickedB?: boolean;
  changeWord: () => void;
  growIconBox: () => void;
  toggleContent: () => void;
  jumpSocialNetwork: () => void;
}

const ButtonTouch: React.FC<IButtonTouch> = ({
  toggleContent,
  growIconBox,
  changeWord,
  jumpSocialNetwork,
}) => {
  const [boxShadowBtnX, setBoxShadowBtnX] = useState(true);
  const [boxShadowBtnY, setBoxShadowBtnY] = useState(true);
  const [boxShadowBtnA, setBoxShadowBtnA] = useState(true);
  const [boxShadowBtnB, setBoxShadowBtnB] = useState(true);

  const handleClick = (
    setShadow: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setShadow(false);
    setTimeout(() => {
      setShadow(true);
    }, 200);
  };

  return (
    <Container>
      <div
        onClick={() => {handleClick(setBoxShadowBtnX), growIconBox()}}
        className="btn btn-x"
        style={{
          boxShadow: boxShadowBtnX
            ? "-.3rem -.3rem 1px 2px rgba(64, 85, 109, 0.5)"
            : "none",
          width: boxShadowBtnX ? "3rem" : "2.6rem",
          height: boxShadowBtnX ? "3rem" : "2.6rem",
          fontSize: boxShadowBtnX ? "2rem" : "1.6rem",
        }}
      >
        X
      </div>
      <HorizontalButtons>
        <div
          onClick={() => {handleClick(setBoxShadowBtnY), changeWord()}}
          className="btn btn-y"
          style={{
            boxShadow: boxShadowBtnY
              ? "-.3rem -.3rem 1px 2px rgba(64, 85, 109, 0.5)"
              : "none",
            width: boxShadowBtnY ? "3rem" : "2.6rem",
            height: boxShadowBtnY ? "3rem" : "2.6rem",
            fontSize: boxShadowBtnY ? "2rem" : "1.6rem",
          }}
        >
          Y
        </div>
        <div
          onClick={() => { handleClick(setBoxShadowBtnA), toggleContent() }}
          
          className="btn btn-a"
          style={{
            boxShadow: boxShadowBtnA
              ? "-.3rem -.3rem 1px 2px rgba(64, 85, 109, 0.5)"
              : "none",
            width: boxShadowBtnA ? "3rem" : "2.6rem",
            height: boxShadowBtnA ? "3rem" : "2.6rem",
            fontSize: boxShadowBtnA ? "2rem" : "1.6rem",
          }}
        >
          A
        </div>
      </HorizontalButtons>
      <div
        onClick={() => {handleClick(setBoxShadowBtnB), jumpSocialNetwork()}}
        className="btn btn-b"
        style={{
          boxShadow: boxShadowBtnB
            ? "-.3rem -.3rem 1px 2px rgba(64, 85, 109, 0.5)"
            : "none",
          width: boxShadowBtnB ? "3rem" : "2.6rem",
          height: boxShadowBtnB ? "3rem" : "2.6rem",
          fontSize: boxShadowBtnB ? "2rem" : "1.6rem",
        }}
      >
        B
      </div>
    </Container>
  );
};

export default ButtonTouch;

import { useState, useEffect } from "react";
import { Container } from "./styles";
import { potionBg, basketFruits, download } from "../../assets/index";
import { FaDoorOpen } from "react-icons/fa";

import PotionCardMain from "../functionalities/potion-cards/PotionCardMain";
import DragAndDrop from "../functionalities/drag-and-drop/DragAndDrop";
import InfiniteScroll from "../functionalities/infinite-scroll/InfiniteScroll";

const contentBoxIndex = [
  {
    content: <PotionCardMain />,
  },
  {
    content: <DragAndDrop />,
  },
  {
    content: <InfiniteScroll />,
  },
  {
    content: "Content Box 4",
  },
  {
    content: "Content Box 5",
  },
  {
    content: "Content Box 6",
  },
  {
    content: "Content Box 7",
  },
  {
    content: "Content Box 8",
  },
  {
    content: "Content Box 9",
  },
  {
    content: "Content Box 10",
  },
];

const cardContent = [
   {
    content: "Collect Potions",
    icon : potionBg
   }, 
    {
      content: "Fruit Basket",
      icon : basketFruits
    },
    {
      content: "Infinite Scroll",
      icon : download
    },
    {
      content: "Content Box 4",
      icon : potionBg
    },
    {
      content: "Content Box 5",
      icon : potionBg
    },
    {
      content: "Content Box 6",
      icon : potionBg
    },
    {
      content: "Content Box 7",
      icon : potionBg
    },
    {
      content: "Content Box 8",
      icon : potionBg
    },
    {
      content: "Content Box 9",
      icon : potionBg
    },
    {
      content: "Content Box 10",
      icon : potionBg
    }
];

const Functionality = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [clickedBoxIndex, setClickedBoxIndex] = useState(null);
  const [closeBox, setCloseBox] = useState(false);
  const headerText = ["FULLSTACK", "BACKEND", "FRONTEND"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTextIndex((prevIndex) => (prevIndex + 1) % headerText.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleBoxClose = () => {
    setClickedBoxIndex(null);
  };

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index: any) => {
    if (clickedBoxIndex === index) {  
      handleBoxClose();
    } else {
      setClickedBoxIndex(index);  
    }
  };

  return (
    <Container>
      <div className="header-wrapper">
        <p className="header-text">Come with me inside</p>
        <h1>
          Tech Stack: <span>{headerText[activeTextIndex]}</span>
        </h1>
        <p className="desc">
          Set of backend and frontend functionalities. Uses API Rest and SQL and
          noSQL database.
        </p>
      </div>
      <div className="card-wrapper">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            key={i}
            className="card"
            onClick={() => handleClick(i)}
          >
            <p className={`card-text ${hoveredIndex === i ? "visible" : ""}`}>
              {cardContent[i].content}
            </p>
            <img src={
              cardContent[i].icon
            } alt="game" />
            <div className="card-content"></div>
          </div>
        ))}
      </div>
      <div className="box-wrapper">
        {contentBoxIndex.map((content, index) => (
          <div
            key={index}
            className={`box-content ${
              clickedBoxIndex === index ? "active" : ""
            }`}
          >
            <div className="box">
              <h1>
                {clickedBoxIndex === index && <span>{content.content}</span>}
              <FaDoorOpen className="door-icon" onClick={handleBoxClose} />
              </h1>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Functionality;

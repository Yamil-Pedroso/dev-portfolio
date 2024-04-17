import { useState, useEffect } from "react";
import { Container } from "./styles";
import { potionBg, basketFruits, download, bookStack } from "../../assets/index";
import { FaDoorOpen } from "react-icons/fa";

import PotionCardMain from "../functionalities/potion-cards/PotionCardMain";
import DragAndDrop from "../functionalities/drag-and-drop/DragAndDrop";
import InfiniteScroll from "../functionalities/infinite-scroll/InfiniteScroll";
import BookDataApp from "../functionalities/book-data/BookDataApp";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const contentBoxIndex = [
  {
    id: 1,
    content: <PotionCardMain />,
  },
  {
    id: 2,
    content: <DragAndDrop />,
  },
  {
    id: 3,
    content: <InfiniteScroll />,
  },
  {
    id: 4,
    content: <BookDataApp />,
  },
  {
    id: 5,
    content: "Content Box 5",
  },
  {
    id: 6,
    content: "Content Box 6",
  },
  {
    id: 7,
    content: "Content Box 7",
  },
  {
    id: 8,
    content: "Content Box 8",
  },
  {
    id: 9,
    content: "Content Box 9",
  },
  {
    id: 10,
    content: "Content Box 10",
  },
  {
    id: 11,
    content: "Content Box 11",
  },
];

const cardContent = [
   {
    id: 1,
    content: "Collect Potions",
    icon : potionBg
   }, 
    {
      id: 2,
      content: "Fruit Basket",
      icon : basketFruits
    },
    {
      id: 3,
      content: "Infinite Scroll",
      icon : download
    },
    {
      id: 4,
      content: "Book Filter and more",
      icon : bookStack
    },
    {
      id: 5,
      content: "Content Box 5",
      icon : potionBg
    },
    {
      id: 6,
      content: "Content Box 6",
      icon : potionBg
    },
    {
      id: 7,
      content: "Content Box 7",
      icon : potionBg
    },
    {
      id: 8,
      content: "Content Box 8",
      icon : potionBg
    },
    {
      id: 9,
      content: "Content Box 9",
      icon : potionBg
    },
    {
      id: 10,
      content: "Content Box 10",
      icon : potionBg
    },
    {
      id: 11,
      content: "Content Box 11",
      icon : potionBg
    }
];

const limitBoxs = 8;

const Functionality = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [clickedBoxIndex, setClickedBoxIndex] = useState(null);
  const [closeBox, setCloseBox] = useState(false);
  const [currentBoxIndex, setCurrentBookIndex] = useState(0)
  const headerText = ["Node", "React", "Typescript", "MongoDB", "Express", "SQL"];

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

  const handleBoxNext = () => {
    const nextIndex = currentBoxIndex + limitBoxs;
  if (nextIndex < cardContent.length) {
    setCurrentBookIndex(nextIndex);
  } else {
    setCurrentBookIndex(cardContent.length - (cardContent.length % limitBoxs));
  }
  };

  const handleBoxBack = () => {
    const prevIndex = currentBoxIndex - limitBoxs;
  if (prevIndex >= 0) {
    setCurrentBookIndex(prevIndex);
  } else {
    setCurrentBookIndex(0);
  }
  };

  return (
    <Container>
      <div className="header-wrapper">
        <p className="header-text">Mini projects</p>
        <h1>
          Used tech: <span>{headerText[activeTextIndex]}</span>
        </h1>
        <p className="desc">
          Set of backend and frontend functionalities. Uses API Rest and SQL and
          noSQL database.
        </p>
      </div>
      <div className="card-wrapper">
        {cardContent.
          slice(currentBoxIndex, currentBoxIndex + limitBoxs).
          map((item, i) => (
          <div
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            key={item.id}
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
        <div className="arrow-wrapper">
          <FaArrowAltCircleLeft size={48} className="arrow" onClick={handleBoxBack} />
          <FaArrowAltCircleRight size={48} className="arrow" onClick={handleBoxNext} />
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

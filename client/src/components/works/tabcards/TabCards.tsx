import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardContentWrapper,
  CardImageWrapper,
  CardWrapper,
  Card,
  ProjContainer,
  TabCardsContainer,
  TechHeaderWrapper,
} from "./styles";

import {
  react,
  filePython,
  typescript,
  porfolioOne,
  travel,
} from "../../../assets";

const menu1 = [
  {
    title: "React-TS-Node",
    content: "Squib Company Ltd.",
    src: react,
    link: "https://www.squib.app",
    image: porfolioOne,
  },
  {
    title: "React-Google-Map",
    content: "Travel Advisor",
    src: react,
    color: "bg-blue-500",
    link: "https://travel-advisorv1.netlify.app/",
    image: travel,
  }
];
const menu2 = [
  {
    title: "Python 1",
    content: "New",
    src: filePython,
    link: "https://www.google.com",
  },
  {
    title: "Python 2",
    content: "New",
    src: filePython,
    color: "bg-blue-500",
    link: "https://www.google.com",
  },
  {
    title: "Python 3",
    content: "New",
    src: filePython,
    color: "bg-green-500",
    link: "https://www.google.com",
  },
];
const menu3 = [
  {
    title: "html/css/ts 1",
    content: "New",
    src: typescript,
    link: "https://www.google.com",
  },
  {
    title: "html/css/ts 2",
    content: "New",
    src: typescript,
    link: "https://www.google.com",
  },
  {
    title: "html/css/ts 3",
    content: "New",
    src: typescript,
    link: "https://www.google.com",
  },
];

const TabCards = ({ onHoverCard }: any) => {
  const [activeMenu1, setActiveMenu1] = useState(true);
  const [activeMenu2, setActiveMenu2] = useState(false);
  const [activeMenu3, setActiveMenu3] = useState(false);

  const handleClick = (index: any) => {
    setActiveMenu1(index === "menu1");
    setActiveMenu2(index === "menu2");
    setActiveMenu3(index === "menu3");
  };

  const checkActiveTab = (index: any, className: any) => {
    if (
      (index === "menu1" && activeMenu1) ||
      (index === "menu2" && activeMenu2) ||
      (index === "menu3" && activeMenu3)
    ) {
      return className;
    } else {
      return "";
    }
  };

  return (
    <TabCardsContainer>
      <TechHeaderWrapper>
        <button
          onClick={() => handleClick("menu1")}
          className={` ${checkActiveTab("menu1", "custom-text")}`}
        >
          React-TS-Node
        </button>
      </TechHeaderWrapper>
      <ProjContainer>
        {menu1.map((item, index) => (
          <CardWrapper
            onMouseEnter={() => onHoverCard(true)}
            onMouseLeave={() => onHoverCard(false)}
          >
            <Card>
              <Link to={item.link} target="_blank" className="card-cont">
                <CardImageWrapper
                  key={index}
                  className={`panel dark-overlay cursor-pointer ${checkActiveTab(
                    "menu1",
                    "active"
                  )}`}
                >
                  <img src={item.image} className="zoom-img" alt="proj-image" />
                </CardImageWrapper>
              </Link>
              <CardContentWrapper>
                <h1 className="">{item.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CardContentWrapper>
            </Card>
          </CardWrapper>
        ))}
      </ProjContainer>
    </TabCardsContainer>
  );
};

export default TabCards;

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
  Content,
  Tech,
  Icons,
} from "./styles";

import {
  react,
  filePython,
  typescript,
  porfolioOne,
  travel,
  porfolioThree,
  porfolioFour,
  portfolioFive,
} from "../../../assets";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript, TbBrandRedux } from "react-icons/tb";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

const menu1 = [
  {
    title: "SQUIB Ltd.",
    content:
      "Die einfachste Art, attraktive Umfragen zu erstellen, die alle deine Zielgruppen lieben werden.",
    tech: "React-TypeScript",
    icons: [FaReact, TbBrandTypescript],
    link: "https://www.squib.app",
    image: porfolioOne,
  },
  {
    title: "World Travel Advisor",
    tech: "React-Redux",
    icons: [FaReact, TbBrandRedux, DiPhotoshop],
    content:
      "World Travel Advisor is a platform designed to inspire and guide travelers with personalized recommendations, destination insights, and travel tips to create unforgettable experiences worldwide.",
    link: "https://travel-advisorv1.netlify.app/",
    image: travel,
  },
  {
    title: "Creative Design Studio",
    content:
      "Creative design studio specializing in meeting the needs of the new generation. We offer innovative and cutting-edge design solutions to help our clients stand out in today's fast-paced.",
    tech: "React-TypeScript-Illustrator",
    icons: [FaReact, TbBrandTypescript, DiIllustrator],
    link: "https://creative-design-studio-nine.vercel.app/",
    image: porfolioThree,
  },
  {
    title: "Startup Agency",
    content:
      "Dynamic and innovative organization that provides comprehensive support, guidance and resources to early stage startups.",
    tech: "React-TypeScript-Illustrator",
    icons: [FaReact, TbBrandTypescript, DiIllustrator],
    link: "https://startup-agency-chi.vercel.app/",
    image: porfolioFour,
  },
  {
    title: "Snippets Collection",
    content: "Create, share, and organize your code snippets with ease.",
    tech: "React-TypeScript-Node-MongoDB",
    icons: [FaReact, TbBrandTypescript, FaNodeJs, SiMongodb],
    link: "https://custom-snippetsv1.netlify.app/",
    image: portfolioFive,
  },
];
//const menu2 = [
//  {
//    title: "Python 1",
//    content: "New",
//    src: filePython,
//    link: "https://www.google.com",
//  },
//  {
//    title: "Python 2",
//    content: "New",
//    src: filePython,
//    color: "bg-blue-500",
//    link: "https://www.google.com",
//  },
//  {
//    title: "Python 3",
//    content: "New",
//    src: filePython,
//    color: "bg-green-500",
//    link: "https://www.google.com",
//  },
//];
//const menu3 = [
//  {
//    title: "html/css/ts 1",
//    content: "New",
//    src: typescript,
//    link: "https://www.google.com",
//  },
//  {
//    title: "html/css/ts 2",
//    content: "New",
//    src: typescript,
//    link: "https://www.google.com",
//  },
//  {
//    title: "html/css/ts 3",
//    content: "New",
//    src: typescript,
//    link: "https://www.google.com",
//  },
//];

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
                <Content>
                  <h1 className="">{item.title}</h1>
                  <Tech>
                    <p>{item.tech}</p>
                    <Icons>
                      {item.icons.map((Icon, index) => (
                        <Icon key={index} className="icon" size={20} />
                      ))}
                    </Icons>
                  </Tech>
                  <p>{item.content}</p>
                </Content>
              </CardContentWrapper>
            </Card>
          </CardWrapper>
        ))}
      </ProjContainer>
    </TabCardsContainer>
  );
};

export default TabCards;

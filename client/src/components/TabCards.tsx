import { useState } from "react";
import { Link } from "react-router-dom";

import {
  react,
  filePython,
  typescript,
  porfolioOne,
  travel,
} from "../assets";

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
  },
  {
    title: "React-Google-Map",
    content: "Travel Advisor",
    src: react,
    color: "bg-blue-500",
    link: "https://travel-advisorv1.netlify.app/",
    image: travel,
  },
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

const TabCards = () => {
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
    <div className="full-width">
      <div className="centered-box">
        <button
          onClick={() => handleClick("menu1")}
          className={` ${checkActiveTab("menu1", "custom-text")}`}
        >
          React-TS-Node
        </button>
      </div>
      <div className="flex-container">
        {menu1.map((item, index) => (
          <div className="card-container">
            <div className="card-wrapper">
              <Link to={item.link} target="_blank" className="card-cont">
                <div
                  key={index}
                  className={`panel dark-overlay cursor-pointer ${checkActiveTab(
                    "menu1",
                    "active"
                  )}`}
                >
                  <div className="text-center-wrapper">
                    <p className="text-overlay"><span style={{ color : "#0099ff", fontWeight: "400"}}>{item.content}</span></p>
                  </div>

                  <img src={item.image} alt="" className="zoom-img" />
                </div>
              </Link>
              <div className="card-cont-wrapper">
                <h1 className="">{item.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabCards;

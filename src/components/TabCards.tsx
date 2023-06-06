import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { m, motion } from "framer-motion";
import { Link } from "react-router-dom";

import { react, python, typescript } from "../assets";

const menu1 = [
  {
    title: "React 1",
    content: "New",
    color: "bg-red-500",
    src: react ,
    link: "https://www.google.com",
  },
  {
    title: "React 2",
    content: "New",
    src: react,
    color: "bg-blue-500",
    link: "https://www.google.com",
  },
  {
    title: "React 3",
    content: "New",
    src: react,
    color: "bg-green-500",
    link: "https://www.google.com",
  },
];
const menu2 = [
  {
    title: "Python 1",
    content: "New",
    color: "bg-red-500",
    src: python,
    link: "https://www.google.com",
  },
  {
    title: "Python 2",
    content: "New",
    src: python,
    color: "bg-blue-500",
    link: "https://www.google.com",
  },
  {
    title: "Python 3",
    content: "New",
    src: python,
    color: "bg-green-500",
    link: "https://www.google.com",
  },
];
const menu3 = [
  {
    title: "Typescript 1",
    content: "New",
    color: "bg-red-500",
    src: typescript,
    link: "https://www.google.com",
  },
  {
    title: "Typescript 2",
    content: "New",
    src: typescript,
    color: "bg-blue-500",
    link: "https://www.google.com",
  },
  {
    title: "Typescript 3",
    content: "New",
    src: typescript,
    color: "bg-green-500",
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
    if ((index === "menu1" && activeMenu1) || (index === "menu2" && activeMenu2) || (index === "menu3" && activeMenu3)) {
      return className;
    } else {
      return "";
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-indigo-400 flex justify-between space-x-8 rounded-lg px-4 py-2 w-[440px]">
        <button
          onClick={() => handleClick("menu1")}
          className={` ${checkActiveTab(
            "menu1",
            "text-white-600 border-b-2 border-white"
          )}`}
        >
          React
        </button>
        <button
          onClick={() => handleClick("menu2")}
          className={`text-white ${checkActiveTab(
            "menu2",
            "text-white-600 border-b-2 border-white"
          )}`}
        >
          Python
        </button>
        <button
          onClick={() => handleClick("menu3")}
          className={`text-white ${checkActiveTab(
            "menu3",
            "text-white-600 border-b-2 border-white"
          )}`}
        >
          Typescript
        </button>
      </div>
      <div className="bg-white w-full text-black1 w-[440px] rounded-md">
        {menu1.map((item, index) => (
          <div key={index} className={`flex flex-col space-y-4 p-4 panel ${checkActiveTab("menu1", "active")}`}>
            <div className="flex justify-between">
              <div>
                <h1 className="text-xl font-bold">{item.title}</h1>
                <Link to={item.link} className="text-sm font-bold" target="_blank">
                  {item.link}
                </Link>
              </div>
              <h1 className="text-xl font-bold">{item.content}</h1>
              <img src={item.src} alt="" className="w-20 h-20 rounded-full" />
            </div>
          </div>
        ))}
        {menu2.map((item, index) => (
          <div key={index} className={`flex flex-col space-y-4 p-4 panel ${checkActiveTab("menu2", "active")}`}>
            <div className="flex justify-between">
              <div>
                <h1 className="text-xl font-bold">{item.title}</h1>
                <Link to={item.link} className="text-sm font-bold" target="_blank">
                  {item.link}
                </Link>
              </div>
              <h1 className="text-xl font-bold">{item.content}</h1>
              <img src={item.src} alt="" className="w-20 h-20 rounded-full" />
            </div>
          </div>
        ))}
        {menu3.map((item, index) => (
          <div key={index}  className={`flex flex-col space-y-4 p-4 panel ${checkActiveTab("menu3", "active")}`}>
            <div className="flex justify-between">
              <div>
                <h1 className="text-xl font-bold">{item.title}</h1>
                <Link to={item.link} className="text-sm font-bold" target="_blank">
                  {item.link}
                </Link>
              </div>
              <h1 className="text-xl font-bold">{item.content}</h1>
              <img src={item.src} alt="" className="w-20 h-20 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabCards;

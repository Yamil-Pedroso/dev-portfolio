import { IconType } from 'react-icons';
import { FaNodeJs, FaReact, FaHtml5, FaCss3, FaPhoneAlt } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiJavascript, SiStyledcomponents, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, SiFramer, SiBlender } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { LiaFigma } from "react-icons/lia";
import { TbWorldPlus, TbWorldWww } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaImage, FaE } from "react-icons/fa6";

import {
    backend,
    frontend,
    ux,
    hosting,
    digitalart,
    react,
    rocket,
    laptop,
    paint,
    javascript,
    typescript,
    python,
    ruby,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    photoshop,
    terminal,
    illustrator,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    frontend1,
  } from "../assets";

  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "mini-projects",
      title: "Mini Projects",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const projectsLinks = [
    "https://ecom-etlmgjnmy-yamil-pedroso.vercel.app/"
  ]

  interface IContact {
    icon: IconType | string;
    content: string;
  }

  interface Service {
    id: number;
    title: string;
    description: string;
    icon: string; // Suponiendo que frontend es una cadena que representa la ruta de la imagen
    icons?: IconType[];
    color?: string;
  }

  export interface ITechService {
    title?: string;
    description?: string;
    img?: string;
    description2?: string;
    buttonText?: string;
  }

  const contact: IContact[] = [
    {
      content: "+41 079 532 65 19",
      icon: FaPhoneAlt,
    },
    {
      content: "yamilpedroso@gmail.com",
      icon: MdEmail,
    },
    {
      content: "Zurich, Switzerland",
      icon: FaLocationDot,
    },
    {
      content: "Lorem",
      icon: FaImage,
    },
    {
      content: "Lorem",
      icon: FaImage,
    },
    {
      content: "Lorem",
      icon: FaImage,
    },
  ];

  const techServices: ITechService[] = [
    {
      title: "Frontend Developer",
      description: "Creating interactive and engaging user interfaces using the latest frontend technologies.",
      img: frontend1,
      description2: "Tech: React.js/ JS",
      buttonText: "Learn More",
    },
    {
      title: "Backend Developer",
      description: "building scalable and robust systems. Developing server-side applications using modern technologies.",
      img: frontend1,
      description2: "Tech: Node.js/ JS",
      buttonText: "Learn More",
    },
    {
      title: "React Native Developer",
      description: "Creating highly performant and visually apps that work seamlessly on both iOS and Android platforms.",
      img: frontend1,
      description2: "Tech: React Native/ JS",
      buttonText: "Learn More",
    },
    {
      title: "UI/UX Designer",
      description: "Building intuitive and visually interfaces, pleasing but also enhance the user experience.",
      img: frontend1,
      description2: "Tech: Figma/ Photoshop",
      buttonText: "Learn More",
    },
    {
      title: "Digital Art",
      description: "Creating characters, logos, icons, are born in Adobe Photoshop and Illustrator.",
      img: frontend1,
      description2: "Tech: Photoshop/ Illustrator",
      buttonText: "Learn More",
    },
    {
      title: "Hosting",
      description: "Upload your website to the hosting of your choice. Watch your website on the Internet.",
      img: frontend1,
      description2: "Tech: World Plus/ World WWW",
      buttonText: "Learn More",
    },
  ];
  

  const services: Service[] = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Creating interactive and engaging user interfaces using the latest frontend technologies.",
      icon: frontend,
      icons: [
        FaReact,
        SiTypescript,
        FaHtml5,
        FaCss3,
      ],
      
      color: "#61b272",
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "building scalable and robust systems. Developing server-side applications using modern technologies.",
      icon: backend,
      icons: [
        SiTypescript,
        FaNodeJs,
        PiFileSqlFill,
        SiMongodb,
      ],
      color: "#e9a13b",
    },
    {
      id: 3,
      title: "React Native Developer",
      description: "Creating highly performant and visually apps that work seamlessly on both iOS and Android platforms.",
      icon: react,
      icons: [
        FaReact,
        SiTypescript,
        SiTailwindcss,
        SiStyledcomponents,
      ],
      color: "#61b272",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      description: "Building intuitive and visually interfaces, pleasing but also enhance the user experience.",
      icon: ux,
      icons: [
        LiaFigma,
        SiAdobephotoshop,
        SiAdobeillustrator,
        SiFramer,
      ],
      color: "#e9a13b",
    },
    {
      id: 5,
      title: "Digital Art",
      description: "Creating characters, logos, icons, are born in Adobe Photoshop and Illustrator.",
      icon: digitalart,
      icons: [
        SiAdobephotoshop,
        SiAdobeillustrator,
        SiBlender,
      ],
      color: "#e9a13b",
    },
    {
      id: 6,
      title: "Hosting",
      description: "Upload your website to the hosting of your choice. Watch your website on the Internet.",
      icon: hosting,
      icons: [
        TbWorldPlus,
        TbWorldWww,
      ],
      color: "#e9a13b",
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "Illustrator",
      icon: illustrator,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Squib Startup, Zurich, Switzerland",
      icon: laptop,
      iconBg: "#a1a1aa",
      date: "2022-2023",
      points: [
        "Build the UI/UX of the website as well as the responsive design and functionality of the product in question.",
        "Tech: React.js/ JS"
      ],
    },
    {
      title: "Javascript Frontend Developer",
      company_name: "Brainnest, Berlin, Germany",
      icon: rocket,
      iconBg: "#a1a1aa",
      date: "2023",
      points: [
        "Completed the Brainnest Frontend Development Industry Training",
        "Tech: HTML/ CSS/ JS"
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Le Wagon, Zurich, Switzerland",
      icon: rocket,
      iconBg: "#a1a1aa",
      date: "2022",
      points: [
        "BootCamp at Le Wagon(Ruby/ Ruby on rails/ JS/ SQL) I strengthen the acquired knowledge by starting my own projects.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Qiibee AG, Zug, Switzerland",
      icon: laptop,
      iconBg: "#a1a1aa",
      date: "2021",
      points: [
        "Frontend: - Test the UI for a plugin and insert it into online store. Shopify online store registration form.",
        "Backend: - Qiibee API integration with Shopify API key in Node JS and Shopify Partners. Registration form (email, password). Technologies used: React JS, Emotion JS, Redux, Node JS, Requests (GET, POST, PUT/ PATCH, DELETE (testing in Postman), Login + JWT, Ngrok (Secure tunnel server for testing URLs), Postman, APIs (Qiibee API key consumption)",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "SIT Academy, Zurich, Switzerland",
      icon: rocket,
      iconBg: "#a1a1aa",
      date: "2020",
      points: [
        "BootCamp at SIT academy(React.Js/ Node.Js/ JS) I strengthen the acquired knowledge by starting my own projects.",
      ],
    },
    {
      title: "Project Support Artist",
      company_name: "Mundus Vita, Zurich, Switzerland",
      icon: paint,
      iconBg: "#a1a1aa",
      date: "2018",
      points: [
        "Visual presentation of the different project stages.",
        "Art paintings for the project exhibition and for the project documentation.",
      ],
    },
    {
      title: "Artist (Traditional and digital painting)",
      company_name: "Almost Famous Gallery, Habana, Cuba",
      icon: paint,
      iconBg: "#a1a1aa",
      date: "2010-2017",
      points: [
        "Traditional and digital painting.",
      ],
    },
    {
      title: "Information Science and Technology",
      company_name: "Casa del Alba, Habana, Cuba",
      icon: laptop,
      iconBg: "#a1a1aa",
      date: "2010-2017",
      points: [
        "Network manager and telecommunications.",
      ],
    },
    {
      title: "Information Science and Technology",
      company_name: "UNESCO, Habana, Cuba",
      icon: laptop,
      iconBg: "#a1a1aa",
      date: "2009-2010",
      points: [
        "Network manager and telecommunications.",
      ],
    },
  ];

  const enviroment = [
    {
      title: "Terminal Environment",
      image: terminal,
    }
  ]

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  export { services, techServices, technologies, experiences, testimonials, projects, enviroment, contact };

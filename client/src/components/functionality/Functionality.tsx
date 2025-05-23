import { useState, useEffect, useRef } from "react";
import { Container } from "./styles";
import { potionBg, basketFruits, download, bookStack, cinema, gameConsole, chat, upload } from "../../assets";
import { FaDoorOpen } from "react-icons/fa";

import PotionCardMain from "../functionalities/potion-cards/PotionCardMain";
import DragAndDrop from "../functionalities/drag-and-drop/DragAndDrop";
import InfiniteScroll from "../functionalities/infinite-scroll/InfiniteScroll";
import BookDataApp from "../functionalities/book-data/BookDataApp";
import MovieData from "../functionalities/movie-data/MovieData";
import LandingPage from "../functionalities/landingpage-split-stripe/LandingPage";
import ChatApp from "../functionalities/realtime-chat/ChatApp";
import DropFilesApp from "../functionalities/drop-files/DropFilesApp";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { TbHandFinger } from "react-icons/tb";
import CardTitles from "./CardTitles";

import LiveProjDemos from "./LiveProjDemos";

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
    content: <MovieData />,
  },
  {
    id: 5,
    content: <LandingPage />,
  },
  {
    id: 6,
    content: <ChatApp />,
  },
  {
    id: 7,
    content: <DropFilesApp />,
  },
]

const cardContent = [
  {
    id: 1,
    content: "Collect Potions Auth",
    desc: "Node-MongoDB-React-Typescript",
    icon : potionBg

   }, 
    {
      id: 2,
      content: "Fruit Basket",
      desc: "React-Typescript",
      icon : basketFruits
  
    },
    {
      id: 3,
      content: "Infinite Scroll",
      desc: "React-Typescript-Queries",
      icon : download
  
    },
    {
      id: 4,
      content: "Fetch Movie API",
      desc: "React-Typescript-Search-Filter",
      icon : cinema
  
    },
    {
      id: 5,
      content: "Buy console with Stripe",
      desc: "Node-React-Typescript-Stripe-Payment",
      icon : gameConsole
  
    },
    {
      id: 6,
      content: "Realtime Chat",
      desc: "Node-React-Typescript-Socket.io",
      icon : chat
  
    },
    {
      id: 7,
      content: "Drag and Drop",
      desc: "React-Typescript-Browser Files",
      icon : upload
  
    },
];
const limitBoxs = 8

const Functionality = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeTextIndex, setActiveTextIndex] = useState(0)
  const [clickedBoxIndex, setClickedBoxIndex] = useState(null)
  const [closeBox, setCloseBox] = useState(false)
  const [currentBoxIndex, setCurrentBookIndex] = useState(0)
  const headerText = [
    'Node',
    'Supabase',
    'React',
    'Typescript',
    'MongoDB',
    'Express',
    'SQL',
  ]
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        cardsRef.current &&
        !cardsRef.current.contains(event.target as Node)
      ) {
        setClickedBoxIndex(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [cardsRef, setClickedBoxIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTextIndex((prevIndex) => (prevIndex + 1) % headerText.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const handleBoxClose = () => {
    setClickedBoxIndex(null)
  }

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const handleClick = (index: any) => {
    if (clickedBoxIndex === index) {
      handleBoxClose()
      setClickedBoxIndex(null)
    } else {
      setClickedBoxIndex(index)
    }
  }

  const handleBoxNext = () => {
    const nextIndex = currentBoxIndex + limitBoxs
    if (nextIndex < cardContent.length) {
      setCurrentBookIndex(nextIndex)
    } else {
      setCurrentBookIndex(cardContent.length - (cardContent.length % limitBoxs))
    }
  }

  const handleBoxBack = () => {
    const prevIndex = currentBoxIndex - limitBoxs
    if (prevIndex >= 0) {
      setCurrentBookIndex(prevIndex)
    } else {
      setCurrentBookIndex(0)
    }
  }

  return (
    <Container id="mini-projects">
      <div className="header-wrapper">
        <p className="header-text">Mini projects plus</p>
        <h1>
          Used tech: <span>{headerText[activeTextIndex]}</span>
        </h1>
        <p className="desc">
          Set of backend and frontend functionalities. Uses API Rest and SQL and
          noSQL database.
        </p>
      </div>

      <CardTitles />
    </Container>
  )
}

export default Functionality

import { IconType } from "react-icons";
import { bg1, bg2, bg3, bg4, bg5, bg6 } from "../assets";
import { GoDependabot } from "react-icons/go";
import { FaBlog } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { MdDocumentScanner } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

export interface Message {
    message: string;
    senderId: string;
}

export interface ICardProps {
    id?: number;
    title: string;
    image?: string;
    description?: string;
    link?: string;
    img?: string;
    icon?: IconType;
}

const cards: ICardProps[] = [
    {
        id: 1,
        title: "AI Landing Page",
        icon: GoDependabot,
        link: "https://authentic-table-243760.framer.app/",
      },
      {
        id: 2,
        title: "Your own Blog",
        icon: FaBlog,
        link: "https://magnificent-essentials-705450.framer.app/",
      },
      {
        id: 3,
        title: "Restaurant",
        icon: FaBowlFood,
        link: "https://spinning-hours-471367.framer.app/",
      },
      {
        id: 4,
        title: "Portfolio",
        icon: GrYoga,
        link: "https://flowing-resource-240424.framer.app/",
      },
      {
        id: 5,
        title: "Admin Dashboard",
        icon: MdDocumentScanner,
        link: "https://chatty-type-423866.framer.app/",
      },
      {
        id: 6,
        title: "Social Media",
        icon: AiOutlineProduct,
        link: "https://cuddly-days-031995.framer.app/",
      },
];

export { cards };

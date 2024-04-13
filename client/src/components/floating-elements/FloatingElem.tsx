import { useRef } from "react";
import { animate, useAnimation } from "framer-motion";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import Reveal from "../reveal-animation/Reveal";
import imgs from "../../data/data";
import {
  SiJavascript,
  SiPython,
  SiRuby,
  SiRubyonrails,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiDocker,
  SiPostgresql,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
} from "react-icons/si";
import { FaReact, FaAngular } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { TbSql } from "react-icons/tb";

import { Card, Container, IconTech, GradientIcon } from "./styles";

const techBox = [
  {
    id: 1,
    title: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 2,
    title: "Python",
    icon: <SiPython />,
  },
  {
    id: 3,
    title: "Ruby",
    icon: <SiRuby />,
  },
  {
    id: 4,
    title: "React",
    icon: <FaReact />,
  },
  {
    id: 5,
    title: "Django",
    icon: <IoLogoNodejs />,
  },
  {
    id: 6,
    title: "Angular",
    icon: <FaAngular />,
  },
  {
    id: 7,
    title: "Ruby on Rails",
    icon: <SiRubyonrails />,
  },
  {
    id: 8,
    title: "Typescript",
    icon: <SiTypescript />,
  },
  {
    id: 9,
    title: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    id: 10,
    title: "CSS3",
    icon: <SiCss3 />,
  },
  {
    id: 11,
    title: "Django",
    icon: <SiDjango />,
  },
  {
    id: 12,
    title: "Docker",
    icon: <SiDocker />,
  },
  {
    id: 13,
    title: "Postgresql",
    icon: <SiPostgresql />,
  },
  {
    id: 14,
    title: "Figma",
    icon: <SiFigma />,
  },
  {
    id: 15,
    title: "Adobe Photoshop",
    icon: <SiAdobephotoshop />,
  },
  {
    id: 16,
    title: "Adobe Illustrator",
    icon: <SiAdobeillustrator />,
  },
  {
    id: 17,
    title: "Adobe InDesign",
    icon: <SiAdobeindesign />,
  },
  {
    id: 18,
    title: "Adobe Lightroom",
    icon: <SiAdobelightroom />,
  },
  {
    id: 19,
    title: "SQL",
    icon: <TbSql />,
  },
];

const AnimatedCard = animated(Card);

const calcX = (y: any, ly: any) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: any, lx: any) => (x - lx - window.innerWidth / 2) / 20;

const wheel = (y: any) => {
  const imgHeight = window.innerWidth * 0.3 - 20;
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`;
};

const FloatingElem = () => {
  const domTargets = useRef(
    Array.from({ length: imgs.length }).map(() => useRef(null))
  );
  const controls = useAnimation();

  const handleJumpAnimation = async () => {
    // Puedes ajustar las propiedades de la animación según tus preferencias
    await controls.start({
      y: [0, -20, 0], // Hace que el icono haga un pequeño salto en el eje Y
      transition: { duration: 0.5, ease: "easeOut" },
    });
    await controls.start({ y: 0 }); // Reinicia la posición del icono
  };

  const createCardProps = () => {
    return {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    };
  };

  const iconos = techBox.map((tech, i) => {
    const domTarget = useRef(null);
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
      () => createCardProps()
    );

    const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }));

    useGesture(
      {
        onDrag: ({ active, offset: [x, y] }) =>
          api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 2 : 1.1 }),
        onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
        onMove: ({ xy: [px, py], dragging }) =>
          !dragging &&
          api({
            rotateX: calcX(py, y.get()),
            rotateY: calcY(px, x.get()),
            scale: 1.1,
          }),
        onHover: ({ hovering }) =>
          !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),

        onWheel: ({ event, offset: [, y] }) => {
          event.preventDefault();
          wheelApi.set({ wheelY: y });
        },
      },
      { domTarget, eventOptions: { passive: false } }
    );

    domTargets.current[i] = domTarget;

    return (
      <Reveal>
        <AnimatedCard
          key={i}
          ref={domTarget}
          style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundSize: "cover",
            backgroundColor: "#1A1A1A",
            backgroundPosition: "center center",
            borderRadius: "5px",
            transform: "perspective(600px)",
            border: "1px solid #515151",
            x,
            y,
            scale: to([scale, zoom], (s, z) => s + z),
            rotateX,
            rotateY,
            rotateZ,
          }}
        >
          <IconTech>
            {tech.icon}
            </IconTech>
        </AnimatedCard>
      </Reveal>
    );
  });

  //const cards = imgs.map((img, i) => {
  //  const domTarget = useRef(null);
  //  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
  //    () => createCardProps()
  //  );
  //
  //  const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }));
  //
  //  useGesture(
  //    {
  //      onDrag: ({ active, offset: [x, y] }) =>
  //        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 3: 1.1 }),
  //      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
  //      onMove: ({ xy: [px, py], dragging }) =>
  //        !dragging &&
  //        api({
  //          rotateX: calcX(py, y.get()),
  //          rotateY: calcY(px, x.get()),
  //          scale: 1.1,
  //        }),
  //      onHover: ({ hovering }) =>
  //        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
  //      onWheel: ({ event, offset: [, y] }) => {
  //        event.preventDefault();
  //        wheelApi.set({ wheelY: y });
  //      },
  //    },
  //    { domTarget, eventOptions: { passive: false } }
  //  );
  //
  //  domTargets.current[i] = domTarget;
  //
  //  return (
  //    <AnimatedCard
  //      key={i}
  //      ref={domTarget}
  //      style={{
  //        display: "flex",
  //        flexWrap: "wrap",
  //        backgroundImage: `url(${img})`,
  //        backgroundSize: 'cover',
  //        backgroundPosition: 'center center',
  //        borderRadius: '5px',
  //        transform: 'perspective(600px)',
  //        x,
  //        y,
  //        scale: to([scale, zoom], (s, z) => s + z),
  //        rotateX,
  //        rotateY,
  //        rotateZ,
  //      }}
  //    />
  //  );
  //});

  return <Container>{iconos}</Container>;
};

export default FloatingElem;

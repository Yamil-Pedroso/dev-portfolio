import React, { useRef } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import imgs from "../../data/data";

import { Card, Container } from "./styles";

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

  const cards = imgs.map((img, i) => {
    const domTarget = useRef(null);
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
      () => createCardProps()
    );

    const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }));

    useGesture(
      {
        onDrag: ({ active, offset: [x, y] }) =>
          api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
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
      <AnimatedCard
        key={i}
        ref={domTarget}
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          borderRadius: '5px',
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      />
    );
  });

  return <Container>
    {
        cards
    }
    </Container>;
};

export default FloatingElem;

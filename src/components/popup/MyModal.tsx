import React, { useState, forwardRef, ReactElement, cloneElement } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import {
  rocketLaunch,
  creative,
  hiring,
  rocketGirl,
  team,
  reminder,
} from "../../assets";
import Sudoku from "../sudoku/Sudoku";
import Chess from "../chess/Chess";
import TomTomMap from "../tomtom-map/TomTomMap";

import { zudoku, map, chess } from "../../assets";

interface FadeProps {
  children: ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const smallFunnyProjects = [
  {
    id: 1,
    title: "Sudoku",
    color: "#b34c4c",
    content: <Sudoku />,
    icon: zudoku,
  },
  {
    id: 2,
    title: "Funny Map",
    color: "#d4c33e",
    content: <TomTomMap />,
    icon: map,
  },
  {
    id: 3,
    title: "Chess me",
    color: "#4389c6",
    content: <Chess piece={""} color={""} />,
    icon: null,
  },
  {
    id: 4,
    title: "fourth project",
    color: "#985153",
    content: "content 4",
    icon: rocketGirl,
  },
  {
    id: 5,
    title: "fifth project",
    color: "#3e7677",
    content: "content 5",
    icon: team,
  },
  {
    id: 6,
    title: "sixth project",
    color: "#5d9034",
    content: "content 6",
    icon: reminder,
  },
];

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {cloneElement(children, { onClick })}
    </animated.div>
  );
});


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  backgroundColor: "background.paper",
  border: "2px solid #2eab6c",
  padding: 4,
};


const MyModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const handleOpen = (project: any) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setOpen(false);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <Button onClick={() => handleOpen(smallFunnyProjects[index])}>
            <div
              key={index}
              className={`flex items-center m-4 w-[5rem] h-[5rem] text-center rounded-2xl cursor-pointer`}
              style={{ backgroundColor: smallFunnyProjects[index].color }}
            >
              <div>
                <p style={{ color: "#000" }}>
                  {smallFunnyProjects[index].title}
                </p>
              </div>
            </div>
          </Button>
        );
      })}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <div style={style as any}>
            <div>
              {selectedProject && (
                <>
                  <div style={{ color: "#000" }}>
                    <div>{selectedProject.content}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MyModal;

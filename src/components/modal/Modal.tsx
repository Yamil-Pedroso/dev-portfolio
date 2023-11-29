import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../hooks/useModal";
import { framerLogger } from "./state-logger/stateLogger";
import ModalComponents from "./modal-components/ModalComponents";

const Modal = () => {
    const { modalOpen, close, open } = useModal();

  const [modalType, setModalType] = useState("dropIn");
  const handleType = (e: any) => setModalType(e.target.value);

  const ModalContainer = ({ children, label }: any) => (
    // Enables the animation of components that have been removed from the tree
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      
      mode="wait"
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => framerLogger(label)}
    >
      {children}
    </AnimatePresence>
  );
  

  return (
    <div>
        <motion.select className="input" onChange={handleType}>
          <option value="dropIn">🪂 Drop in</option>
          <option value="flip">🛹 Flip</option>
          <option value="newspaper">🗞 Newspaper</option>
          <option value="badSuspension">🔩 Bad Suspension</option>
          <option value="gifYouUp">🎸 GIF you up</option>
        </motion.select>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={open}
        >
          Launch modal
        </motion.button>

        <ModalContainer>
        {modalOpen && (
          <ModalComponents modalOpen={modalOpen} text={modalType} type={modalType} handleClose={close} />
        )}
      </ModalContainer>
    </div>
  )
}

export default Modal
import { ModalOverlay, ModalContent, ModalTitle, ModalText, CloseButton } from './styles';
import { motion } from 'framer-motion';

interface ModalNoteProps {
  onClose: () => void;
}

const ModalNote = ({ onClose }: ModalNoteProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3, duration: 0.5 }}
    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}
  >
    <ModalOverlay as={motion.div} onClick={onClose}> {/* Detecta clics fuera del modal */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 1 }}
        transition={{
          delay: 3,        
          type: 'spring',
          stiffness: 300,
          damping: 15,
          mass: 0.8,
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        <ModalContent>
          <ModalTitle>Hola👋!</ModalTitle>
          <ModalText>
            This website is currently under refactoring. New projects and designs will be added soon, so stay tuned for updates!
          </ModalText>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalContent>
      </motion.div>
    </ModalOverlay>
  </motion.div>
);

export default ModalNote;

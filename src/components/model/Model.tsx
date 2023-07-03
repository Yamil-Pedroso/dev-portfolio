import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Model = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: 1, title: "Item 1", subtitle: "Subtitle 1" },
    { id: 2, title: "Item 2", subtitle: "Subtitle 2" },
    { id: 3, title: "Item 3", subtitle: "Subtitle 3" }
  ];

  const handleItemClick = (itemId: number | React.SetStateAction<null>) => {
    setSelectedId(itemId as React.SetStateAction<null>);
  };

  const handleBackButtonClick = () => {
    setSelectedId(null);
  };

  return (
    <>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => handleItemClick(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            exit={{ opacity: 0, scale: 0.5 }}
            key="selectedItem"
          >
            {items.map((item) => {
              if (item.id === selectedId) {
                return (
                  <React.Fragment key={item.id}>
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                    <motion.button onClick={handleBackButtonClick}>
                      Go Back
                    </motion.button>
                  </React.Fragment>
                );
              }
              return null;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Model;

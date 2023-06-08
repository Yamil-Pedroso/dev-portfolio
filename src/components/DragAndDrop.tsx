import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import Technology from "./Technology";

const DragAndDrop = () => {
  const [tech, setTech] = useState([
    {
      id: 1,
      name: "React",
    },
    {
      id: 2,
      name: "Vue",
    },
    {
      id: 3,
      name: "Angular",
    },
  ] as any);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    const oldIndex = tech.findIndex((item: any) => item.id === active.id);
    const newIndex = tech.findIndex((item: any) => item.id === over.id);

    const newOrder = arrayMove(tech, oldIndex, newIndex);
    setTech(newOrder);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/6">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <h1 className="text-2xl font-bold">Tech List</h1>
          <SortableContext strategy={verticalListSortingStrategy} items={tech}>
            {tech.map((item: any) => (
              <Technology key={item.id} tech={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default DragAndDrop;

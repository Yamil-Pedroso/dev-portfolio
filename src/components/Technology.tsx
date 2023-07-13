import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Technology = ({ tech }: any) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({ id: tech.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      }

  return (
    <div 
      id="technology"
    ref={setNodeRef}
    style={style}
    {...attributes}
    {...listeners}
    className='bg-white p-4 rounded-md shadow-md text-black my-2'>
      {tech.name}
  </div>
  )
}

export default Technology
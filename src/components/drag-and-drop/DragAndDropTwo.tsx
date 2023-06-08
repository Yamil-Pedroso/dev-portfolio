import React, { useState } from 'react'
import './styles.css'

const DragAndDropTwo = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      body:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
      list: 1,
    },
    {
      id: 2,
      title: 'Task 2',
      body:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
      list: 1,
    },
    {
      id: 3,
      title: 'Task 3',
      body:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
      list: 3,
    },
    {
      id: 4,
      title: 'Task 4',
      body:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
      list: 2,
    },
    {
      id: 5,
      title: 'Task 5',
      body:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
      list: 2,
    },
  ])

  const getList = (list: any) => {
    return tasks.filter((item) => item.list === list)
  }

  const startDrag = (evt: any, item: any) => {
    evt.dataTransfer.setData('itemID', item.id)
    console.log(item)
  }

  const draggingOver = (evt: any) => {
    evt.preventDefault()
  }

  const onDrop = (evt: any, list: any) => {
    const itemID = evt.dataTransfer.getData('itemID')
    const item = tasks.find((item) => item.id == itemID)
    item.list = list

    const newState = tasks.map((task) => {
      if (task.id === itemID) return item
      return task
    })

    setTasks(newState)
  }

  return (
    <>
      <h1>
        Drag and Drop &nbsp;
        <img className="icon-react" src="src/assets/react.svg" alt="" />
      </h1>
      <br />

      <div className="drag-and-drop">
        <div className="column column--1">
          <h3>ToDos</h3>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 1)}
          >
            {getList(1).map((item) => (
              <div
                className="dd-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="column column--2">
          <h3>In Progress</h3>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 2)}
          >
            {getList(2).map((item) => (
              <div
                className="dd-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="column column--3">
          <h3>Done</h3>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 3)}
          >
            {getList(3).map((item) => (
              <div
                className="dd-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DragAndDropTwo

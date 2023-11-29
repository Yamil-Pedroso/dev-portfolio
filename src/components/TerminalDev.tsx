import React from 'react'

import { enviroment } from '../constants'

const TerminalDev = () => {
  return (
    <div className="flex justify-center">
      {enviroment.map((env, index) => (
        <div key={index}>
          <p className="text-black">{env.title}</p>
          <img src={env.image} alt="icon" className="w-[35vw] h-[35vh]" />
        </div>
      ))}
    </div>
  )
}

export default TerminalDev

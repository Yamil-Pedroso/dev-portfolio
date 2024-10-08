import React from 'react'
import { Link } from 'react-router-dom'

const MoreUiUx = () => {
  return (
    <div
     style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
        MoreUiUx
        <Link to="https://past-stack-479046.framer.app/"
            target="_blank"
            rel="noopener noreferrer"
        >Go page
        </Link>
    </div>
  )
}

export default MoreUiUx
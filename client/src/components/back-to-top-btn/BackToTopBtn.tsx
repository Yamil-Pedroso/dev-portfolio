import React, { useCallback, useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTopBtn = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false)

    const handleScroll = useCallback(() => {
        if (window.scrollY > 300) {
            setBackToTopBtn(true)
        } else {
            setBackToTopBtn(false)
        }
    }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <div className="fixed bottom-0 right-0 z-50">
        <button
            className={`${
                backToTopBtn ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300 ease-in-out bg-[#1a1a1a] text-[#fff] rounded-full w-10 h-10 flex items-center justify-center m-5`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <FaArrowUp className="text-2xl upY" />
        </button>
    </div>
  )
}

export default BackToTopBtn
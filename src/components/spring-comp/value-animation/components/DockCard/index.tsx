import * as React from 'react'
import { useState } from 'react'
import { animated, useIsomorphicLayoutEffect, useSpringValue } from '@react-spring/web'

import { useMousePosition } from '../hooks/useMousePosition'
import { useWindowResize } from '../hooks/useWindowResize'

import { useDock } from '../Dock/DockContext'

import styles from './styles.module.scss'

interface DockCardProps {
  children: React.ReactNode
}


export const DockCard = ({ children }: DockCardProps) => {
  const [initialWidth, setInitialWidth] = useState<number>(48)
  const [cardWidth, setCardWidth] = useState(initialWidth)
  const cardRef = React.useRef<HTMLButtonElement>(null!)

  const [elCenterX, setElCenterX] = React.useState<number>(0)

  const size = useSpringValue(initialWidth, {
    config: {
      mass: 0.1,
      tension: 320,
    },
  })

  const opacity = useSpringValue(0)
  const y = useSpringValue(0, {
    config: {
      friction: 29,
      tension: 238,
    },
  })

  const dock = useDock()

  useMousePosition(
    {
      onChange: ({ value }) => {
        const mouseX = value.x

        if (dock.width > 0) {
          const transformedValue =
            initialWidth + 15 * Math.cos((((mouseX - elCenterX) / dock.width) * Math.PI) / 2) ** 12

          if (dock.hovered) {
            size.start(transformedValue)
          }
         
        }
        
      },
    },
    [elCenterX, dock]
  )

  useIsomorphicLayoutEffect(() => {
    if (!dock.hovered) {
      size.start(initialWidth)
    }
  }, [dock.hovered])

  useWindowResize(() => {
    const { x } = cardRef.current.getBoundingClientRect()
    if(window.innerWidth < 768) {
      setCardWidth(20)
    } else {
      setCardWidth(48)
    }

    setElCenterX(x + initialWidth / 2)
  })

  const timesLooped = React.useRef(0)
  const timeoutRef = React.useRef<NodeJS.Timeout | undefined>();
  const isAnimating = React.useRef(false)

  const handleClick = () => {
    if (!isAnimating.current) {
      isAnimating.current = true
      opacity.start(0.5)

      timesLooped.current = 0

      y.start(-initialWidth / 2, {
        loop: () => {
          if (3 === timesLooped.current++) {
            timeoutRef.current = setTimeout(() => {
              opacity.start(0)
              y.set(0)
              isAnimating.current = false
              timeoutRef.current = undefined
            }, 2000)
            y.stop()
          } 
          return { reverse: true }
        },
  } ) 
    } else {
  
      clearTimeout(timeoutRef.current)
      opacity.start(0)
      y.start(0)
      isAnimating.current = false
    } 
  } 

  React.useEffect(() => () => clearTimeout(timeoutRef.current), [])

  return (
    <div className={styles['dock-card-container']}>
      <animated.button
        ref={cardRef}
        className={styles['dock-card']}
        onClick={handleClick}
        style={{
          width: size,
          height: size,
          y,
        }}>
        {children}
      </animated.button>
      <animated.div className={styles['dock-dot']} style={{ opacity }} />
    </div>
  )
}

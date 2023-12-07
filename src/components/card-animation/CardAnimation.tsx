import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import styles from './styles.module.css'
import { exp1, exp2, exp3, exp4, exp5 } from '../../assets'

const cards = [
  exp5,
  exp4,
  exp3,
  exp2,
  exp1,
]

const texts = [
  'Frontend Developer',
  'Backend Developer',
  'React Native Developer',
  'UI/UX Designer',
  'Digital Art',
  'Hosting Provider',
]

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }))
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2
      const dir = xDir < 0 ? -1 : 1
      if (!down && trigger) gone.add(index)
      api.start((i) => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
        const scale = down ? 2 : 1
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear()
          api.start((i) => to(i))
        }, 600)
    },
  )

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              fontSize: '1.5rem',
              color: 'black',
              fontWeight: 'bold',
              cursor: 'grab',
              display: 'flex',
              alignItems: 'center',
              marginTop: '10rem',
              backgroundImage: `url(${cards[i]})`,
              backgroundSize: 'cover',
            }}
          >
            <p
              style={{
                margin: '0',
                padding: '0',
                width: '100%',
                textAlign: 'center',
              }}
            >
            </p>
          </animated.div>
        </animated.div>
      ))}
    </>
  )
}

const CardAnimation = () => {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  )
}

export default CardAnimation

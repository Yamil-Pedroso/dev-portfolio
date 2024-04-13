import React, { useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSprings, a } from '@react-spring/three'
import { Text } from '@react-three/drei'
import { SpringValue } from '@react-spring/core'

import './styles.css'

const number = 35
const letters = ['Hola mundo']
const colors = [
  '#A2CCB6',
  '#FCEEB5',
  '#EE786E',
  '#e0feff',
  'lightpink',
  'lightblue',
]
const random = (i: number) => {
  const r = Math.random()
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 2, 1 + r * 2, 1],
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)],
  }
}

const data = new Array(number).fill(null).map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
    text: letters[Math.round(Math.random() * (letters.length - 1))],
  }
})

interface SpringProps {
  position: number[]
  color: string
  scale: SpringValue<number[]> | number[]
  rotation: number[]
}

function Content() {
  const [springs, api] = useSprings<SpringProps>(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 50, friction: 50 },
  }))

  useEffect(
    () =>
      void setInterval(
        () => api.start((i) => ({ ...random(i), delay: i * 40 })),
        3000,
      ),
    [],
  )

  return (
    <>
      {data.map((d: any, index: any) => (
        <group key={index}>
          <a.mesh
            {...springs[index]}
            castShadow
            receiveShadow
            position={springs[index].position.to((x, y, z) => [x, y, z])}
            scale={springs[index].scale.to((x, y, z) => [x, y, z])}
            rotation={springs[index].rotation.to((x, y, z) => [x, y, z]) as any}
          >
            <boxGeometry attach="geometry" args={d.args} />
            <meshStandardMaterial
              attach="material"
              color={random(index).color}
              roughness={0.75}
              metalness={0.5}
            />
          </a.mesh>
          <Text
            //position={springs[index].position.to((x, y, z) => [x, y, z]) as any}
            rotation={springs[index].rotation.to((x, y, z) => [x, y, z]) as any}
            color="red"
            fontSize={29}
            anchorX="center"
            anchorY="middle"
          >
            {d.text}
          </Text>
        </group>
      ))}
    </>
  )
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={5} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  )
}

const HeroAnimation = () => {
  return (
    <div>
      <Canvas
        style={{ width: '40rem', height: '27rem' }}
        linear
        flat
        shadows
        camera={{ position: [0, 0, 100], fov: 100 }}
      >
        <Lights />

        <Content />
      </Canvas>
    </div>
  )
}

export default HeroAnimation

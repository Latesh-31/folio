'use client'

import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, Stars } from '@react-three/drei'
import { Icosahedron } from '@react-three/drei'

function Scene() {
  const mesh = useRef(null)

  return (
    <Canvas className="absolute top-0 left-0 h-screen w-screen bg-[#050505] z-0">
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        <Icosahedron ref={mesh} args={[1, 1]} wireframe color="#0066FF"/>
      </Float>
      <Environment preset="city" />
      <Stars depth={50} count={5000}/>
    </Canvas>
  )
}

export default Scene
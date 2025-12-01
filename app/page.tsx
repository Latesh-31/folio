import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import Overlay from '@/components/Overlay'

const inter = Inter({ subsets: ['latin'] })

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Scene />
      <Overlay />
    </div>
  )
}
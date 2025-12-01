import dynamic from 'next/dynamic'
import Interface from '@/components/Interface'

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Scene />
      <Interface />
    </main>
  )
}
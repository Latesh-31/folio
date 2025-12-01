import { LucideSendHorizonal } from 'lucide-react'

function Overlay() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex flex-col justify-between p-4 md:p-8 z-10">
      <header className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">NEO</div>
        <nav className="flex items-center space-x-4 text-gray-200">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center">Building the Future with AI</h1>
      </main>

      <button className="fixed bottom-4 right-4 bg-[#0066FF] text-white p-3 rounded-full shadow-lg hover:bg-[#0052CC] transition-colors duration-200">
        <LucideSendHorizonal size={24} />
      </button>
    </div>
  )
}

export default Overlay
import { LucideSendHorizonal } from 'lucide-react'

function Interface() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 p-4 md:p-8 z-10">
        <nav className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">NEO</div>
          <div className="flex items-center space-x-4 text-gray-200">
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tighter">PROJECT NEO</h1>
      </main>

      <button className="fixed bottom-4 right-4 bg-[#0066FF] text-white p-3 rounded-full shadow-lg hover:bg-[#0052CC] transition-colors duration-200 pointer-events-auto">
        <LucideSendHorizonal size={24} />
      </button>
    </div>
  )
}

export default Interface
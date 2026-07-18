function App() {
  return (
    <div className="min-h-screen bg-[#5C94FC] flex items-center justify-center p-6 font-mono">
      <div className="bg-[#C6C6C6] border-[6px] border-[#373737] shadow-[inset_-6px_-6px_0_#8B8B8B,inset_6px_6px_0_#FFFFFF] max-w-xl w-full p-6">

        <h1 className="bg-[#3B8526] text-white text-2xl text-center p-3 border-4 border-[#1F4A14] mb-5"
            style={{ textShadow: '2px 2px 0 #1F4A14' }}>
          About Me
        </h1>

        <div className="flex flex-col gap-4">
          <div className="bg-[#8B5A2B] border-4 border-[#4A2E14] px-4 py-3">
            <h2 className="text-[#FFE28A] text-sm mb-1">Full Name</h2>
            <p className="text-white text-base">Samuel Binos</p>
          </div>

          <div className="bg-[#8B5A2B] border-4 border-[#4A2E14] px-4 py-3">
            <h2 className="text-[#FFE28A] text-sm mb-1">Course and Year</h2>
            <p className="text-white text-base">BSIS 3</p>
          </div>

          <div className="bg-[#8B5A2B] border-4 border-[#4A2E14] px-4 py-3">
            <h2 className="text-[#FFE28A] text-sm mb-1">Fun Fact</h2>
            <p className="text-white text-base">Idiot</p>
          </div>

          <div className="bg-[#5B5B5B] border-4 border-[#2E2E2E] px-4 py-3">
            <h2 className="text-[#FFE28A] text-sm mb-2">Reflection</h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Not gonna lie, I am still kinda new to all this React stuff and I do not fully get everything yet.
              But I feel like I am slowly picking it up activity by activity.
              Some parts are confusing pa rin but it is getting better little by little.
              I learned how components work and how JSX lets me build a page piece by piece.
              Just happy I am learning even in small steps and I hope this helps me later in IS.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-10%] top-[-20%] h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute right-[-15%] top-[-10%] h-[38rem] w-[38rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-25%] left-[35%] h-[42rem] w-[42rem] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,9,11,0.35),rgba(9,9,11,0.95))]" />
    </div>
  )
}


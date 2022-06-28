// Export a component for the navigation bar
export default function Navigation() {
  return (
    <nav className="flex bg-black">
      <div className="flex items-baseline justify-between h-full w-full p-2">
        <div className="ml-5 h-full">
          <h2 className="inline-flex text-xl relative mt-1 font-bold tracking-widest uppercase select-none	">
            S<div className="inline-flex transform -scale-y-100 translate-y-[.78px] ">n</div>ow
          </h2>
        </div>
        <div>
          <SessionArea />
        </div>
      </div>
    </nav>
  );
}

export function SessionArea({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="border border-[#0070f3] hover:bg-[#0070f3]/40 px-5 py-1 rounded text-white">
      Login
    </button>
  );
}

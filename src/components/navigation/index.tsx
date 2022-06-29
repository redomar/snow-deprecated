import Link from "next/link";

// Export a component for the navigation bar
export default function Navigation() {
  return (
    <nav className="flex bg-black">
      <div className="flex items-baseline justify-between h-full w-full p-2">
        <Link href="/">
          <div className="ml-5 h-full">
            <h2 className="inline-flex text-xl relative mt-1 font-bold -tracking-widest uppercase select-none cursor-pointer border-y-[2px]">
              S<div className="inline-flex transform -scale-y-100 translate-y-[.78px] ">n</div>ow
            </h2>
          </div>
        </Link>
        <div>
          <SessionArea />
        </div>
      </div>
    </nav>
  );
}

export function SessionArea() {
  return (
    <Link href="/login">
      <button className="border border-[#0070f3] hover:bg-[#0070f3]/40 px-5 py-1 rounded text-white">
        Login
      </button>
    </Link>
  );
}

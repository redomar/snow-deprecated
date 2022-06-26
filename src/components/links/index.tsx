import { useRouter } from "next/router";

type LinkProps = {
  linkTitle: string;
  linkUrl: string;
  linkHandle?: string;
  active?: boolean;
};

export const Links = () => {
  return (
    <div className="h-screen flex">
      <div className="w-64 px-8 py-4 bg-zinc-900/50 border-r border-zinc-900/80">
        {/* Logo Img */}
        <nav className="mt-8">
          <h2 className="text-xs font-semibold  text-zinc-400 uppercase tracking-wider">
            Social Links
          </h2>
          <Link
            active={true}
            linkTitle="Twitter"
            linkUrl="https://twitter.com/rxemar1"
            linkHandle="@rxemar1"
          />
          <Link linkTitle="website" linkUrl="https://rx1.uk" linkHandle="www.rx1.uk" />
        </nav>
      </div>
      <div className="flex-1 min-w-0 ">
        <div className="border-b-2 border-zinc-900"></div>
      </div>
    </div>
  );
};

function Link({ active = false, ...linkProps }: LinkProps): JSX.Element {
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(linkProps.linkUrl);
  };

  return (
    <div className={`my-2 -mx-3 text-white ${active ? "font-bold" : "font-light"}`}>
      <button
        className={`flex w-full justify-between items-center px-3 py-2 ${
          active
            ? "bg-zinc-700 border border-zinc-500"
            : "text-zinc-500 bg-zinc-800/30 tracking-wide"
        } hover:bg-zinc-600 hover:cursor-pointer hover:text-white rounded-sm`}
        onClick={onClick}>
        <span className="text-sm">{linkProps.linkTitle}</span>
        {linkProps.linkHandle && (
          <span className="text-xs font-semibold">{linkProps.linkHandle}</span>
        )}
      </button>
    </div>
  );
}

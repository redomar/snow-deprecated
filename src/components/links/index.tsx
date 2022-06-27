import { useRouter } from "next/router";

export type LinkComponentProps = {
  id: string;
  linkTitle: string;
  linkUrl: string;
  linkHandle?: string;
  active?: boolean;
};

const Links = ({ linkProps }: { linkProps?: LinkComponentProps[] }) => {
  return (
    <div className="h-screen flex">
      <div className="flex flex-col gap-8 w-64 px-8 py-4 bg-zinc-900/50 border-r border-zinc-900/80">
        {/* Logo Img */}
        <LinkSection sectionTitle="Social Links">
          {linkProps?.map((link) => (
            <Link key={link.linkTitle} {...link} />
          ))}
        </LinkSection>
        <LinkSection sectionTitle="Projects" className="text-sm text-zinc-500 tracking-widest">
          ...
        </LinkSection>
      </div>
      <div className="flex-1 min-w-0 ">
        <div className="border-b-2 border-zinc-900"></div>
      </div>
    </div>
  );
};

export function LinkSection({
  children,
  sectionTitle,
  className = "",
}: {
  children?: React.ReactNode;
  sectionTitle: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-xs font-semibold  text-zinc-400 uppercase tracking-wider">
        {sectionTitle}
      </h2>
      {children}
    </div>
  );
}

function Link({ active = false, ...linkProps }: LinkComponentProps): JSX.Element {
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(linkProps.linkUrl);
  };

  return (
    <div className={`my-2 -mx-3 text-white ${active ? "font-bold" : "font-light"}`}>
      <button
        className={`flex w-full justify-between items-baseline px-3 py-2 ${
          active ? "bg-zinc-700/80 border border-zinc-600" : "text-zinc-500 tracking-wide"
        } hover:bg-zinc-700 hover:cursor-pointer hover:text-white rounded-lg`}
        onClick={onClick}>
        <span className="text-sm">{linkProps.linkTitle}</span>
        {linkProps.linkHandle && (
          <span className="text-xs font-semibold">{linkProps.linkHandle}</span>
        )}
      </button>
    </div>
  );
}

export default Links;

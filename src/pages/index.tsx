import Links, { LinkComponentProps } from "@/components/links";
import { trpc } from "@/utils/trpc";

export default function Home() {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "world" }]);

  const link: LinkComponentProps = {
    id: "link1",
    active: false,
    linkTitle: "Twitter",
    linkUrl: "https://twitter.com/rxemar1",
    linkHandle: "@rxemar1",
  };
  // return <div className="text-4xl">Mr {data?.greeting}</div>;
  return <Links linkProps={[link]} />;
}

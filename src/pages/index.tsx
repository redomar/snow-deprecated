import Links, { LinkComponentProps } from "@/components/links";
import Navigation from "@/components/navigation";
import { trpc } from "@/utils/trpc";

export default function Home() {
  // const { data, isLoading } = trpc.useQuery(["hello", { text: "world" }]);

  // return <div className="text-4xl">Mr {data?.greeting}</div>;
  return "Home";
}

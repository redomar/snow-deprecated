import { Session } from "next-auth";
import { getSession, signIn, signOut } from "next-auth/react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next/types";

type SessionProps = {
  session: Session | null;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession({ req: ctx.req });
  return { props: { session } };
};

export default function LoginComponent({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-black w-96 h-96 rounded-xl border border-zinc-700">
      <div className="flex justify-center items-center h-full w-full">
        <SessionComponent session={session} />
      </div>
    </div>
  );
}

function SessionComponent({ session }: SessionProps) {
  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className="border border-[#0070f3] hover:bg-[#0070f3]/40 px-5 py-1 rounded text-white">
        Login
      </button>
    </>
  );
}

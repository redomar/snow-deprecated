// export a login page component

import LoginComponent from "@/components/authentication";

export default function Login() {
  return (
    <div className="flex w-full justify-center mt-4">
      <LoginComponent session={null} />
    </div>
  );
}

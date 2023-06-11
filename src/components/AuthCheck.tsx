"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";

const AuthCheck = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    <></>;
  }
};

export default AuthCheck;

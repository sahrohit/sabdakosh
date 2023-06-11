"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const SignInButton = () => {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-row gap-4">
        <Link href="/dashboard">
          <Image
            src={
              session?.user?.image ??
              `https://api.dicebear.com/6.x/micah/svg?size=256&seed=${session?.user?.name}`
            }
            alt={session?.user?.name ?? "User"}
            width={36}
            height={36}
          />
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return <Button onClick={() => signIn()}>Sign In</Button>;
};

export const SignOutButton = () => {
  return (
    <Button className="bg-red-600 hover:bg-red-500" onClick={() => signOut()}>
      Logout
    </Button>
  );
};

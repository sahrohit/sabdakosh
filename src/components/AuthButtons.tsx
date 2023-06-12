"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export const SignInButton = () => (
  <Button onClick={() => signIn()}>Contribute</Button>
);

export const SignOutButton = () => (
  <Button className="bg-red-600 hover:bg-red-500" onClick={() => signOut()}>
    Logout
  </Button>
);

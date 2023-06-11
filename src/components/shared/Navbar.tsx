import React from "react";
import { SignInButton } from "../AuthButtons";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-between items-center px-4 py-4 ">
      <div>Logo</div>
      <div>Links</div>
      <SignInButton />
    </nav>
  );
};

export default Navbar;

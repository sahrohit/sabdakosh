import React from "react";
import { SignInButton } from "../AuthButtons";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-between items-center px-4 py-4 ">
      <Logo className="h-12" color="#000" />
      <Search />
      <SignInButton />
    </nav>
  );
};

export default Navbar;

import { SignInButton, SignOutButton } from "../AuthButtons";
import Logo from "./Logo";
import Search from "./Search";
import Link from "next/link";
import { Button } from "../ui/button";
import { LinkIcon, List, Menu } from "lucide-react";
import UseClient from "../helpers/UseClient";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <nav className="w-full flex-row justify-between items-center px-4 py-4 sticky top-0 bg-white hidden md:flex">
        <Logo className="h-12" color="#123456" />
        <div className="flex flex-row items-center gap-4">
          <Search />
          <Button asChild variant="ghost">
            <Link href="/list" className="gap-2">
              <List className="w-4 h-4" />
              Ukhaan List
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/docs" className="gap-2">
              <LinkIcon className="w-4 h-4" />
              <p>API Docs</p>
            </Link>
          </Button>
        </div>
        {session ? (
          <div className="flex flex-row gap-6">
            <Link href="/dashboard">
              <Image
                src={
                  session?.user?.image ??
                  `https://api.dicebear.com/6.x/micah/svg?size=256&seed=${session?.user?.name}`
                }
                alt={session?.user?.name ?? "User"}
                width={36}
                height={36}
                className="rounded-full"
              />
            </Link>
            <SignOutButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </nav>
      <nav className="w-full flex-row justify-between items-center px-4 py-4 sticky top-0 bg-white flex md:hidden">
        <Logo className="h-12" color="#123456" />
        <UseClient>
          <div className="flex flex-row items-center gap-2">
            {session ? (
              <div className="flex flex-row gap-6">
                <Link href="/dashboard">
                  <Image
                    src={
                      session?.user?.image ??
                      `https://api.dicebear.com/6.x/micah/svg?size=256&seed=${session?.user?.name}`
                    }
                    alt={session?.user?.name ?? "User"}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </Link>
                <SignOutButton />
              </div>
            ) : (
              <SignInButton />
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <Menu className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup className="items-start">
                  <DropdownMenuItem asChild>
                    <Link href="/list" className="gap-2">
                      <List className="w-4 h-4" />
                      <p>Ukhaan List</p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Search />
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Button variant="ghost">
                      <Link href="/docs" className="gap-2">
                        <LinkIcon className="w-4 h-4" />
                        <p>API Docs</p>
                      </Link>
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </UseClient>
      </nav>
    </>
  );
};

export default Navbar;

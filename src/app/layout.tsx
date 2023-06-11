import Navbar from "@/components/shared/Navbar";
import AuthProvider from "@/context/AuthProvider";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sabdakosh",
  description: "We deal with Ukhaan and Tukkas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AuthProvider>
      <html lang="en">
        <body className={cn(inter.className, "max-w-5xl mx-auto")}>
          {/* <Navbar /> */}
          <main>{children}</main>
        </body>
      </html>
    // </AuthProvider>
  );
}

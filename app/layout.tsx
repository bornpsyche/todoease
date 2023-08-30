import Appbar from "@/components/appbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/context/client-provider";
import { getServerSession } from "next-auth";
import { Session } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getCurrentUser } from "@/lib/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TodoEase",
  description: "Next gen Todo app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar session={session}/>
        {children}
      </body>
    </html>
  );
}

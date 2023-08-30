'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { signIn, useSession, signOut } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { getCurrentUser } from "@/lib/session";
import { RecordWithTtl } from "dns";
import React from "react";

export default function Appbar({session}) {
  //const router = useRouter();
  //const session = useSession();
  //const session = await getCurrentUser();
  //console.log(session);
  return (
    <header className="bg-background border-b-2">
      <div className="container h-14 flex items-center">
        <Link href="/">
          <span className="text-lg font-bold">TodoEase</span>
        </Link>
        {session?.email ? (
          <div className="flex flex-1 space-x-3 justify-end">
            <Button className="focus:ring-2">{session.email}</Button>
            <Button
              className="focus:ring-2"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex flex-1 space-x-3 justify-end">
            <Button
              className="focus:ring-2"
              onClick={() => signIn()}
              //onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              className="focus:ring-2"
              // onClick={() => {
              //   router.push("/signup");
              // }}
            >
              Signup
            </Button>
          </div>
        )}
      </div>
    </header>
    //<div>{session}</div>
  );
}

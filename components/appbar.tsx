"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Appbar() {
  const router = useRouter();
  return (
    <header className="bg-background border-b-2">
      <div className="container h-14 flex items-center">
        <Link href="/">
          <span className="text-lg font-bold">TodoEase</span>
        </Link>
        <div className="flex flex-1 space-x-3 justify-end">
          <Button
            className="focus:ring-2"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button
            className="focus:ring-2"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Signup
          </Button>
        </div>
      </div>
    </header>
  );
}

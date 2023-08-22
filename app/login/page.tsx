import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="flex flex-col container h-[36rem] items-center justify-center">
      <div className="mx-auto text-center mb-8">
        <h1 className="">Welcome Back!</h1>
        <h1>
          Dont have a account yet? <Link href={"/signup"} className="text-primary underline">Create account</Link>
        </h1>
      </div>
      <div>
        <Card className="w-[360px] pt-6">
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="password"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

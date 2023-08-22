import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(res: NextApiResponse) {
  console.log("hi there");
  return NextResponse.json({ name: "John Doe" });
}
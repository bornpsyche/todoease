import { NextRequest, NextResponse } from "next/server";
import { User } from "@/lib/model";

export async function GET(req: NextRequest, res: NextResponse) {
  const userId = req.headers.get("userId");
  const user = await User.findOne({ _id: userId });
  if (user) {
    NextResponse.json({ username: user.username });
  } else {
    NextResponse.json({ message: "User not logged in" }, { status: 403 });
  }
}

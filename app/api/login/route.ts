import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/lib/model";
import dbConnect from "@/lib/dbConnect";

export async function POST(req: Request) {
  dbConnect();
  //console.log(mongoose.connection.readyState);
  const { email, password } = await req.json();
  const user = await User.findOne({ email, password });
  if (user) {
    const token = jwt.sign(
        { id: user._id },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: "1h" }
      );
      return NextResponse.json({ message: "User logged in successfully", token });
  } else {
    return NextResponse.json({ message: "Invalid username or password"}, { status: 403 });
  }
}

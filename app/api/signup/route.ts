import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/lib/model";
import dbConnect from "@/lib/dbConnect";

export async function POST(req: Request) {
  dbConnect();
  //console.log(mongoose.connection.readyState);
  const { email, password } = await req.json();
  const user = await User.findOne({ email });
  if (user) {
    return NextResponse.json(
      { message: "User already exists" },
      {
        status: 403,
      }
    );
  } else {
    const newUser = new User({ email, password });
    await newUser.save();
    const token = jwt.sign(
      { id: newUser._id },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "1h" }
    );
    return NextResponse.json({ message: "User created successfully", token });
  }
}

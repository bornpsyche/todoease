// import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(req: NextRequest, res: NextResponse) {
//     console.log("middleware!");
//   const authHeader = req.headers.get("authorization");

//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
//     jwt.verify(
//       token,
//       process.env.ACCESS_TOKEN_SECRET as string,
//       (err, payload) => {
//         if (err || !payload || typeof payload === "string") {
//           return NextResponse.json({}, { status: 403 });
//         }
//         req.headers.set("userId", payload.id);
//         NextResponse.next();
//       }
//     );
//   } else {
//     return NextResponse.json({}, { status: 403 });
//   }
// }

// export const config = {
//     matcher: '/api/me',
// }

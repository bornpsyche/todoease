import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@/lib/model";
import dbConnect from "@/lib/dbConnect";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        type: "credentials",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            await dbConnect()
            if (!credentials) {
                return null;
            }
            const email = credentials.username;
            const password = credentials.password;
            // Add logic here to look up the user from the credentials supplied
            const admin = await User.findOne({ email });

            if (!admin) {
                const obj = { email: email, password: password };
                const newAdmin = new User(obj);
                let adminDb = await newAdmin.save();
                console.log(adminDb);
                return {
                    id: adminDb._id,
                    email: adminDb.email,
                }
            } else {
                //TODO:: Make this safer, encrypt passwords
                if (admin.password !== password) {
                    return null
                }
                // User is authenticated
                return {
                    id: admin._id,
                    email: admin.email,
                }
            }
        }
    }),
],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

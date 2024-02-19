import { connectMongoDB } from "../../../../libs/mongodb"
import User from "../../../../models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

export const authOptions = {
  providers: [
    CredentialsProvider({
      nome: "credentials",
      credentials: {},

      async authorize(credentials) {
        const {email, password } = credentials
        try {
          await connectMongoDB()
          const user = await User.findOne({email})
          if(!user){
            null
          }
          const passworfMatch = await bcrypt.compare(password, user.password)

          if(!passworfMatch){
            return null
          }
          return user
        } catch (error) {
          
        }

      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
import { connectMongoDB } from "../../../../libs/mongodb"
import User from "../../../../models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import {useUser} from "../../../../components/userContext"
import { getToken } from "next-auth/jwt"

export const authOptions = {
  providers: [
    CredentialsProvider({
      nome: "credentials",
      credentials: {},

      async authorize(credentials) {
        const {username, password } = credentials
        try {
          const res = await fetch("https://api.dev.mtoca.net/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: new URLSearchParams({
                username,
                password
              })
            });
             const data = await res.json()
             
             
            
            if (res.ok) {
              return data
              
            } else {
              throw new Error("Failed to login");
            }

         
        } catch (error) {
          throw new Error("Failed to login");
          
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

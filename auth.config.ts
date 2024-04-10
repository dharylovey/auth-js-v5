
import  bcrypt  from 'bcryptjs'
import  Credentials  from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "@/schema"
import { getUserByEmail } from "@/data/user"
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials){
        const validatedFields = LoginSchema.safeParse(credentials)
        if( validatedFields.success){
          const { email, password } = validatedFields.data

          const user = await getUserByEmail(email)
          if(!user || !user.password){
            return null
          }

          const passwordCompare = await bcrypt.compare(
            password, 
            user.password
          );

          if(passwordCompare) return user
        }

        return null
      }
    })
  ],
} satisfies NextAuthConfig
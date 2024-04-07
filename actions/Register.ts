'use server'
import bcrypt from 'bcryptjs'

import * as z from 'zod'
import { RegisterSchema } from '@/schema'
import {db} from '@/lib/db'
import { getUserByEmail } from '@/data/user'


export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: 'Invalid fields!' }
    }

    const { name, email, password} = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email)

    if( existingUser){
        return { error: 'User already exists!' }
    }

     const user =await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    // console.log(user)
    return { success: 'Successfull registration!' }

}
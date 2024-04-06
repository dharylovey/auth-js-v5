'use server'

import * as z from 'zod'
import { LoginSchema } from '@/schema'


export const Login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    if(!validatedFields.success) return { error: 'Invalid fields!'}
    console.log(values)
    return { success: 'Email sent!' }
    
}
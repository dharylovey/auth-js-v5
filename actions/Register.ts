'use server'

import * as z from 'zod'
import { RegisterSchema } from '@/schema'


export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)
    if(!validatedFields.success) return { error: 'Invalid fields!'}
    console.log(values)
    return { success: 'Successfull registration!' }
    
}
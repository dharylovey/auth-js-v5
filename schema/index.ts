import * as z from 'zod'    

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email is required',
    }).trim(),
    password: z.string().min(1, {
        message: 'Password is required',
    })
})


export const RegisterSchema = z.object({
    name: z.string().min(2, {
        message: 'Minimum 2 characters required',
    }),
    email: z.string().email({
        message: 'Email is required',
    }).trim(),
    password: z.string().min(6, {
        message: 'Minimum 6 characters required',
    }),
})
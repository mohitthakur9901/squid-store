import z from "zod";


export const SignUpValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(3)
});


export const SignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

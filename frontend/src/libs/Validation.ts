import zod from "zod";

const SignUpSchema = zod.object({
    profile : zod.string().url(),
    name : zod.string().min(1, "Name is required"),
    email : zod.string().email("Invalid email"),
    password : zod.string().min(8, "Password must be at least 8 characters"),
    confirmPassword : zod.string().min(8, "Password must be at least 8 characters")
})


export {SignUpSchema}
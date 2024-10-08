import { z } from "zod";



export const loginValidationSchema = z.object({
    email: z.string().trim().email('Please Enter a valid Email!'),
    password: z.string().trim().min(6, "Password needs to be at lest  6 character")
})

export const forgotPasswordValidationSchema = z.object({
    email: z.string().trim().email('Please Enter a valid Email!'),

})

export const resetPasswordValidationSchema = z.object({
    newPassword: z.string().min(6, "Password must be at least 6 characters long"),

});

export const changePasswordValidationSchema = z.object({

    oldPassword: z.string().min(6, "Password must be at least 6 characters long"),
    newPassword: z.string().min(6, "Password must be at least 6 characters long"),

});
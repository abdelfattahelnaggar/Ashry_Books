import * as z from "zod"
export const loginFormSchema = z.object({
    email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "البريد الإلكتروني غير صالح"),
    password: z.string().min(1, "كلمة المرور مطلوبة")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "كلمة المرور غير صالحة"),
     // at least one lowercase letter, one uppercase letter, one number, one special character
  })
  export type loginFormType = z.infer<typeof loginFormSchema>
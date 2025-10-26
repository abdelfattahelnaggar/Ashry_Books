import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { loginFormSchema, type loginFormType } from "../schemas/login.schema"
import { showToast } from "@/shared/utils/showToast"


export function LoginForm() {
  const form = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  })

  function onSubmit(data: loginFormType) {
    showToast("تم تسجيل الدخول بنجاح", "success")
    console.log(data)
  }

  return (
    <Card className="w-full shadow-none border-none bg-transparent text-espresso">
      <CardHeader className="text-center w-full">
        <CardTitle className="text-4xl font-bold">تسجيل الدخول</CardTitle>
        <CardDescription className="text-lg text-dark-gray">
        أهلاً بك مجددًا! قم بإدخال بيانات حسابك للوصول إلى ملفك الشخصي ومتابعة نشاطك على الموقع.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field  data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-form-email" className="text-md">
                    البريد الإلكتروني
                  </FieldLabel>
                  <Input
                    {...field}
                    
                    id="login-form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="example@example.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-form-password" className="text-md">
                    كلمة المرور
                  </FieldLabel>
                    <Input
                      {...field}
                      type="password"
                      id="login-form-password"
                      placeholder="********"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button size={"lg"} type="submit" form="login-form" className="text-md w-full bg-coffee hover:bg-coffee/90">
            تسجيل الدخول
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}

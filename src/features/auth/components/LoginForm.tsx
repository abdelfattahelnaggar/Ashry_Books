import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginFormSchema, type loginFormType } from "../schemas/login.schema";
import { showToast } from "@/shared/utils/showToast";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../services/loginApi";
import type { LoginResponseInterface } from "../interfaces/login-response.interface";
import Loading from "@/shared/components/Loading";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  if (!authContext) {
    throw new Error("AuthContext not found");
  }
  const { login } = authContext;

  const form = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data: LoginResponseInterface) => {
      showToast("تم تسجيل الدخول بنجاح", "success");
      login(data);
      navigate("/admin/dashboard", { replace: true });
    },
    onError: (error: Error) => {
      showToast(error?.message || "حدث خطأ ما", "error");
    },
  });
  function onSubmit(data: loginFormType) {
    mutate(data);
  }

  if (isPending) {
    return <Loading />;
  }

  return (
    <Card className="w-full shadow-none border-none bg-transparent text-espresso">
      <CardHeader className="text-center w-full">
        <CardTitle className="text-4xl md:text-5xl font-bold">
          تسجيل الدخول
        </CardTitle>
        <CardDescription className="text-lg text-dark-gray ">
          أهلاً بك مرة تانية! دخل بياناتك عشان تقدر توصل للوحة التحكم.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
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
      <CardFooter className="flex flex-col gap-4">
        <Field orientation="horizontal">
          <Button
            size={"lg"}
            type="submit"
            form="login-form"
            className="text-md w-full bg-coffee hover:bg-coffee/90"
            disabled={isPending}
          >
            {isPending ? "جاري التسجيل..." : "تسجيل الدخول"}
          </Button>
        </Field>
        <Field className="text-center">
          <div className="flex items-center justify-center gap-1">
            <p className="text-lg font-semibold md:bg-transparent bg-coffee/20 px-3 py-1 rounded-full">
              عاوز تشوف المتجر؟
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="px-3 py-1 rounded-full bg-coffee/15 text-coffee hover:bg-coffee/20 hover:text-coffee/80 transition-colors text-base font-bold underline-offset-2"
              onClick={() => navigate("/", { replace: true })}
            >
              من هنا
            </Button>
          </div>
        </Field>
      </CardFooter>
    </Card>
  );
}

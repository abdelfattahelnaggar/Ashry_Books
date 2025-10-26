import { LoginForm } from "@/features/auth/components/LoginForm"
import loginImage from "@/assets/loginImage.webp"

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-svh p-1">
      {/* Card container */}
      <div className="relative w-full max-w-6xl overflow-hidden rounded-lg shadow-2xl md:flex md:h-[600px]">
         {/* Form side */}
         <div className="relative z-10 flex items-center justify-center p-8 md:w-1/2 md:bg-white min-h-[600px]">
          <LoginForm />
        </div>
        {/* Mobile: Background image */}
        <div className="absolute inset-0 md:hidden">
          <img 
            src={loginImage} 
            alt="" 
            className="h-full w-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-amber-50/60 to-coffee/80 backdrop-blur-xs" />
        </div>

        {/* Desktop: Image side */}
        <div className="hidden md:block md:w-1/2">
          <img 
            src={loginImage} 
            alt="login" 
            className="h-full w-full object-cover" 
          />
        </div>

       
      </div>
    </div>
  );
}

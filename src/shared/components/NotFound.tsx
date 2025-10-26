import {DotLottieReact } from "@lottiefiles/dotlottie-react"
import notFoundAnimation from "@/assets/animations/404error.lottie"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "lucide-react"
export default function NotFound() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center min-h-svh">
        <DotLottieReact src={notFoundAnimation} loop autoplay className="w-5/6 h-5/6 -mt-20" />
        <p className="text-gray-600 md:-mt-20 mb-3">الصفحة التي تبحث عنها غير موجودة.</p>
        <Button variant="outline"  size={"lg"} onClick={() => navigate("/")}>
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="text-base">ارجع للصفحة الرئيسية</span>
        </Button>
    </div>
  )
}

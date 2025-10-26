import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import loadingAnimation from '@/assets/animations/loader.lottie'

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
        <DotLottieReact src={loadingAnimation} loop autoplay />
    </div>
  )
}

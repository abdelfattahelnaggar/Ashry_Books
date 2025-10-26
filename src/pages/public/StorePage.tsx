import { Button } from '@/components/ui/button'
import {  ArrowRightIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
export default function StorePage() {
  const navigate = useNavigate()
  return (
    <div className='min-h-svh flex flex-col justify-center items-center'>
      <Button variant="outline" size={"lg"} onClick={() => navigate("/admin/login", { replace: true })}>
        <ArrowRightIcon className="w-4 h-4" />
        <span className="text-base">انتقل لصفحة الأدمن</span>
      </Button>
    </div>
	);
}
import { toast } from "sonner"

export const showToast = (message: string, type: "success" | "error" | "warning" | "info") => {
    toast[type](message)
}
import type { loginFormType } from "../schemas/login.schema"
import axios, { AxiosError } from "axios"
import type { LoginResponseInterface } from "../interfaces/login-response.interface"
export const loginApi = async (data: loginFormType): Promise<LoginResponseInterface> => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, data )
        return response.data
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data.message || "حدث خطأ ما")
        }
        throw new Error("حدث خطأ ما")
    }   
}
    
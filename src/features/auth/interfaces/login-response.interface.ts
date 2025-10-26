export interface LoginResponseInterface {
    message: string
    user: UserInterface
    token: string
  }
  
  export interface UserInterface {
    id: string
    email: string
    name: string
  }
  
export interface User {
  userName: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<User, "email" | "password">;

export interface UserRegister extends User {
  passwordConfirm: string;
}

export interface UserLogged {
  userName: string;
  isLogged: boolean;
}

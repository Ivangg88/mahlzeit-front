export interface User {
  userName: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<User, "email">;

export interface UserRegister extends User {
  passwordConfirm: string;
}

export interface UserLoged {
  userName: string;
  token: string;
}

export interface PasswordCheck {
  passWordMin: boolean;
  passWordCompare: boolean;
}

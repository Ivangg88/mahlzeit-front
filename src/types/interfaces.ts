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

export interface ProtoRecipte {
  name: string;
  persons: number;
  dificulty: string;
  autor: string;
  ingredients: string;
  process: string;
  image: File | string;
}

export interface Recipte extends ProtoRecipte {
  id: string;
  backupImage: string;
}

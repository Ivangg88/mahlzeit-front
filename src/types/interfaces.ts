export interface User {
  userName: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<User, "email">;

export interface UserRegister extends User {
  passwordConfirm: string;
  emailConfirm: string;
}

export interface UserLoged {
  userName: string;
  token: string;
  isLogged?: boolean;
  id: string;
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
  ingredients: Ingredient[];
  process: Process[];
  image: File | string;
  authorId: string;
}
export interface Recipte extends ProtoRecipte {
  id: string;
  backupImage: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

export interface Process {
  process: string;
  picture: string;
  backupPicture: string;
}

export interface TokenResponse {
  token: string;
}

export interface UiData {
  isLoading: boolean;
}

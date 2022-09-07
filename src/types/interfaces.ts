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

type Units = "ml" | "l" | "g" | "Kg" | "ud" | "uds";

export interface Ingredient {
  name: string;
  quantity: number;
  units: Units;
}

export interface Process {
  steps: string[];
}

export interface ProtoItem {
  name: string;
  persons: number;
  dificulty: "Fácil" | "Medio" | "Difícil";
  autor: string;
  ingredients: Ingredient[];
  process: Process;
  image: string;
}

export interface Item extends ProtoItem {
  id: string;
}

export interface User {
  userName: string;
  email: string;
  password: string;
}

export interface UserRegister extends User {
  passwordConfirm: string;
}

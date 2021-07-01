export interface FormLogin {
  username: string;
  password: string;
  remember: boolean;
}

export interface FormRegister {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
}

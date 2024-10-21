export interface User {
  email: string;
  password: string;
}
export interface AuthedUser extends User {
  username: string;
}

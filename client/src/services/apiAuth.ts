/** TODO:
 * * check if email and password exist in database
 * * if exists return username
 * * if error throw exception with "Wrong email or password bitch"
 */

import { AuthedUser, User } from "@/constants/types";

const defaultUser: AuthedUser = {
  email: "ak@ak.com",
  password: "12345678",
  username: "ak74",
};
export async function login({ email, password }: User): Promise<string> {
  if (email === defaultUser.email && password === defaultUser.password)
    return defaultUser.username;
  throw Error("Wrong email or password");
}

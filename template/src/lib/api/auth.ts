// import axios from "axios";
import { AuthCredentials } from "typings/auth";
// import { extractError } from "lib/utils/extractError";

export const AUTH_URL = "/api/users/authenticate";

/**
 * Fake authentication method
 * @param credentials
 * @returns
 */
const fakeAuthUser = (credentials: AuthCredentials): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!credentials.username?.length || !credentials.password.length)
        reject(Error("Provide username and password!"));
      resolve("Successfully authenticated");
    }, 500);
  });
};

const authenticate = async (credentials: AuthCredentials): Promise<string> => {
  return fakeAuthUser(credentials);
  // return axios
  //   .post(AUTH_URL, credentials)
  //   .then((response) => response?.data.jwt)
  //   .catch((error) => {
  //     const data =
  //       !!error.response && error.response.data ? error.response.data : {};
  //     const errorMessage = extractError(data) || "Authentication failed!";
  //     throw new Error(errorMessage);
  //   });
};

const recoverPassword = async (email: string): Promise<string> =>
  // TODO: replace with HTTP requests
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email?.length) reject();
      resolve("password");
    }, 500);
  });

export { authenticate, recoverPassword };

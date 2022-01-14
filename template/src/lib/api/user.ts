import axios from "axios";

/**
 * Get list of roles assigned to current user
 */
export const getUserRoles = (): Promise<string[]> => {
  const URL = "/api/users/roles";
  return axios.get(URL).then((response) => response?.data);
};

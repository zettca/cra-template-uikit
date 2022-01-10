import { useEffect, useState } from "react";
import { getUserRoles } from "lib/api/user";

const useUser = (isAuthed: boolean) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    const getRoles = async () => {
      const userRoles = await getUserRoles();
      const adminUser = userRoles.includes("ROLE_ADMIN");
      setRoles(userRoles);
      setIsAdmin(adminUser);
    };
    if (isAuthed) {
      getRoles();
    } else {
      setRoles([]);
      setIsAdmin(false);
    }
  }, [isAuthed]);

  return { isAdmin, roles };
};

export default useUser;

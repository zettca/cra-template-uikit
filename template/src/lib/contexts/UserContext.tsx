import React from "react";

interface UserContextType {
  isAdmin: boolean;
  roles: string[];
}

const intialContext: UserContextType = {
  isAdmin: false,
  roles: [],
};

const UserContext = React.createContext(intialContext);

export default UserContext;

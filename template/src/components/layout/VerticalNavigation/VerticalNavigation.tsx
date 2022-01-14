import React, { useContext } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { LogOut, User } from "@hv/uikit-react-icons";
import {
  HvVerticalNavigation,
  HvVerticalNavigationActions,
  HvVerticalNavigationAction,
} from "@hv/uikit-react-core";
import NavigationContext from "lib/contexts/NavigationContext";
import { AuthContext } from "lib/contexts/AuthContext";

const VerticalNavigation = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { isOpen, toggleOpen } = useContext(NavigationContext);
  const { logout } = useContext(AuthContext);

  if (!isOpen || isMdUp) return null;

  return (
    <HvVerticalNavigation
      isCollapsable={false}
      isOpen={isOpen}
      toggleOpenCallback={toggleOpen}
    >
      {!isMdUp && (
        <HvVerticalNavigationActions>
          <HvVerticalNavigationAction
            label="Profile"
            icon={<User />}
            onClick={() => {}}
          />
          <HvVerticalNavigationAction
            label="Logout"
            icon={<LogOut />}
            onClick={() => logout()}
          />
        </HvVerticalNavigationActions>
      )}
    </HvVerticalNavigation>
  );
};

export default VerticalNavigation;

import React, { useContext, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { LogOut, Menu, ThemeSwitcher } from "@hitachivantara/uikit-react-icons";
import {
  HvHeader,
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation,
  NavigationItemProp,
  HvButton,
} from "@hitachivantara/uikit-react-core";

import HitachiLogo from "assets/HitachiLogo";
import { ThemeContext } from "lib/context/ThemeContext";
import { NavigationContext } from "lib/context/NavigationContext";
import navigation from "lib/navigation";

const { REACT_APP_NAME } = process.env;

const Header: React.FC = () => {
  const history = useHistory();
  const theme = useTheme();

  const { toggleTheme } = useContext(ThemeContext);
  const { toggleVerticalOpen, activePath } = useContext(NavigationContext);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const handleChange = (
    event: MouseEvent,
    selection: NavigationItemProp
  ): void => {
    if (selection.path) history.push(selection.path);
  };

  return (
    <HvHeader>
      {!isMdUp && (
        <div>
          <HvButton category="ghost" icon onClick={toggleVerticalOpen}>
            <Menu />
          </HvButton>
        </div>
      )}

      <HvHeaderBrand
        logo={<HitachiLogo style={{ width: 72, height: 20 }} />}
        name={!isXs ? REACT_APP_NAME : undefined}
      />

      {isMdUp && (
        <HvHeaderNavigation
          data={navigation}
          selected={activePath?.id}
          onClick={handleChange}
        />
      )}

      {isMdUp && (
        <HvHeaderActions>
          <HvButton
            icon
            aria-label="Change theme"
            onClick={() => toggleTheme()}
          >
            <ThemeSwitcher />
          </HvButton>
          <HvButton icon onClick={() => {}} aria-label="Logout">
            <LogOut />
          </HvButton>
        </HvHeaderActions>
      )}
    </HvHeader>
  );
};

export default Header;

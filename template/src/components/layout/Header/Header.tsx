import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {
  HvHeader,
  HvHeaderBrand,
  HvHeaderActions,
  HvButton,
  HvTooltip,
  HvTypography,
} from "@hv/uikit-react-core";
import { LogOut, Menu, ThemeSwitcher } from "@hv/uikit-react-icons";
import history from "lib/utils/history";
import Logo from "assets/HitachiLogo";
import ThemeContext from "lib/contexts/ThemeContext";
import { AuthContext } from "lib/contexts/AuthContext";
import NavigationContext from "lib/contexts/NavigationContext";
import { HeaderProps } from "./index";

const Header: React.FC<HeaderProps> = ({ classes }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { isAuthed, logout } = useContext(AuthContext);

  const { toggleTheme } = useContext(ThemeContext);
  const { toggleOpen } = useContext(NavigationContext);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const handleLogoClick = () => {
    history.push("/");
  };

  return (
    <HvHeader>
      {!isMdUp && (
        <HvButton icon onClick={toggleOpen}>
          <Menu />
        </HvButton>
      )}

      <HvHeaderBrand
        logo={<Logo width={120} />}
        className={classes.brand}
        onClick={handleLogoClick}
        name={!isXs ? t("components.layout.header.appName") : undefined}
      />

      <HvHeaderActions>
        <HvTooltip
          title={<HvTypography>Change theme</HvTypography>}
          enterDelay={0}
        >
          <HvButton
            icon
            aria-label="Change theme"
            onClick={() => toggleTheme()}
          >
            <ThemeSwitcher />
          </HvButton>
        </HvTooltip>
        {isAuthed && isMdUp && (
          <HvTooltip title={<HvTypography>Logout</HvTypography>} enterDelay={0}>
            <HvButton icon onClick={() => logout()} aria-label="Logout">
              <LogOut />
            </HvButton>
          </HvTooltip>
        )}
      </HvHeaderActions>
    </HvHeader>
  );
};

export default Header;

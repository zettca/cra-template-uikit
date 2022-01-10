import React from "react";
import { HvTypography } from "@hv/uikit-react-core";
import { Link } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import withLayout from "lib/hocs/withLayout";
import { setTitle } from "lib/utils/setTitle";
import { HomeProps } from "./index";

const Home: React.FC<HomeProps> = ({ classes }) => {
  const { t } = useTranslation();

  setTitle(t("pages.home.title"));

  return (
    <>
      <HvTypography variant="xlTitle">{t("pages.home.title")}</HvTypography>
      <div className={classes.content}>
        <HvTypography variant="sTitle">
          Try adding more components from{" "}
          <Link href="https://lumada-design.github.io" target="_blank">
            https://lumada-design.github.io
          </Link>
        </HvTypography>
      </div>
    </>
  );
};

export default withLayout(Home, true);

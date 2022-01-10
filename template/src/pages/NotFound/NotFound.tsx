import React from "react";
import { HvGrid, HvTypography } from "@hv/uikit-react-core";
import { useTranslation } from "react-i18next";
import withLayout from "lib/hocs/withLayout";
import { setTitle } from "lib/utils/setTitle";
import { NotFoundProps } from "./index";

const NotFound: React.FC<NotFoundProps> = () => {
  const { t } = useTranslation();

  setTitle(
    `${t("pages.notFound.title")} - ${t("components.layout.header.appName")}`
  );

  return (
    <HvGrid container>
      <HvGrid item xl={12}>
        <HvTypography variant="3xlTitle">
          404 - {t("pages.notFound.title")}
        </HvTypography>
        <HvTypography variant="sTitle">
          The page you are looking for is not available!
        </HvTypography>
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(NotFound);

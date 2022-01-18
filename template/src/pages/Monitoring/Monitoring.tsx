import React from "react";
import { useTranslation } from "react-i18next";
import { HvGrid, HvTypography, HvGlobalActions } from "@hv/uikit-react-core";

import { Container } from "components/layout";

const Monitoring: React.FC = () => {
  const { t } = useTranslation("monitoring");

  return (
    <Container>
      <HvGrid container>
        <HvGrid item xs={12}>
          <HvTypography variant="mTitle">{t("page.title")}</HvTypography>
        </HvGrid>
      </HvGrid>
      <HvGrid container>
        <HvGrid item xs={12}>
          <HvGlobalActions title={t("section.title")} variant="section" />
        </HvGrid>
      </HvGrid>
    </Container>
  );
};

export default Monitoring;

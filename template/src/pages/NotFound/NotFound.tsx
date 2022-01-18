import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HvButton, HvEmptyState, HvGrid } from "@hv/uikit-react-core";
import { Info } from "@hv/uikit-react-icons";

import { Container } from "components/layout";

const NotFound: React.FC = () => {
  const { t } = useTranslation("common");
  const history = useHistory();

  return (
    <Container fullScreen>
      <HvGrid container justifyContent="center" alignItems="center">
        <HvGrid item xl={12}>
          <HvEmptyState
            style={{
              display: "flex",
              alignItems: "center",
              height: `calc(100vh - 44px)`,
            }}
            title={t("notFound.title")}
            message={t("notFound.message")}
            icon={<Info />}
            action={
              <HvButton category="ghost" onClick={() => history.goBack()}>
                {t("notFound.action")}
              </HvButton>
            }
          />
        </HvGrid>
      </HvGrid>
    </Container>
  );
};

export default NotFound;

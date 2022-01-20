import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  HvButton,
  HvEmptyState,
  HvGrid,
} from "@hitachivantara/uikit-react-core";
import { Info } from "@hitachivantara/uikit-react-icons";

import { Container } from "components/layout";
import useStyles from "./styles";

const NotFound: React.FC = () => {
  const { t } = useTranslation("common");
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container fullScreen>
      <HvGrid container justifyContent="center" alignItems="center">
        <HvGrid item xl={12}>
          <HvEmptyState
            className={classes.empty}
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

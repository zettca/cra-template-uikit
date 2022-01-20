import { makeStyles } from "@material-ui/core";

import { HEADER_HEIGHT } from "lib/utils/layout";

const styles = makeStyles(() => ({
  empty: {
    display: "flex",
    alignItems: "center",
    height: `calc(100vh - ${HEADER_HEIGHT}px - 40px)`,
  },
}));

export default styles;

import React from "react";
import clsx from "clsx";
import { HvContainer } from "@hv/uikit-react-core";
import { Header, Footer, VerticalNavigation } from "components/layout";
import NavigationContext from "lib/contexts/NavigationContext";
import useNavigation from "lib/hooks/useNavigation";
import useStyles from "./styles";
import { useLayoutMargins } from "./index";

const withLayout =
  <P extends {}>(
    Component: React.ComponentType<P>,
    hasFooter = true
  ): React.FC<P> =>
  (props) => {
    const { isOpen, toggleOpen } = useNavigation();
    const classes = useStyles();
    const margin = useLayoutMargins();

    return (
      <NavigationContext.Provider value={{ isOpen, toggleOpen }}>
        <Header />
        <div
          style={{ paddingTop: margin }}
          className={clsx(classes.section, {
            [classes.hasFooter]: hasFooter,
          })}
        >
          <VerticalNavigation />
          <HvContainer className={classes.container}>
            <Component {...props} />
          </HvContainer>
        </div>
        {hasFooter && <Footer />}
      </NavigationContext.Provider>
    );
  };

export default withLayout;

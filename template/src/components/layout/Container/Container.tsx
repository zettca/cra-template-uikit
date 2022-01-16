import React, { Suspense } from "react";
import clsx from "clsx";
import { HvContainer } from "@hv/uikit-react-core";

import Loading, { LoadingProps } from "components/layout/Loading";
import useStyles from "./styles";

interface ContainerProps {
  fullScreen?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  children: NonNullable<React.ReactNode>;
  className?: string;
  loadingProps?: LoadingProps;
}

const Container: React.FC<ContainerProps> = ({
  fullScreen = false,
  maxWidth = false,
  children,
  className,
  loadingProps,
}) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(className, classes.content, {
        [classes.fullHeight]: fullScreen,
      })}
    >
      <Suspense fallback={<Loading {...loadingProps} />}>
        <HvContainer
          maxWidth={maxWidth}
          className={classes.container}
          {...{ component: "main" }}
        >
          {children}
        </HvContainer>
      </Suspense>
    </div>
  );
};

export default Container;

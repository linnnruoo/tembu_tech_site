import React from "react";
import Grid from "@material-ui/core/Grid";

const GridItem = ({ ...props }) => {
  const { children, ...rest } = props;

  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
}

export default GridItem;

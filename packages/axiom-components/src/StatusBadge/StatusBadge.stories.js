import React from "react";
import StatusBadge from "./StatusBadge";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";

export default {
  title: "StatusBadge",
  component: StatusBadge,
};

export function Default() {
  return (
    <Grid gutters="tiny">
      <GridCell none>
        <StatusBadge status="alpha" />
      </GridCell>
      <GridCell none>
        <StatusBadge status="beta" />
      </GridCell>
      <GridCell none>
        <StatusBadge status="internal" />
      </GridCell>
      <GridCell none>
        <StatusBadge status="new" />
      </GridCell>
      <GridCell none>
        <StatusBadge status="prototype" />
      </GridCell>
    </Grid>
  );
}

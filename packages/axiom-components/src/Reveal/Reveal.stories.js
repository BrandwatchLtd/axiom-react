import React, { useState } from "react";
import Reveal from "./Reveal";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";

export default {
  title: "Components/Reveal",
  component: Reveal,
};

export function Default() {
  const [visible, setVisible] = useState(false);

  return (
    <Grid>
      <GridCell shrink>
        <Button onClick={() => setVisible((a) => !a)} size="small">
          Toggle Reveal
        </Button>
      </GridCell>
      <GridCell>
        <Reveal visible={visible}>Default Reveal</Reveal>
      </GridCell>
    </Grid>
  );
}

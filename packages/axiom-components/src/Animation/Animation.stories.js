import React, { useState } from "react";
import Animation from "./Animation";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";

export default {
  title: "Animation",
  component: Animation,
};

export function Default({ name, timingFunction, children }) {
  const [animated, setAnimated] = useState(false);

  return (
    <Grid>
      <GridCell>
        <Button onClick={() => setAnimated((a) => !a)} size="small">
          Toggle Animation
        </Button>
      </GridCell>
      <GridCell>
        <Animation
          toggled={animated}
          name={name}
          timingFunction={timingFunction}
        >
          {children}
        </Animation>
      </GridCell>
    </Grid>
  );
}

Default.args = { children: "Animated text" };

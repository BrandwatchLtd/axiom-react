import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";

import "./Lozenge.css";

export default function LozengeGroup({ children }) {
  return (
    <Grid gutters="tiny" responsive={false} none>
      {children.map((child, index) => (
        <GridCell key={`${index}`}>{child}</GridCell>
      ))}
    </Grid>
  );
}

LozengeGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

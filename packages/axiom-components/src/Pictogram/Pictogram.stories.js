import React from "react";
import Pictogram from "./Pictogram";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";

export default {
  title: "Pictogram",
  component: Pictogram,
};

const pictogramNames = [
  "3d-globe",
  "annotation",
  "bar-chart",
  "bar-percent-chart",
  "choropleth-map",
  "circle-pack",
  "column-chart",
  "date-&-time",
  "featured-content",
  "female",
  "file-upload",
  "frequency-heatmap",
  "individual",
  "key-stat",
  "male",
  "networks",
  "organisation",
  "pie-chart",
  "polar-chart",
  "spline-chart",
  "stream-graph",
  "table",
  "topics-wheel",
  "tree-map",
  "twitter-verified",
  "video",
  "weather",
  "web-url",
  "word-cloud",
];
export function Default() {
  return (
    <Grid>
      {pictogramNames.map((name) => (
        <GridCell key={name} width={25}>
          <Grid
            gutters="tiny"
            none
            textCenter
            textLeft="small"
            verticalAlign="middle"
          >
            <GridCell>
              <Pictogram name={name} />
            </GridCell>

            <GridCell>{name}</GridCell>
          </Grid>
        </GridCell>
      ))}
    </Grid>
  );
}

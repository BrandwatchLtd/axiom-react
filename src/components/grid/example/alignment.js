import React from 'react';
import Grid from '../Grid';
import GridCell from '../GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';

export const gridVertical = Grid.__ax_propTypes.vAlign.oneOf.map((vAlign, index) =>
  <Grid className="dm-demo-container" key={ index } vAlign={ vAlign }>
    <GridCell snippetReplace={ true }>
      <DemoBox>{ vAlign }</DemoBox>
    </GridCell>

    <GridCell snippetReplace={ true }>
      <DemoBox>{ vAlign }</DemoBox>
    </GridCell>
  </Grid>
);

export const gridCellVertical = (
  <Grid className="dm-demo-container" snippetIgnore={ true }>
    { GridCell.__ax_propTypes.vAlign.oneOf.map((vAlign, index) =>
      <GridCell key={ index } vAlign={ vAlign }>
        <DemoBox snippetReplace={ true }>{ vAlign }</DemoBox>
      </GridCell>
    ) }
  </Grid>
);

export const gridCellHorizontal = Grid.__ax_propTypes.hAlign.oneOf.map((hAlign, index) =>
  <Grid hAlign={ hAlign } key={ index }>
    <GridCell shrink={ true } snippetReplace={ true }>
      <DemoBox>{ hAlign }</DemoBox>
    </GridCell>

    <GridCell shrink={ true } snippetReplace={ true }>
      <DemoBox>{ hAlign }</DemoBox>
    </GridCell>

    <GridCell shrink={ true } snippetReplace={ true }>
      <DemoBox>{ hAlign }</DemoBox>
    </GridCell>
  </Grid>
);

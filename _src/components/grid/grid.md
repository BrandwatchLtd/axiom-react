```imports
import { breakpoints } from '../../design-patterns/layout/_vars';
import { gridGutters, gridWidths } from './_vars';
import Grid from './Grid';
import GridCell from './GridCell';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
```


# Basic Grid

```jsx
<Grid>
  <GridCell>
    <DemoBox snippetReplace>Fit / Full</DemoBox>
  </GridCell>

  <GridCell>
    <DemoBox snippetReplace>Fit / Full</DemoBox>
  </GridCell>
</Grid>
```


# Gutter modifiers

##### No vertical gutters
```jsx
<Grid vGutters={ false }>
  <GridCell snippetReplace>
    <DemoBox>Fit / Full</DemoBox>
  </GridCell>

  <GridCell snippetReplace>
    <DemoBox>Fit / Full</DemoBox>
  </GridCell>
</Grid>
```

##### No horizontal gutters
```jsx
<Grid hGutters={ false }>
  <GridCell snippetReplace>
    <DemoBox>Fit / Full</DemoBox>
  </GridCell>

  <GridCell snippetReplace>
    <DemoBox>Fit / Full</DemoBox>
  </GridCell>
</Grid>
```

##### No vertical or horizontal gutters
```jsx
<Grid gutters={ false }>
  <GridCell snippetReplace>
    <DemoBox>Fit / Full</DemoBox>
  </GridCell>

  <GridCell snippetReplace>
    <DemoBox>Fit / Full</DemoBox>
  </GridCell>
</Grid>
```


# Gutter sizing modifiers

```jsx
gridGutters.map(({ id }) =>
  <Grid gutters={ id }>
    <GridCell snippetReplace>
      <DemoBox>Gutters size { id }</DemoBox>
    </GridCell>

    <GridCell snippetReplace>
      <DemoBox>Gutters size { id }</DemoBox>
    </GridCell>
  </Grid>
)
```


# Responsive suppressor

```jsx
<Grid responsive={ false }>
  <GridCell snippetReplace>
    <DemoBox>Always fits</DemoBox>
  </GridCell>

  <GridCell snippetReplace>
    <DemoBox>Always fits</DemoBox>
  </GridCell>
</Grid>
```


# Flex sizing (grid level)

##### Full width
```jsx
<Grid full={ true }>
  <GridCell snippetReplace>
    <DemoBox>Full</DemoBox>
  </GridCell>

  <GridCell snippetReplace>
    <DemoBox>Full</DemoBox>
  </GridCell>
</Grid>
```

##### Fit (equal widths)
```jsx
<Grid fit={ true }>
  <GridCell snippetReplace>
    <DemoBox>Fit</DemoBox>
  </GridCell>

  <GridCell snippetReplace>
    <DemoBox>Fit</DemoBox>
  </GridCell>
</Grid>
```


# Responsive flex sizing (grid level)

##### Full width
```jsx
breakpoints.map(({ id }) =>
  <Grid full={ id }>
    <GridCell snippetReplace>
      <DemoBox>Full (> { id })</DemoBox>
    </GridCell>

    <GridCell snippetReplace>
      <DemoBox>Full (> { id })</DemoBox>
    </GridCell>
  </Grid>
)
```

##### Fit (equal widths)
```jsx
breakpoints.map(({ id }) =>
  <Grid full={ true } fit={ id }>
    <GridCell snippetReplace>
      <DemoBox>Fit (> { id })</DemoBox>
    </GridCell>

    <GridCell snippetReplace>
      <DemoBox>Fit (> { id })</DemoBox>
    </GridCell>
  </Grid>
)
```


# Flex sizing (cell level)

##### Full width
```jsx
<Grid snippetIgnore>
  <GridCell full={ true }>
    <DemoBox snippetReplace>Full width</DemoBox>
  </GridCell>

  <GridCell snippetReplace>
    <DemoBox>Auto</DemoBox>
  </GridCell>
</Grid>
```

##### Shrink (to contents)
```jsx
<Grid snippetIgnore>
  <GridCell shrink={ true }>
    <DemoBox snippetReplace>Shrink</DemoBox>
  </GridCell>

  <GridCell snippetReplace>
    <DemoBox>Auto</DemoBox>
  </GridCell>
</Grid>
```


# Responsive flex sizing (cell level)

##### Full width
```jsx
<Grid snippetIgnore>
  {
    breakpoints.map(({ id }) =>
      <GridCell full={ id }>
        <DemoBox snippetReplace>Full (> { id })</DemoBox>
      </GridCell>
    )
  }
</Grid>
```

##### Shrink (to contents)
```jsx
<Grid snippetIgnore>
  {
    breakpoints.map(({ id }) =>
      <GridCell shrink={ id }>
        <DemoBox snippetReplace>Shrink (> { id })</DemoBox>
      </GridCell>
    )
  }
</Grid>
```


# Standard base 12 cell sizing

```jsx
gridWidths.map(({ id }) =>
  <Grid snippetIgnore>
    <GridCell { ...{ [id]: true } }>
      <DemoBox snippetReplace>{ id }</DemoBox>
    </GridCell>

    <GridCell snippetReplace>
      <DemoBox>Auto</DemoBox>
    </GridCell>
  </Grid>
)
```


# Responsive 12 base cell sizing
```jsx
gridWidths.map(({ id: gridWidthId }) =>
  breakpoints.map(({ id: breakpointId }) =>
    <Grid snippetIgnore>
      <GridCell { ...{ [gridWidthId]: breakpointId } }>
        <DemoBox snippetReplace>
          { gridWidthId } (> { breakpointId })
        </DemoBox>
      </GridCell>

      <GridCell snippetReplace>
        <DemoBox>Auto</DemoBox>
      </GridCell>
    </Grid>
  )
)
```


# Vertical cell alignment modifiers (Grid level)
```jsx
Grid.__ax_propTypes.vAlign.oneOf.map((vAlign) =>
  <Grid className="dm-demo-container" vAlign={ vAlign }>
    <GridCell snippetReplace>
      <DemoBox>{ vAlign }</DemoBox>
    </GridCell>

    <GridCell snippetReplace>
      <DemoBox>{ vAlign }</DemoBox>
    </GridCell>
  </Grid>
)
```


# Vertical cell alignment modifiers (Cell level)
```jsx
<Grid className="dm-demo-container" snippetIgnore>
  {
    GridCell.__ax_propTypes.vAlign.oneOf.map((vAlign) =>
      <GridCell vAlign={ vAlign }>
        <DemoBox snippetReplace>{ vAlign }</DemoBox>
      </GridCell>
    )
  }
</Grid>
```


# Horizontal cell alignment modifiers
```jsx
Grid.__ax_propTypes.hAlign.oneOf.map((hAlign) =>
  <Grid hAlign={ hAlign }>
    <GridCell shrink={ true } snippetReplace>
      <DemoBox>{ hAlign }</DemoBox>
    </GridCell>

    <GridCell shrink={ true } snippetReplace>
      <DemoBox>{ hAlign }</DemoBox>
    </GridCell>

    <GridCell shrink={ true } snippetReplace>
      <DemoBox>{ hAlign }</DemoBox>
    </GridCell>
  </Grid>
)
```

```imports
import { Grid, GridCell } from 'bw-axiom/react';
import { colorPalette } from 'bw-axiom/sass';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';
```

# Color Palette

```jsx
colorPalette.map((colors, index) =>
  <Grid key={ index } snippetSkip>
    {
      colors.map(({ name, color }, index) =>
        <GridCell key={ index }>
          <ColorSwatch name={ name } color={ color } />
        </GridCell>
      )
    }
  </Grid>
)
```

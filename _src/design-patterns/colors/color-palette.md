```imports
import Grid from '../../components/grid/Grid';
import GridCell from '../../components/grid/GridCell';
import { colorPalette } from '../colors/_vars';
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

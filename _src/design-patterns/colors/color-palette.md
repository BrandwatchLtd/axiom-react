```imports
import Grid from '../../components/grid/Grid';
import GridCell from '../../components/grid/GridCell';
import { colorPalette } from '../colors/_vars';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';
```

# Color Palette

```jsx
colorPalette.map((colors) =>
  <Grid snippetSkip>
    {
      colors.map(({ name, color }) =>
        <GridCell>
          <ColorSwatch name={ name } color={ color } />
        </GridCell>
      )
    }
  </Grid>
)
```

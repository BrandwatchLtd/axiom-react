```imports
import Grid from '../../components/grid/Grid';
import GridCell from '../../components/grid/GridCell';
import Heading from '../../components/typography/Heading';
import { colorAliases } from '../colors/_vars';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';
```

# UI Colors

```jsx
colorAliases.map(({ heading, colors }) =>[
  <Heading level={ 5 } snippetSkip>{ heading }</Heading>,
  colors.map((group) =>
    <Grid snippetSkip>
      {
        group.map(({ name, color }) =>
          <GridCell>
            <ColorSwatch name={ name } color={ color } />
          </GridCell>
        ) 
      }
    </Grid>
  )
])
```

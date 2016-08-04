```imports
import { Grid, GridCell } from 'bw-axiom/react';
import { Heading } from 'bw-axiom/react';
import { colorAliases } from 'bw-axiom/sass';
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

```imports
import { Grid, GridCell } from 'bw-axiom/react';
import { LogoVertical, LogoHorizontal } from 'bw-axiom/react';
```

# Vertical logos
```jsx
<Grid snippetIgnore>
  {
    LogoVertical.__ax_propTypes.size.oneOf.map((size, index) =>
      <GridCell snippetIgnore shrink={ true } key={ index }>
        <LogoVertical size={ size } />
      </GridCell>
    )
  }
</Grid>
```

# Horizontal logos
```jsx
LogoHorizontal.__ax_propTypes.size.oneOf.map((size) =>
  <LogoHorizontal size={ size } />
)
```

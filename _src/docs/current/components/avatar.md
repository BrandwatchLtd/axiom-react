```imports
import { Avatar } from 'bw-axiom/react';
import { Grid, GridCell } from 'bw-axiom/react';
```


# Sized Avatars

```jsx
<Grid vAlign="bottom" snippetIgnore>
  {
    Avatar.__ax_propTypes.size.oneOf.map((size, index) =>
      <GridCell shrink={ true } key={ index } snippetIgnore>
        <Avatar src="/assets/avatar.png" size={ size } />
      </GridCell>
    )
  }
</Grid>
```

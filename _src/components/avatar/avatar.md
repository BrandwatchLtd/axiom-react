```imports
import Avatar from './Avatar';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
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

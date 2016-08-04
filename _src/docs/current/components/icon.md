```imports
import { Grid, GridCell } from 'bw-axiom/react';
import { Icon } from 'bw-axiom/react';
```


# Icon - ${queryParams.iconId}

```jsx
<Icon name={ queryParams.iconId } size="5x" />
```


# Icon sizes

```jsx
<Grid snippetIgnore vAlign="middle">
  {
    Icon.__ax_propTypes.size.oneOf.map((size) =>
      <GridCell snippetIgnore shrink={ true }>
        <Icon name={ queryParams.iconId } size={ size } /> 
      </GridCell>
    )
  }
</Grid>
```

```imports
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
import Icon from './Icon';
```

# Icon - ${queryParams.iconId}

```jsx
<Icon name={ queryParams.iconId } size="xxxlarge" />
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

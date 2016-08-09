```imports
import Grid from '../../components/grid/Grid';
import GridCell from '../../components/grid/GridCell';
import LogoVertical from '../../components/logo/LogoVertical';
import LogoHorizontal from '../../components/logo/LogoHorizontal';
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

```imports
import { Heading } from 'bw-axiom/react';
import { StatusIndicator } from 'bw-axiom/react';
import { colorPalette, colorAliases } from 'bw-axiom/sass';
```


# Colored Status Indicators

##### Palette Colors

```jsx
colorPalette.map((colors) =>
  colors.map(({ name }) =>
    <StatusIndicator color={ name }>{ name }</StatusIndicator>
  )
)
```

##### UI Colors

```jsx
colorAliases.map(({ heading, colors }) => [
  <Heading level={ 5 } snippetIgnore>{ heading }</Heading>,
  colors.map((group) => 
    group.map(({ name }) => 
      <StatusIndicator color={ name }>{ name }</StatusIndicator>
    )
  )
])
```

##### Scheme Primary

```jsx
<StatusIndicator color="primary">Primary</StatusIndicator>
```


# Sizes

```jsx
StatusIndicator.__ax_propTypes.size.oneOf.map((size) =>
  <StatusIndicator size={ size }>
    Status Indicator ({ size.toUpperCase() })
  </StatusIndicator>
)
```

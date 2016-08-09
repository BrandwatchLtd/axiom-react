```imports
import { colorPalette, colorAliases } from '../../design-patterns/colors/_vars';
import Label from './Label';
import LabelGroup from './LabelGroup';
import Heading from '../typography/Heading';
import Icon from '../icon/Icon';
```


# Colored Labels

##### Palette Colors

```jsx
<LabelGroup snippetIgnore>
  {
    colorPalette.map((colors) =>
      colors.map(({ name }) =>
        <Label color={ name }>{ name }</Label>
      )
    )
  }
</LabelGroup>
```

##### UI Colors

```jsx
colorAliases.map(({ heading, colors }) => [
  <Heading level={ 5 } snippetIgnore>{ heading }</Heading>,
  <LabelGroup snippetIgnore>
    {
      colors.map((group) => 
        group.map(({ name }) => 
          <Label color={ name }>{ name }</Label>
        )
      )
    }
  </LabelGroup>
])
```

##### Scheme Primary

```jsx
<LabelGroup snippetIgnore>
  <Label color="primary">Scheme primary</Label>
</LabelGroup>
```


# Label with an Icon
```jsx
<LabelGroup snippetIgnore>
  <Label size="sm" color="red">
    Small
    <Icon name="trash" />
  </Label>

  <Label size="md" color="yellow">
    Regular
    <Icon name="warning" />
  </Label>

  <Label size="lg" color="green">
    Large
    <Icon name="check" />
  </Label>
</LabelGroup>
```


# Label Group

Label Group handles spacing labels that may overflow to a new line. All labels should be wrapped inside a label group.

```jsx
<LabelGroup>
  <Label>A label</Label>
  <Label>A label</Label>
  <Label>A label</Label>
</LabelGroup>
```

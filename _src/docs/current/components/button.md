```imports
import { colorPalette, colorAliases } from 'bw-axiom/sass';
import { Button, ButtonGroup } from 'bw-axiom/react';
import { Heading } from 'bw-axiom/react';
import { Icon } from 'bw-axiom/react';
```


# Colored Buttons

##### Palette Colors

```jsx
<ButtonGroup snippetIgnore>
  {
    colorPalette.map((colors) =>
      colors.map(({ name }) =>
        <Button color={ name }>{ name }</Button>
      )
    )
  }
</ButtonGroup>
```

##### UI Colors

```jsx
colorAliases.map(({ heading, colors }) => [
  <Heading level={ 5 } snippetIgnore>{ heading }</Heading>,
  <ButtonGroup snippetIgnore>
    {
      colors.map((group) => 
        group.map(({ name }) => 
          <Button color={ name }>{ name }</Button>
        )
      )
    }
  </ButtonGroup>
])
```

##### Scheme Primary

```jsx
<ButtonGroup snippetIgnore>
  <Button color="primary">Scheme primary</Button>
</ButtonGroup>
```


# Outlined

```jsx
<ButtonGroup snippetIgnore>
  {
    colorPalette.map((colors) =>
      colors.map(({ name }) =>
        <Button color={ name } outlined={ true }>{ name }</Button>
      )
    )
  }
</ButtonGroup>
```


# Sizes

```jsx
<ButtonGroup snippetIgnore>
  {
    Button.__ax_propTypes.size.oneOf.map((size) =>
      <Button size={ size }>Button ({ size.toUpperCase() })</Button>
    )
  }
</ButtonGroup>
```


# Circular 
```jsx
<ButtonGroup snippetIgnore>
  {
    Button.__ax_propTypes.size.oneOf.map((size) =>
      <Button size={ size } circular={ true }>
        <Icon name="bolt" snippetReplace />
      </Button>
    )
  }
  {
    Button.__ax_propTypes.size.oneOf.map((size) =>
      <Button size={ size } circular={ true } outlined={ true }>
        <Icon name="bolt" snippetReplace />
      </Button>
    )
  }
</ButtonGroup>
```


# Full width
```jsx
<ButtonGroup snippetIgnore>
  {
    Button.__ax_propTypes.full.oneOf.map((at) =>
      <Button full={ at }>
        { at === true ? 'Always full width' : `Full width at ${at}` }
      </Button>
    )
  }
</ButtonGroup>
```


# Button with an Icon
```jsx
<ButtonGroup snippetIgnore>
  <Button size="sm" color="red">
    Small
    <Icon name="trash" />
  </Button>

  <Button size="md" color="yellow">
    Regular
    <Icon name="warning" />
  </Button>

  <Button size="lg" color="green">
    Large
    <Icon name="check" />
  </Button>
</ButtonGroup>
```


# Button Group

Button Group handles spacing buttons that may overflow to a new line. All buttons should be wrapped inside a button group.

```jsx
<ButtonGroup>
  <Button>A button</Button>
  <Button>A button</Button>
  <Button>A button</Button>
</ButtonGroup>
```


# Button Group joined

```jsx
<ButtonGroup joined={ true }>
  <Button size="lg" color="lime" snippetReplace>
    <Icon name="pencil" />
  </Button>
  <Button size="lg" color="light-green" snippetReplace>
    A button
  </Button>
  <Button size="lg" color="green" snippetReplace>
    <Icon name="floppy-o" />
  </Button>
</ButtonGroup>
```

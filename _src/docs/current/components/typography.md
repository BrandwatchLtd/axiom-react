```imports
import { breakpointIds, colorPalette, colorAliases } from 'bw-axiom/sass';
import {
  Heading,
  Italic,
  Link,
  List,
  ListItem,
  Paragraph,
  Small,
  Strike,
  Strong,
  Underline,
  Weak,
} from 'bw-axiom/react';
```


# Sizing

```jsx
[
  Heading.__ax_propTypes.level.oneOf.map((level) =>
    <Heading level={ level }>h{ level }. Lorem ipsum...</Heading>
  ),
  <Paragraph>p. Lorem ipsum...</Paragraph>,
  <Paragraph>
    <Small>small. Lorem ipsum...</Small>
  </Paragraph>
]
```


# Weights

##### Strong

```jsx
[
  Heading.__ax_propTypes.level.oneOf.map((level) =>
    <Heading level={ level }>
      <Strong>h{ level }. Lorem ipsum...</Strong>
    </Heading>
  ),
  <Paragraph>
    <Strong>p. Lorem ipsum...</Strong>
  </Paragraph>,
  <Paragraph>
    <Small>
      <Strong>small. Lorem ipsum...</Strong>
    </Small>
  </Paragraph>
]
```

##### Weak

```jsx
[
  Heading.__ax_propTypes.level.oneOf.map((level) =>
    <Heading level={ level }>
      <Weak>h{ level }. Lorem ipsum...</Weak>
    </Heading>
  ),
  <Paragraph><Weak>p. Lorem ipsum...</Weak></Paragraph>,
  <Paragraph>
    <Small><Weak>small. Lorem ipsum...</Weak></Small>
  </Paragraph>
]
```


# Decoration modifiers
```jsx
[
  <Paragraph><Italic>This text is italicised</Italic></Paragraph>,
  <Paragraph><Underline>This text is underlined</Underline></Paragraph>,
  <Paragraph><Strike>This text is strike through</Strike></Paragraph>,
]
```


# Alignment modifiers
```jsx
[
  <Paragraph textLeft={ true }>This text is left aligned</Paragraph>,
  <Paragraph textCenter={ true }>This text is center aligned</Paragraph>,
  <Paragraph textRight={ true }>This text is right aligned</Paragraph>,
]
```

# Alignment modifiers (Responsive)

##### Text left
```jsx
breakpointIds.map((id) =>
  <Paragraph textLeft={ id } textRight={ true }>
    This text is left aligned at { id.toUpperCase() }
  </Paragraph>
)
```

##### Text center
```jsx
breakpointIds.map((id) =>
  <Paragraph textCenter={ id }>
    This text is center aligned at { id.toUpperCase() }
  </Paragraph>
)
```

##### Text right
```jsx
breakpointIds.map((id) =>
  <Paragraph textRight={ id }>
    This text is right aligned at { id.toUpperCase() }
  </Paragraph>
)
```


# Case modifiers
```jsx
[
  <Paragraph textCase="upper">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ut felis vitae hendrerit.
  </Paragraph>,
  <Paragraph textCase="capital">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ut felis vitae hendrerit.
  </Paragraph>,
  <Paragraph textCase="lower">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ut felis vitae hendrerit.
  </Paragraph>,
]
```


# Colored text

##### Palette Colors

```jsx
colorPalette.map((colors) =>
  colors.map(({ name }) =>
    <Paragraph textColor={ name }>{ name }</Paragraph>
  )
)
```

##### UI Colors

```jsx
colorAliases.map(({ heading, colors }) => [
  <Heading level={ 5 } snippetIgnore>{ heading }</Heading>,
  colors.map((group) => 
    group.map(({ name }) => 
      <Paragraph textColor={ name }>{ name }</Paragraph>
    )
  )
])
```

##### Scheme primary
```jsx
  <Paragraph textColor="primary">Primary</Paragraph>
```


# Links
```jsx
[
  <Heading level={ 3 } snippetIgnore>
    Lorem ipsum dolor sit amet, <Link>consectetur</Link> adipiscing elit. Donec tempus ut felis vitae hendrerit.
  </Heading>,
  <Paragraph snippetIgnore>
    Lorem ipsum dolor sit amet, <Link snippetIgnore>consectetur</Link> adipiscing elit. Donec tempus ut felis vitae hendrerit.
  </Paragraph>,
]
```


# Lists

##### Ordered List
```jsx
<List ordered={ true }>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</List>
```

##### Unordered List
```jsx
<List ordered={ false }>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</List>
```


##### Unordered List
```jsx
<List inline={ true }>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</List>
```

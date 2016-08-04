```imports
import { Button } from 'bw-axiom/react';
import { Grid, GridCell } from 'bw-axiom/react';
import { Icon } from 'bw-axiom/react';
import { Form, CheckBox, RadioButton, TextArea, TextInput } from 'bw-axiom/react';
import { Heading } from 'bw-axiom/react';
```


# Text Inputs

```jsx
<Grid snippetIgnore>
  <GridCell snippetIgnore>
    <Heading level={ 5 } snippetIgnore>Standard</Heading>
    <TextInput placeholder="Standard input..." />
  </GridCell>

  <GridCell snippetIgnore>
    <Heading level={ 5 } snippetIgnore>Disabled</Heading>
    <TextInput placeholder="Disabled input..." disabled={ true } />
  </GridCell>
</Grid>
```

##### Validation
```jsx
<Grid snippetIgnore>
  <GridCell snippetIgnore>
  <Heading level={ 5 } snippetIgnore>Valid</Heading>
    <TextInput placeholder="Valid input..." valid={ true } />
  </GridCell>

  <GridCell snippetIgnore>
    <Heading level={ 5 } snippetIgnore>Invalid</Heading>
    <TextInput placeholder="Invalid input..." invalid={ true } />
  </GridCell>
</Grid>
```


# Text inputs with additional Components

##### Text input win an Icon
```jsx
<TextInput placeholder="Icon input...">
  <Icon name="calendar" />
</TextInput>
```

##### Text input with a Button
```jsx
<TextInput placeholder="Button input...">
  <Button>Submit</Button>
</TextInput>
```

##### Text input with a Button and an Icon
```jsx
<TextInput placeholder="Icon and Button input...">
  <Icon name="calendar" />
  <Button>Submit</Button>
</TextInput>
```


# Text area
```jsx
<TextArea placeholder="Text area" />
```


# Check boxes
```jsx
[
  <CheckBox>Unchecked check box</CheckBox>,
  <CheckBox defaultChecked={ true }>Checked check box</CheckBox>,
  <CheckBox disabled={ true }>Disabled check box</CheckBox>,
]
```


# Radio Buttons
```jsx
[
  <RadioButton>Unchecked radio button</RadioButton>,
  <RadioButton defaultChecked={ true }>Checked radio button</RadioButton>,
  <RadioButton disabled={ true }>Disabled radio button</RadioButton>,
]
```

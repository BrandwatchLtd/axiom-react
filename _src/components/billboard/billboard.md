```imports
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
import { billboardSizes } from '../billboard/_vars';
import Billboard from '../billboard/Billboard';
```


# Billboard with colour

Takes one of the palette or context colour ids as well as a variation [optional].

```jsx
<Billboard color="grey" variation="900">
  I am a billboard.
</Billboard>
```


# Billboard with an image

```jsx
<Billboard image="/assets/axiom-bg.jpg" color="grey" variation="900">
  I am a billboard with an image!
</Billboard>
```


# Billboard with an overlay

```jsx
<Billboard overlay={ true } image="/assets/axiom-bg.jpg" color="grey" variation="900">
  I am a billboard with an overlay!
</Billboard>
```


# Billboard sizes

```jsx
billboardSizes.map(({ id }, index) =>
  <Billboard size={ id } overlay={ true } image="/assets/axiom-bg.jpg" color="grey" variation="900" key={ index }>
    I am a { id } billboard!
  </Billboard>
)
```

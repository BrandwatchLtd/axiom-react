```imports
import Dialog from './Dialog';
import DialogBody from './DialogBody';
import DialogFooter from './DialogFooter';
import DialogTitle from './DialogTitle';
import DialogSizes from './_docs/DialogSizes';
import DialogFullscreen from './_docs/DialogFullscreen';
```


# Dialog

The Dialog component is an interface to the [react-modal](https://github.com/reactjs/react-modal) component. All properties you pass to Dialog will forward to the modal component.

```jsx
<Dialog renderSkip>
  <DialogTitle onRequestClose={ Function }>...</DialogTitle>
  <DialogBody>...</DialogBody>
  <DialogFooter>...</DialogFooter>
</Dialog>
```


# Dialog sizes

```jsx
<DialogSizes snippetSkip />
```

```jsx
Dialog.__ax_propTypes.size.oneOf.map((size) => 
  <Dialog renderSkip size={ size }>...</Dialog>
)
```


# Full screen dialog

```jsx
<DialogFullscreen snippetSkip />
```

```jsx
<Dialog renderSkip fullScreen={ true }>...</Dialog>
```

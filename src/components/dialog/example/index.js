import Dialog from '../Dialog';
import DialogBody from '../DialogBody';
import DialogFooter from '../DialogFooter';
import DialogTitle from '../DialogTitle';

import { default as dialog } from './dialog';
import { default as sizes } from './sizes';
import { default as fullscreen } from './fullscreen';

export const title = 'Dialog';
export const id ='dialog';
export const location = 'bw-axiom/components/dialog';
export const components = [ Dialog, DialogBody, DialogFooter, DialogTitle ];

export const examples = [{
  name: 'Dialog',
  description: 'The Dialog component is an interface to the [react-modal](https://github.com/reactjs/react-modal) component. All properties you pass to Dialog will forward to the modal component.',
  snippet: dialog,
}, {
  name: 'Dialog sizes',
  snippet: sizes,
}, {
  name: 'Full screen dialog',
  snippet: fullscreen,
}];

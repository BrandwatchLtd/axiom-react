import React from 'react';
import Dialog from '../Dialog';
import DialogFullscreen from './DialogFullscreen';

export default [
  <DialogFullscreen snippetSkip={ true } />,
  <Dialog fullScreen={ true } renderSkip={ true }>...</Dialog>,
];

import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => (
  <div
      className="ax-theme--day"
      style={ {
        backgroundColor: 'var(--color-theme-background)',
        color: 'var(--color-theme-text)',
      } }>
    { storyFn() }
  </div>
));

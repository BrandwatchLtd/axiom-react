import React from 'react';
import Icon from '../../icon/Icon';
import Button from '../../button/Button';
import TextInput from '../TextInput';

export const base = (
  <TextInput placeholder="Button input...">
    <Button>Submit</Button>
  </TextInput>
);

export const icon = (
  <TextInput placeholder="Icon input...">
    <Icon name="calendar" />
  </TextInput>
);

export const buttonAndIcon = (
  <TextInput placeholder="Icon and Button input...">
    <Icon name="calendar" />
    <Button>Submit</Button>
  </TextInput>
);

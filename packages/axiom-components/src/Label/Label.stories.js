import React from 'react';
import Label from './Label';
import LabelGroup from './LabelGroup';
import LabelIcon from './LabelIcon';

export default {
  title: 'Components/Label',
  component: Label,
  subcomponents: { LabelIcon, LabelGroup },
};

export function Default() {
  return <Label>A Label</Label>;
}

export function Color() {
  return (
    <LabelGroup>
      <Label>White</Label>
      <Label color="success">Success</Label>
      <Label color="error">Error</Label>
    </LabelGroup>
  );
}

export function Size() {
  return (
    <LabelGroup>
      <Label color="success" size="small">
        <LabelIcon name="tick" /> Small
      </Label>
      <Label color="success">
        <LabelIcon name="tick" /> Medium
      </Label>
    </LabelGroup>
  );
}

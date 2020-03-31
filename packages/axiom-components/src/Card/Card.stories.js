import React from 'react';
import Card from './Card';
import CardContent from './CardContent';

export default {
  title: 'Components/Card',
  component: Card,
};

export function Default() {
  return (
    <Card border shade="shade-3">
      <CardContent>Card Content</CardContent>
    </Card>
  );
}

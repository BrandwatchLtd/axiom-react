import uuid from 'uuid';
import React from 'react';
import { Card, CardTitle, CardContent } from 'bw-axiom/react';

export function _cardCheck({ props }) {
  return props._markdownProps && props._markdownProps.hLevel === 1;
}

export function _cardRule(content, index, structure) {
  const cardTitle = content[index].props.children[0];
  const children = [];

  while (++index < content.length && !_cardCheck(content[index])) {
    children.push(content[index]);
  }

  structure.push(
    <Card key={ uuid.v4() }>
      <CardTitle title={ cardTitle } />
      <CardContent>
        { children }
      </CardContent>
    </Card>
  );

  return children.length;
}

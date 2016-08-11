import uuid from 'uuid';
import React from 'react';
import Card from 'bw-axiom/components/card/Card';
import CardTitle from 'bw-axiom/components/card/CardTitle';
import CardContent from 'bw-axiom/components/card/CardContent';
import Heading from 'bw-axiom/components/typography/Heading';

export function _cardCheck({ props }) {
  return props['data-markdown-props'] && props['data-markdown-props'].hLevel === 1;
}

export function _cardRule(content, index, structure) {
  const cardTitle = content[index].props.children[0];
  const children = [];

  while (++index < content.length && !_cardCheck(content[index])) {
    children.push(content[index]);
  }

  structure.push(
    <Card key={ uuid.v4() }>
      <CardTitle>
        <Heading level={ 4 }>{ cardTitle }</Heading>
      </CardTitle>

      <CardContent>
        { children }
      </CardContent>
    </Card>
  );

  return children.length;
}

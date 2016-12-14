import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import Paragraph from '../../typography/Paragraph';
import Base from '../Base';

export default class BaseExample extends Component {
  render() {
    return (
      <Example name="Base component">
        <Paragraph>
          The Base component provides a way to add global abilities to every
          component. For example text alignment. The idea is to remove the need
          to add generic CSS utility classes.
        </Paragraph>

        <Paragraph>
          It is mainly used internally but can also be used like any other
          component.
        </Paragraph>

        <Snippet>
          <Base
              Component="header"
              textCenter={ true }
              textStrong={ true }
              textSubtle={ true }>
            I'm a center aligned subtly strong { '<header>' }
          </Base>
        </Snippet>
      </Example>
    );
  }
}

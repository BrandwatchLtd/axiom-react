import React, { Component } from 'react';
import Billboard from '../Billboard';
import { billboardSizes } from '../_vars';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class BillboardExample extends Component {
  render() {
    return (
      <Example name="Sized Billboard">
        <Snippet>
          { billboardSizes.map(({ id }, index) =>
            <Billboard color="grey" key={ index } overlay={ true } size={ id } variation="900">
              I am a { id } billboard!
            </Billboard>
          ) }
        </Snippet>
      </Example>
    );
  }
}

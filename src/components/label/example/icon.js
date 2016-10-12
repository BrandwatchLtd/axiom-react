import React, { Component } from 'react';
import LabelGroup from '../LabelGroup';
import Label from '../Label';
import Icon from '../../icon/Icon';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class LabelExample extends Component {
  render() {
    return (
      <Example name="Labels with an Icon">
        <Snippet>
          <LabelGroup snippetIgnore={ true }>
            <Label color="red" size="small">
              Small <Icon name="trash" />
            </Label>

            <Label color="yellow" size="medium">
              Regular <Icon name="warning" />
            </Label>

            <Label color="green" size="large">
              Large <Icon name="check" />
            </Label>
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}

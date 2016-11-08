import React, { Component } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Heading from '../../typography/Heading';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Styles">
        <Heading>Primary</Heading>
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            <Button style="primary">
              Primary action button
            </Button>

            <Button disabled={ true } style="primary" >
              Disabled primary action button
            </Button>
          </ButtonGroup>
        </Snippet>

        <Heading>Secondary</Heading>
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            <Button style="secondary">
              Secondary action button
            </Button>

            <Button disabled={ true } style="secondary" >
              Disabled secondary action button
            </Button>
          </ButtonGroup>
        </Snippet>

        <Heading>Tertiary</Heading>
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            <Button style="tertiary">
              Tertiary action button
            </Button>

            <Button disabled={ true } style="tertiary" >
              Disabled tertiary action button
            </Button>
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}

import React, { Component } from 'react';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Heading from '../../typography/Heading';
import { colorAliases, colorPalette } from '../../../design-patterns/colors/_vars';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class ButtonExample extends Component {
  render() {
    return (
      <Example name="Colored Buttons">
        <Heading level={ 5 }>Plaette Colors</Heading>
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            { colorPalette.map((colors, t) =>
              colors.map(({ name }, b) =>
                <Button color={ name } key={ `${t}${b}` }>{ name }</Button>
              )
            ) }
          </ButtonGroup>
        </Snippet>

        <Heading level={ 5 }>Context Colors</Heading>
        <Snippet>
          { colorAliases.map(({ heading, colors }, t) => [
            <Heading key={ `${t}` } level={ 5 } snippetSkip={ true }>{ heading }</Heading>,
            <ButtonGroup snippetIgnore={ true }>
              { colors.map((group, m) =>
                group.map(({ name }, b) =>
                  <Button color={ name } key={ `${t}${m}${b}` }>{ name }</Button>
                )
              ) }
            </ButtonGroup>,
          ]) }
        </Snippet>

        <Heading level={ 5 }>Scheme primary</Heading>
        <Snippet>
          <ButtonGroup snippetIgnore={ true }>
            <Button color="primary">Scheme primary</Button>
          </ButtonGroup>
        </Snippet>
      </Example>
    );
  }
}

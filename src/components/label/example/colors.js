import React, { Component } from 'react';
import LabelGroup from '../LabelGroup';
import Label from '../Label';
import Heading from '../../typography/Heading';
import { colorAliases, colorPalette } from '../../../design-patterns/colors/_vars';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class LabelExample extends Component {
  render() {
    return (
      <Example name="Colored Labels">
        <Heading level={ 5 }>Plaette Colors</Heading>
        <Snippet>
          <LabelGroup snippetIgnore={ true }>
            { colorPalette.map((colors, t) =>
              colors.map(({ name }, b) =>
                <Label color={ name } key={ `${t}${b}` }>{ name }</Label>
              )
            ) }
          </LabelGroup>
        </Snippet>

        <Heading level={ 5 }>Context Colors</Heading>
        <Snippet>
          { colorAliases.map(({ heading, colors }, t) => [
            <Heading key={ `${t}` } level={ 5 } snippetSkip={ true }>{ heading }</Heading>,
            <LabelGroup snippetIgnore={ true }>
              { colors.map((group, m) =>
                group.map(({ name }, b) =>
                  <Label color={ name } key={ `${t}${m}${b}` }>{ name }</Label>
                )
              ) }
            </LabelGroup>,
          ]) }
        </Snippet>

        <Heading level={ 5 }>Scheme primary</Heading>
        <Snippet>
          <LabelGroup snippetIgnore={ true }>
            <Label color="primary">Scheme primary</Label>
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}

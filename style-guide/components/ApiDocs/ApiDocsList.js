import React, { Component, PropTypes } from 'react';
import { CardList, CardListItem, Heading, HorizontalRule } from 'bw-axiom';
import ApiDocsProp from './ApiDocsProp';

export default class ApiDocsList extends Component {
  static propTypes = {
    componentName: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired,
  };

  render()  {
    const { componentName, props } = this.props;

    return (
      <CardList>
        <Heading key="heading" style="title">{ componentName }</Heading>

        { Object.keys(props).sort().map((prop, index) =>
          <CardListItem key={ index }>
            <ApiDocsProp
                propData={ props[prop] }
                propName={ prop } />
          </CardListItem>
        ) }

        <HorizontalRule />
      </CardList>
    );
  }
}

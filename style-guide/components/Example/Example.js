import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card, CardContent, Heading } from 'bw-axiom';

export default class Example extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    name: PropTypes.string,
  };

  render() {
    const { name, children } = this.props;

    return (
      <Card>
        <CardContent>
          { name && (
            <Heading space="x6" textSize="headtitle">{ name }</Heading>
          ) }

          { children }
        </CardContent>
      </Card>
    );
  }
}

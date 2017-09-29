import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Paragraph from '../Paragraph';
import TextIcon from '../TextIcon';

export default class TextIconExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      TextIcon: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      TextIcon: components.TextIcon,
    };

    const initialProps = {
      TextIcon: {
        name: 'twitter',
        spaceLeft: 'x1',
        spaceRight: 'x1',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Paragraph>
          Lorem ipsum <TextIcon { ...initialProps.TextIcon } /> dolor sit amet
        </Paragraph>
      </ExampleConfig>
    );
  }
}

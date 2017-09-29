import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Link from '../Link';
import Paragraph from '../Paragraph';

export default class LinkExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Link: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Link: components.Link,
    };

    const initialProps = {
      Link: { },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Paragraph>
          Lorem ipsum dolor sit amet,
          consectetur <Link { ...initialProps.Link }>Link</Link> elit,
          sed do eiusmod.
        </Paragraph>
      </ExampleConfig>
    );
  }
}

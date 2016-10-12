import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class IconExample extends Component {
  static propTypes = {
    queryParams: PropTypes.shape({
      iconId: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { queryParams } = this.props;
    const { iconId } = queryParams;

    return (
      <Example name={ `Icon - ${iconId}` }>
        <Snippet>
          <Icon name={ iconId } size="xxxlarge" />
        </Snippet>
      </Example>
    );
  }
}

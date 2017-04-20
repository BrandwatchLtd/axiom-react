import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example } from 'style-guide';
import ProgressTransitions from './ProgressTransitions';

export default class ProgressTransitionsExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Progress: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Progress: { size } } = components;

    return (
      <Example name="Progress errors">
        <ProgressTransitions errorPercent={ 70 } sizes={ size.values }/>
      </Example>
    );
  }
}

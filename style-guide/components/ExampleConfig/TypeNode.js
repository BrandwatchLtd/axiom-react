import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ButtonGroup, Button } from 'bw-axiom';

export default class TypeNode extends Component {
  static propTypes = {
    prop: PropTypes.string.isRequired,
    propOptions: PropTypes.shape({
      count: PropTypes.number,
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    setOptionValue: PropTypes.func.isRequired,
  };

  render() {
    const { prop, propOptions, setOptionValue } = this.props;
    const {
      count,
      max = Infinity,
      min = 0,
    } = propOptions;

    if (prop !== 'children' || count === undefined) {
      return null;
    }

    return (
      <ButtonGroup joined={ true }>
        <Button
            disabled={ count === min }
            onClick={ () => setOptionValue('count', count - 1) }
            size="small"
            style="secondary">
          Remove
        </Button>

        <Button
            disabled={ count === max }
            onClick={ () => setOptionValue('count', count + 1) }
            size="small"
            style="secondary">
          Add
        </Button>
      </ButtonGroup>
    );
  }
}

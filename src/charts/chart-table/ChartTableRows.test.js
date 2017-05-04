import PropTypes from 'prop-types';
import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import {
  ChartTableRows,
  ChartTableRow,
  ChartTableLabel,
  ChartTableVisual,
} from 'bw-axiom';

class ContextProvider extends Component {
  getChildContext () {
    return this.props.context;
  }
  render () {
    return this.props.children;
  }
}

ContextProvider.childContextTypes = {
  setRowsCount: PropTypes.func.isRequired,
};

ContextProvider.propTypes = {
  children: PropTypes.node,
  context: PropTypes.object.isRequired,
};

function getComponent(props = {}, context) {
  return renderer.create(
    <ContextProvider context={ context }>
      <ChartTableRows { ...props }>
        <ChartTableRow>
          <ChartTableLabel>Lorem</ChartTableLabel>
          <ChartTableVisual>Lorem</ChartTableVisual>
        </ChartTableRow>
      </ChartTableRows>
    </ContextProvider>
  );
}

describe('ChartTableRows', () => {
  function setRowsCount () {}

  it('renders with defaultProps', () => {
    const component = getComponent({}, {
      setRowsCount,
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

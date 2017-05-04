import sum from 'lodash/sum';
import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';
import { Base } from 'bw-axiom';

export default class ChartTableRows extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    collapsedVisibleRowCount: PropTypes.number,
    isExpanded: PropTypes.bool.isRequired,
    setRowsCount: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      trHeights: null,
    };
  }

  componentDidMount() {
    if (this.tbody) { // not defined when running tests
      const trHeights = [...this.tbody.querySelectorAll('tbody > tr')].map(tr => tr.offsetHeight);
      this.setState({ trHeights });
    }
  }

  componentWillMount() {
    this.context.setRowsCount(Children.count(this.props.children));
  }

  componentWillReceiveProps(nextProps) {
    const currentCount = Children.count(this.props.children);
    const nextCount = Children.count(nextProps.children);
    if (nextCount !== currentCount) this.context.setRowsCount(nextCount);
  }

  render() {
    const { collapsedVisibleRowCount, isExpanded } = this.context;
    const { children, ...rest } = this.props;
    const { trHeights } = this.state;

    const height = trHeights
      ? sum(isExpanded ? trHeights : trHeights.slice(0, collapsedVisibleRowCount))
      : 'auto';

    return (
      <Base { ...rest }
          Component="div"
          className="ax-chart-table__rows-container"
          style={ { height } }>
        <table className="ax-chart-table__rows">
          <tbody ref={ tbody => this.tbody = tbody }>
            { children }
          </tbody>
        </table>
      </Base>
    );
  }
}

import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';

export default class ChartTableRows extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    collapsedVisibleRowCount: PropTypes.number,
    isExpanded: PropTypes.bool.isRequired,
    rowsCount: PropTypes.number,
    setRowsCount: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      height: null,
    };
  }

  componentDidMount() {
    const { isExpanded } = this.context;

    this.el.addEventListener('transitionend', () => {
      if (this.context.isExpanded) {
        this.setState({
          height: 'auto',
        });
      }
    });

    if (!isExpanded) {
      this.setToVisbleRowHeight();
    }
  }

  componentWillMount() {
    this.context.setRowsCount(Children.count(this.props.children));
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { isExpanded, rowsCount } = this.context;
    const { isExpanded: willBeExpanded, rowsCount: nextRowsCount } = nextContext;
    const currentCount = Children.count(this.props.children);
    const nextCount = Children.count(nextProps.children);

    if (isExpanded && !willBeExpanded) {
      this.collapse();
    } else if (!isExpanded && willBeExpanded) {
      this.expand();
    } else if (!willBeExpanded && rowsCount !== nextRowsCount) {
      this.setToVisbleRowHeight();
    }

    if (nextCount !== currentCount) this.context.setRowsCount(nextCount);
  }

  collapse() {
    this.setState({
      height: this.tbody.offsetHeight,
    });

    window.requestAnimationFrame(() => {
      this.setToVisbleRowHeight();
    });
  }

  expand() {
    this.setState({
      height: this.tbody.offsetHeight,
    });
  }

  setToVisbleRowHeight() {
    const { collapsedVisibleRowCount } = this.context;
    const height = [...this.tbody.querySelectorAll('tbody > tr')]
      .slice(0, collapsedVisibleRowCount)
      .reduce((height, tr) => height + tr.offsetHeight, 0);

    this.setState({ height });
  }

  render() {
    const { children, ...rest } = this.props;
    const { height } = this.state;

    return (
      <div { ...rest }
          className="ax-chart-table__rows-container"
          ref={ (el) => this.el = el }
          style={ { height } }>
        <table className="ax-chart-table__rows">
          <tbody ref={ tbody => this.tbody = tbody }>
            { children }
          </tbody>
        </table>
      </div>
    );
  }
}

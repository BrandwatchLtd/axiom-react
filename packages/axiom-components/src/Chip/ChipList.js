import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import Icon from '../Icon/Icon';
import classnames from 'classnames';
import './ChipList.css';

export default class ChipList extends Component {
  static propTypes = {
    /** Array of Chip components */
    children: PropTypes.node.isRequired,
    /** Label of the List */
    label: PropTypes.string,
    /** Size of the chips in the chip list */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  constructor(props) {
    super(props);

    this.chipList = React.createRef();
    this.state = {
      isExpanded: false,
      isExpandable: false,
    };
  }

  componentDidMount() {
    const { clientHeight, scrollHeight } = this.chipList.current;

    if (scrollHeight > clientHeight * 2) {
      this.setState({ isExpandable: true });
    }
  }

  handleExpand = () => {
    if (this.state.isExpandable) {
      this.setState({ isExpanded: !this.state.isExpanded });
    }
  };

  render() {
    const { children, label, size } = this.props;

    const { isExpanded, isExpandable } = this.state;

    const childrenWithSize = React.Children.map(children, child =>
      React.cloneElement(child, { size })
    );

    const classes = classnames('ax-chiplist', `ax-chiplist--${size}`, {
      'ax-chiplist--expanded': isExpanded,
    });

    const labelClasses = classnames(
      'ax-chiplist-label',
      `ax-chiplist-label--${size}`,
      { 'ax-chiplist--expandable': isExpandable }
    );

    return (
      <Base baseRef={this.chipList} className={classes}>
        <div className={labelClasses} onClick={this.handleExpand}>
          {label}
          {isExpandable && (
            <Icon
              inline
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
              spaceLeft="x1"
            />
          )}
        </div>

        {childrenWithSize}
      </Base>
    );
  }
}

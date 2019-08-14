import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Base from '../Base/Base';
import Tooltip from '../Tooltip/Tooltip';
import TooltipContent from '../Tooltip/TooltipContent';
import TooltipContext from '../Tooltip/TooltipContext';
import TooltipSource from '../Tooltip/TooltipSource';
import TooltipTarget from '../Tooltip/TooltipTarget';

function elementHasEllipsis(ref = {}) {
  const { current } = ref;
  return current && current.scrollWidth > current.clientWidth;
}

export default class EllipsisTooltip extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
    delay: PropTypes.bool,
    theme: PropTypes.oneOf(['day', 'night']),
    width: PropTypes.string,
  };

  static defaultProps = {
    delay: true,
    theme: 'night',
    width: 'auto',
  }

  constructor(props) {
    super(props);
    this.state = {
      hasEllipsis: false,
    };

    this.container = React.createRef();

    this.updateTooltipEnabled = this.updateTooltipEnabled.bind(this);
  }

  updateTooltipEnabled() {
    const hasEllipsis = elementHasEllipsis(this.container);

    if (this.state.hasEllipsis !== hasEllipsis) {
      this.setState({ hasEllipsis });
    }
  }

  onMouseOver() {
    this.updateTooltipEnabled();
  }

  render() {
    const { children, delay, width, theme, ...rest } = this.props;
    const { hasEllipsis } = this.state;

    if (!hasEllipsis) {
      return (
        <Base baseRef={ this.container } textEllipsis { ...rest } onMouseOver={ this.updateTooltipEnabled }>
          { children }
        </Base>
      );
    }

    return (
      <Tooltip delay={ delay } enabled>
        <TooltipTarget>
          <Base baseRef={ this.container } textEllipsis { ...rest }>
            { children }
          </Base>
        </TooltipTarget>
        <TooltipSource theme={ theme } width={ width }>
          <TooltipContext>
            <TooltipContent>
              { children }
            </TooltipContent>
          </TooltipContext>
        </TooltipSource>
      </Tooltip>
    );
  }
}

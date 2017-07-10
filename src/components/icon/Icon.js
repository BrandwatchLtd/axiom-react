import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Icon.css';

const ICON_NAME_MAP = {
  'arrow-down': require('./svgs/arrow-down.svg'),
  'arrow-left': require('./svgs/arrow-left.svg'),
  'arrow-right': require('./svgs/arrow-right.svg'),
  'arrow-up': require('./svgs/arrow-up.svg'),
  'benchmark': require('./svgs/benchmark.svg'),
  'bar-chart': require('./svgs/bar-chart.svg'),
  'box-collapse': require('./svgs/box-collapse.svg'),
  'box-expand': require('./svgs/box-expand.svg'),
  'chevron-down': require('./svgs/chevron-down.svg'),
  'chevron-left': require('./svgs/chevron-left.svg'),
  'chevron-right': require('./svgs/chevron-right.svg'),
  'chevron-up': require('./svgs/chevron-up.svg'),
  'cloud-upload': require('./svgs/cloud-upload.svg'),
  'cross': require('./svgs/cross.svg'),
  'dot': require('./svgs/dot.svg'),
  'double-chevron-left': require('./svgs/double-chevron-left.svg'),
  'double-chevron-right': require('./svgs/double-chevron-right.svg'),
  'ellipsis': require('./svgs/ellipsis.svg'),
  'folder': require('./svgs/folder.svg'),
  'hamburger': require('./svgs/hamburger.svg'),
  'heart': require('./svgs/heart.svg'),
  'home': require('./svgs/home.svg'),
  'information-circle': require('./svgs/information-circle.svg'),
  'information': require('./svgs/information.svg'),
  'magnify-glass': require('./svgs/magnify-glass.svg'),
  'minus': require('./svgs/minus.svg'),
  'pencil': require('./svgs/pencil.svg'),
  'plus': require('./svgs/plus.svg'),
  'question-mark-circle': require('./svgs/question-mark-circle.svg'),
  'question-mark': require('./svgs/question-mark.svg'),
  'refresh': require('./svgs/refresh.svg'),
  'reply': require('./svgs/reply.svg'),
  'retweet': require('./svgs/retweet.svg'),
  'ring': require('./svgs/ring.svg'),
  'share': require('./svgs/share.svg'),
  'tag': require('./svgs/tag.svg'),
  'tick': require('./svgs/tick.svg'),
  'trash': require('./svgs/trash.svg'),
  'twitter': require('./svgs/twitter.svg'),
  'warning-circle': require('./svgs/warning-circle.svg'),
  'warning': require('./svgs/warning.svg'),
};

export default class Icon extends Component {
  static propTypes = {
    inline: PropTypes.bool,
    name: PropTypes.oneOf([
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'arrow-up',
      'benchmark',
      'bar-chart',
      'box-collapse',
      'box-expand',
      'chevron-down',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'cloud-upload',
      'cross',
      'dot',
      'double-chevron-left',
      'double-chevron-right',
      'ellipsis',
      'folder',
      'hamburger',
      'heart',
      'home',
      'information-circle',
      'information',
      'magnify-glass',
      'minus',
      'pencil',
      'plus',
      'question-mark-circle',
      'question-mark',
      'refresh',
      'reply',
      'retweet',
      'ring',
      'share',
      'tag',
      'tick',
      'trash',
      'twitter',
      'warning-circle',
      'warning',
    ]),
    size: PropTypes.string,
    spaceLeft: PropTypes.oneOf(['x1', 'x2']),
    spaceRight: PropTypes.oneOf(['x1', 'x2']),
  };

  static defaultProps = {
    size: '1rem',
  };

  render() {
    const { inline, name, size, spaceLeft, spaceRight, ...rest } = this.props;
    const style = { width: size, height: size };
    const classes = classnames('ax-icon', `ax-icon--${name}`, {
      'ax-icon--inline': inline,
      [`ax-icon--space-left-${spaceLeft}`]: spaceLeft,
      [`ax-icon--space-right-${spaceRight}`]: spaceRight,
    });

    if (!ICON_NAME_MAP[name]) {
      return null;
    }

    const { body, viewBox } = ICON_NAME_MAP[name];

    return (
      <Base { ...rest }
          Component="svg"
          className={ classes }
          dangerouslySetInnerHTML={ { __html: body } }
          style={ style }
          viewBox={ viewBox } />
    );
  }
}

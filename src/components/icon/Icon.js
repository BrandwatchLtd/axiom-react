import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Icon.css';

const ICON_NAME_MAP = {
  'annotate': require('./svgs/annotate.svg'),
  'arrow-down': require('./svgs/arrow-down.svg'),
  'arrow-left': require('./svgs/arrow-left.svg'),
  'arrow-right': require('./svgs/arrow-right.svg'),
  'arrow-up': require('./svgs/arrow-up.svg'),
  'bar-chart': require('./svgs/bar-chart.svg'),
  'benchmark': require('./svgs/benchmark.svg'),
  'box-collapse': require('./svgs/box-collapse.svg'),
  'box-expand': require('./svgs/box-expand.svg'),
  'chevron-down': require('./svgs/chevron-down.svg'),
  'chevron-left': require('./svgs/chevron-left.svg'),
  'chevron-right': require('./svgs/chevron-right.svg'),
  'chevron-up': require('./svgs/chevron-up.svg'),
  'clock': require('./svgs/clock.svg'),
  'cloud-upload': require('./svgs/cloud-upload.svg'),
  'cross': require('./svgs/cross.svg'),
  'customise': require('./svgs/customise.svg'),
  'data': require('./svgs/data.svg'),
  'deck': require('./svgs/deck.svg'),
  'dot': require('./svgs/dot.svg'),
  'dot-outline': require('./svgs/dot-outline.svg'),
  'double-chevron-left': require('./svgs/double-chevron-left.svg'),
  'double-chevron-right': require('./svgs/double-chevron-right.svg'),
  'duplicate': require('./svgs/duplicate.svg'),
  'ellipsis': require('./svgs/ellipsis.svg'),
  'filter': require('./svgs/filter.svg'),
  'flip-horizontal': require('./svgs/flip-horizontal.svg'),
  'flip-vertical': require('./svgs/flip-vertical.svg'),
  'folder': require('./svgs/folder.svg'),
  'folder-closed': require('./svgs/folder-closed.svg'),
  'followers': require('./svgs/followers.svg'),
  'grid': require('./svgs/grid.svg'),
  'hamburger': require('./svgs/hamburger.svg'),
  'heart': require('./svgs/heart.svg'),
  'home': require('./svgs/home.svg'),
  'information': require('./svgs/information.svg'),
  'information-circle': require('./svgs/information-circle.svg'),
  'installation': require('./svgs/installation.svg'),
  'integrations': require('./svgs/integrations.svg'),
  'kred': require('./svgs/kred.svg'),
  'list': require('./svgs/list.svg'),
  'location': require('./svgs/location.svg'),
  'magnify-glass': require('./svgs/magnify-glass.svg'),
  'minus': require('./svgs/minus.svg'),
  'monitor': require('./svgs/monitor.svg'),
  'moon': require('./svgs/moon.svg'),
  'open': require('./svgs/open.svg'),
  'pencil': require('./svgs/pencil.svg'),
  'plugin': require('./svgs/plugin.svg'),
  'plus': require('./svgs/plus.svg'),
  'preview': require('./svgs/preview.svg'),
  'question-mark': require('./svgs/question-mark.svg'),
  'question-mark-circle': require('./svgs/question-mark-circle.svg'),
  'refresh': require('./svgs/refresh.svg'),
  'replace': require('./svgs/replace.svg'),
  'reply': require('./svgs/reply.svg'),
  'retweet': require('./svgs/retweet.svg'),
  'ring': require('./svgs/ring.svg'),
  'share': require('./svgs/share.svg'),
  'star': require('./svgs/star.svg'),
  'tag': require('./svgs/tag.svg'),
  'tick': require('./svgs/tick.svg'),
  'trash': require('./svgs/trash.svg'),
  'twitter': require('./svgs/twitter.svg'),
  'unlock': require('./svgs/unlock.svg'),
  'warning': require('./svgs/warning.svg'),
  'warning-circle': require('./svgs/warning-circle.svg'),
};

export default class Icon extends Component {
  static propTypes = {
    inline: PropTypes.bool,
    name: PropTypes.oneOf([
      'annotate',
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'arrow-up',
      'bar-chart',
      'benchmark',
      'box-collapse',
      'box-expand',
      'chevron-down',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'clock',
      'cloud-upload',
      'cross',
      'customise',
      'data',
      'deck',
      'dot',
      'dot-outline',
      'double-chevron-left',
      'double-chevron-right',
      'duplicate',
      'ellipsis',
      'filter',
      'flip-horizontal',
      'flip-vertical',
      'folder',
      'folder-closed',
      'followers',
      'grid',
      'hamburger',
      'heart',
      'home',
      'information',
      'information-circle',
      'installation',
      'integrations',
      'kred',
      'list',
      'location',
      'magnify-glass',
      'minus',
      'monitor',
      'moon',
      'open',
      'pencil',
      'plugin',
      'plus',
      'preview',
      'question-mark',
      'question-mark-circle',
      'refresh',
      'replace',
      'reply',
      'retweet',
      'ring',
      'share',
      'star',
      'tag',
      'tick',
      'trash',
      'twitter',
      'unlock',
      'warning',
      'warning-circle',
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

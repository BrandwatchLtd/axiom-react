import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Icon.css';

const ICON_NAME_MAP = {
  'annotate': require('./svgs/annotate.svg'),
  'arrow-down': require('./svgs/arrow-down.svg'),
  'arrow-up': require('./svgs/arrow-up.svg'),
  'at': require('./svgs/at.svg'),
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
  'email': require('./svgs/email.svg'),
  'exclude': require('./svgs/exclude.svg'),
  'facebook': require('./svgs/facebook.svg'),
  'filter': require('./svgs/filter.svg'),
  'flip-horizontal': require('./svgs/flip-horizontal.svg'),
  'flip-vertical': require('./svgs/flip-vertical.svg'),
  'folder': require('./svgs/folder.svg'),
  'folder-closed': require('./svgs/folder-closed.svg'),
  'followers': require('./svgs/followers.svg'),
  'form-resize': require('./svgs/form-resize.svg'),
  'grid': require('./svgs/grid.svg'),
  'hamburger': require('./svgs/hamburger.svg'),
  'heart': require('./svgs/heart.svg'),
  'home': require('./svgs/home.svg'),
  'information': require('./svgs/information.svg'),
  'information-circle': require('./svgs/information-circle.svg'),
  'installation': require('./svgs/installation.svg'),
  'instagram': require('./svgs/instagram.svg'),
  'integrations': require('./svgs/integrations.svg'),
  'kred': require('./svgs/kred.svg'),
  'line-graph': require('./svgs/line-graph.svg'),
  'list': require('./svgs/list.svg'),
  'location': require('./svgs/location.svg'),
  'magnify-glass': require('./svgs/magnify-glass.svg'),
  'minus': require('./svgs/minus.svg'),
  'monitor': require('./svgs/monitor.svg'),
  'moon': require('./svgs/moon.svg'),
  'open': require('./svgs/open.svg'),
  'pencil': require('./svgs/pencil.svg'),
  'pinterest': require('./svgs/pinterest.svg'),
  'plugin': require('./svgs/plugin.svg'),
  'plus': require('./svgs/plus.svg'),
  'preview': require('./svgs/preview.svg'),
  'question-mark': require('./svgs/question-mark.svg'),
  'question-mark-circle': require('./svgs/question-mark-circle.svg'),
  'reddit': require('./svgs/reddit.svg'),
  'refresh': require('./svgs/refresh.svg'),
  'replace': require('./svgs/replace.svg'),
  'reply': require('./svgs/reply.svg'),
  'retweet': require('./svgs/retweet.svg'),
  'ring': require('./svgs/ring.svg'),
  'share': require('./svgs/share.svg'),
  'star': require('./svgs/star.svg'),
  'sun': require('./svgs/sun.svg'),
  'tag': require('./svgs/tag.svg'),
  'tick': require('./svgs/tick.svg'),
  'trash': require('./svgs/trash.svg'),
  'triangle-down': require('./svgs/triangle-down.svg'),
  'triangle-left': require('./svgs/triangle-left.svg'),
  'triangle-right': require('./svgs/triangle-right.svg'),
  'triangle-up': require('./svgs/triangle-up.svg'),
  'twitter': require('./svgs/twitter.svg'),
  'unlock': require('./svgs/unlock.svg'),
  'warning': require('./svgs/warning.svg'),
  'warning-circle': require('./svgs/warning-circle.svg'),
};

export default class Icon extends Component {
  static propTypes = {
    /** SKIP */
    className: PropTypes.string,
    /**
     * Inline styling that allows the Icon to placed next to other inline
     * elements or text.
     */
    inline: PropTypes.bool,
    /** Name of the icon that will be displayed */
    name: PropTypes.oneOf([
      'annotate',
      'arrow-down',
      'arrow-up',
      'at',
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
      'email',
      'exclude',
      'facebook',
      'filter',
      'flip-horizontal',
      'flip-vertical',
      'folder',
      'folder-closed',
      'followers',
      'form-resize',
      'grid',
      'hamburger',
      'heart',
      'home',
      'information',
      'information-circle',
      'installation',
      'instagram',
      'integrations',
      'kred',
      'line-graph',
      'list',
      'location',
      'magnify-glass',
      'minus',
      'monitor',
      'moon',
      'open',
      'pencil',
      'pinterest',
      'plugin',
      'plus',
      'preview',
      'question-mark',
      'question-mark-circle',
      'reddit',
      'refresh',
      'replace',
      'reply',
      'retweet',
      'ring',
      'share',
      'star',
      'sun',
      'tag',
      'tick',
      'trash',
      'triangle-down',
      'triangle-left',
      'triangle-right',
      'triangle-up',
      'twitter',
      'unlock',
      'warning',
      'warning-circle',
    ]).isRequired,
    /** Size of icon (with unit) */
    size: PropTypes.string,
    /** Spacing applied to the left of the Icon. Must be used with the inline property */
    spaceLeft: PropTypes.oneOf(['x1', 'x2']),
    /** Spacing applied to the right of the Icon. Must be used with the inline property */
    spaceRight: PropTypes.oneOf(['x1', 'x2']),
  };

  static defaultProps = {
    size: '1rem',
  };

  render() {
    const { className, inline, name, size, spaceLeft, spaceRight, ...rest } = this.props;
    const style = { width: size, height: size };
    const classes = classnames(className, 'ax-icon', `ax-icon--${name}`, {
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

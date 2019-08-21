import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { icons } from '@brandwatch/axiom-materials';
import Base from '../Base/Base';
import './Icon.css';

export default class Icon extends Component {
  static propTypes = {
    /** SKIP */
    className: PropTypes.string,
    /**
     * Inline styling that allows the Icon to placed next to other inline
     * elements or text.
     */
    /** Height of icon (with unit). */
    height: PropTypes.string,
    inline: PropTypes.bool,
    /** Name of the icon that will be displayed */
    name: PropTypes.oneOf([
      'annotate',
      'analytics-alert',
      'arrow-down',
      'arrow-down-left',
      'arrow-down-right',
      'arrow-up',
      'arrow-up-left',
      'arrow-up-right',
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
      'format-bold',
      'format-italic',
      'format-title',
      'format-underline',
      'grid',
      'growth',
      'hamburger',
      'heart',
      'home',
      'information',
      'input',
      'information-circle',
      'installation',
      'instagram',
      'integrations',
      'iris',
      'kred',
      'line-graph',
      'list',
      'location',
      'lock',
      'log',
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
      'reports',
      'retweet',
      'ring',
      'settings',
      'share',
      'star',
      'sun',
      'switch',
      'tag',
      'tick',
      'tools',
      'trash',
      'triangle-down',
      'triangle-left',
      'triangle-right',
      'triangle-up',
      'twitter',
      'unlock',
      'user',
      'warning',
      'warning-circle',
    ]).isRequired,
    /** Size of icon (with unit). Not used when height or width is provided */
    size: PropTypes.string,
    /** Spacing applied to the left of the Icon. Must be used with the inline property */
    spaceLeft: PropTypes.oneOf(['x1', 'x2']),
    /** Spacing applied to the right of the Icon. Must be used with the inline property */
    spaceRight: PropTypes.oneOf(['x1', 'x2']),
    /** Width of icon (with unit). */
    width: PropTypes.string,
  };

  static defaultProps = {
    size: '1rem',
  };

  render() {
    const { className, inline, name, size, width, height, spaceLeft, spaceRight, ...rest } = this.props;
    const style = (height || width) ?
      { width, height } :
      { width: size, height: size };

    const classes = classnames(className, 'ax-icon', `ax-icon--${name}`, {
      'ax-icon--inline': inline,
      [`ax-icon--space-left-${spaceLeft}`]: spaceLeft,
      [`ax-icon--space-right-${spaceRight}`]: spaceRight,
    });

    if (!icons[name]) {
      return null;
    }

    const { body, viewBox } = icons[name];

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

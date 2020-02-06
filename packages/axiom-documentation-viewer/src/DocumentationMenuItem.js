import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classnames from 'classnames';
import { Base } from '@brandwatch/axiom-components';

export default class DocumentationMenuItem extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
  };

  render() {
    const { active, children, to, ...rest } = this.props;
    const classes = classnames('ax-documentation-viewer__menu-item', {
      'ax-documentation-viewer__menu-item--active': active,
    });

    return (
      <Base { ...rest }
          Component="li"
          className={ classes }
          textSize="large"
          textStrong>
        <Base
            Component={ RouterLink }
            className="ax-documentation-viewer__link"
            to={ to }>
          { children }
        </Base>
      </Base>
    );
  }
}

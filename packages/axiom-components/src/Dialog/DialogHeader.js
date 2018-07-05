import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';

export default class DialogHeader extends Component {
  static propTypes = {
    /** Header content inside the Dialog, a good place for a title */
    children: PropTypes.node,
    /** Padding size applied to the header area */
    padding: PropTypes.oneOf(['none', 'small', 'large']),
  };

  static contextTypes = {
    onRequestClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    padding: 'small',
  };

  render() {
    const { onRequestClose } = this.context;
    const { children, padding, ...rest } = this.props;

    const classes = classnames('ax-dialog__header',
    `ax-dialog__header--padding-${ padding }`
  );

    return (
      <Base { ...rest } className={ classes }>
        <Grid responsive={ false } verticalAlign="middle">
          <GridCell>
            { children }
          </GridCell>

          <GridCell shrink>
            <Link onClick={ onRequestClose } style="subtle">
              <Icon name="cross" size="1.5rem" />
            </Link>
          </GridCell>
        </Grid>
      </Base>
    );
  }
}

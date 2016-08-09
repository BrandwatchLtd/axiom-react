import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';

export class CardTitle extends Component {
  static propTypes = {
    children: { node: true },
    title: { string: true },
  };

  render() {
    const { className, title, children, ...rest } = this.props;
    const classes = classnames(className, 'ax-card__title');

    return (
      <div { ...rest } className={ classes }>
        <Grid vAlign="middle">
          <GridCell>
            <h4>{ title }</h4>
          </GridCell>

          { do {
            if (children) {
              <GridCell shrink={ true }>
                { children }
              </GridCell>
            }
          } }
        </Grid>
      </div>
    );
  }
}

export default enhance(CardTitle)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);

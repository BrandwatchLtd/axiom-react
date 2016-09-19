import React, { PropTypes, Component } from 'react';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Link from '../../typography/Link';
import Paragraph from '../../typography/Paragraph';
import Icon from '../Icon';
import { routeToPath } from 'style-guide/utils/examples';

export default class IconGrid extends Component {
  static propTypes = {
    icons: PropTypes.array.isRequired,
  };

  render() {
    const { icons } = this.props;

    return (
      <Grid>
        { icons.map(({ id, name }, index) =>
          <GridCell half="small" key={ index } quarter="large" third="medium">
            <Link inheritColor={ true } title={ name } to={ routeToPath(['components', `icon?iconId=${id}`]) }>
              <Grid responsive={ false }>
                <GridCell shrink={ true }>
                  <Icon fixedWidth={ true } name={ id } />
                </GridCell>

                <GridCell>
                  <Paragraph textEllipsis={ true }>{ id }</Paragraph>
                </GridCell>
              </Grid>
            </Link>
          </GridCell>
        ) }
      </Grid>
    );
  }
}

import React, { PropTypes, Component } from 'react';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Link from '../../typography/Link';
import Paragraph from '../../typography/Paragraph';
import Icon from '../Icon';
import { markdownRouteToPath } from 'style-guide/utils/markdown-document';

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
            <Link inheritColor={ true } title={ name } to={ markdownRouteToPath(['components', `icon?iconId=${id}`]) }>
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

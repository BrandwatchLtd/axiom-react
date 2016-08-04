import React, { PropTypes, Component } from 'react';
import { Grid, GridCell } from 'bw-axiom/react';
import { Icon } from 'bw-axiom/react';
import { Link, Paragraph } from 'bw-axiom/react';
import { markdownRouteToVersionedPath } from 'style-guide/utils/markdown-document';

export default class IconGrid extends Component {
  static propTypes = {
    icons: PropTypes.array.isRequired,
  };

  static contextTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    const { icons } = this.props;
    const { location: { pathname } } = this.context;

    return (
      <Grid>
        { icons.map(({ id, name }, index) =>
          <GridCell half="sm" key={ index } quarter="lg" third="md">
            <Link inheritColor={ true } title={ name } to={ markdownRouteToVersionedPath(['components', `icon?iconId=${id}`], pathname) }>
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

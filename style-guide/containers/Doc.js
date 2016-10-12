import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import humanize from 'humanize-string';
import Billboard from 'bw-axiom/components/billboard/Billboard';
import Grid from 'bw-axiom/components/grid/Grid';
import GridCell from 'bw-axiom/components/grid/GridCell';
import Heading from 'bw-axiom/components/typography/Heading';
import LayoutContent from 'style-guide/components/Layout/LayoutContent';
import ApiDocsDialogTrigger from 'style-guide/components/ApiDocs/ApiDocsDialogTrigger';
import { getPathData, pathToRoute } from 'style-guide/utils/examples';

export class Doc extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      query: PropTypes.object.isRequired,
    }).isRequired,
    routeParams: PropTypes.object.isRequired,
  };

  render() {
    const {
      routeParams,
      location: {
        pathname,
        query: queryParams,
      },
    } = this.props;

    const route = pathToRoute(pathname);
    const { examples, title, location, components } = getPathData(pathname);

    return (
      <div>
        <Billboard color="blue-grey" image="/assets/axiom-bg.jpg" overlay={ true } size="large">
          <LayoutContent padded={ true }>
            <Grid vAlign="bottom">
              <GridCell>
                <Heading level={ 4 } textCase="capital">{ humanize(route.slice(0, -1).join(' / ')) }</Heading>
                <Heading level={ 2 } textCase="capital">{ title }</Heading>
              </GridCell>

              { do { if (location && components) {
                <GridCell shrink={ true }>
                  <ApiDocsDialogTrigger imports={ { location, components } } />
                </GridCell>;
              } } }
            </Grid>
          </LayoutContent>
        </Billboard>

        <LayoutContent padded={ true }>
          { examples.map((Example, index) =>
            <Example
                key={ index }
                queryParams={ queryParams }
                routeParams={ routeParams } />
          ) }
        </LayoutContent>
      </div>
    );
  }
}


function select() {
  return {};
}

export default connect(select)(Doc);

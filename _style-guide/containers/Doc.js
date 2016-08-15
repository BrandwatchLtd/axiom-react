import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import humanize from 'humanize-string';
import Billboard from 'bw-axiom/components/billboard/Billboard';
import Grid from 'bw-axiom/components/grid/Grid';
import GridCell from 'bw-axiom/components/grid/GridCell';
import Heading from 'bw-axiom/components/typography/Heading';
import LayoutContent from 'style-guide/components/Layout/LayoutContent';
import ApiDocsDialogTrigger from 'style-guide/components/ApiDocs/ApiDocsDialogTrigger';
import { render } from 'style-guide/utils/markdown-to-remarkable';
import { pathToMarkdownRoute, getMarkdownContentFunction, getMarkdownImports } from 'style-guide/utils/markdown-document';

export class Doc extends Component {
  static propTypes = {
    location: PropTypes.shape({
      query: PropTypes.object.isRequired,
    }).isRequired,
    routeParams: PropTypes.object.isRequired,
  };

  render() {
    const {
      routeParams,
      location: { pathname, query },
    } = this.props;

    const markdownRoute = pathToMarkdownRoute(pathname);
    const markdownContentFunction = getMarkdownContentFunction(markdownRoute);
    const markdownImports = getMarkdownImports(markdownRoute);

    return (
      <div>
        <Billboard color="blue-grey" image="/assets/axiom-bg.jpg" overlay={ true } size="large">
          <LayoutContent padded={ true }>
            <Grid vAlign="bottom">
              <GridCell>
                <Heading level={ 4 } textCase="capital">{ humanize(markdownRoute.slice(0, -1).join(' / ')) }</Heading>
                <Heading level={ 2 } textCase="capital">{ humanize(markdownRoute[markdownRoute.length - 1]) }</Heading>
              </GridCell>

              { do { if (markdownImports) {
                <GridCell shrink={ true }>
                  <ApiDocsDialogTrigger imports={ markdownImports } />
                </GridCell>
              } } }
            </Grid>
          </LayoutContent>
        </Billboard>

        <LayoutContent padded={ true }>
          { render(markdownContentFunction, routeParams, query) }
        </LayoutContent>
      </div>
    );
  }
}


function select() {
  return {};
}

export default connect(select)(Doc);

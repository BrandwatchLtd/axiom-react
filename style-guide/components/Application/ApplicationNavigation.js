import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import mapDocumentation from '../../map-documentation';
import {
  ConsoleMenu,
  ConsoleMenuHeader,
  ConsoleMenuHeaderTitle,
  ConsoleMenuItem,
  Grid,
  GridCell,
  Icon,
} from 'bw-axiom';

export default class ApplicationNavigation extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { push } = this.props.history;

    return (
      <Fragment>
        { Object.keys(mapDocumentation.docs.children).map((parentId) =>
          <Fragment key={ parentId }>
            <ConsoleMenuHeader>
              <ConsoleMenuHeaderTitle>
                { mapDocumentation.docs.children[parentId].name }
              </ConsoleMenuHeaderTitle>
            </ConsoleMenuHeader>

            <ConsoleMenu>
              { Object.keys(mapDocumentation.docs.children[parentId].children).map((childId) =>
                <Route
                    children={ ({ match }) => (
                      <ConsoleMenuItem
                          active={ !!match }
                          onClick={ () => push(`/docs/${parentId}/${childId}`) }>
                        <Grid gutters="tiny" responsive={ false } verticalAlign="middle">
                          <GridCell shrink>
                            <Icon name={ match ? 'folder' : 'folder-closed' } size="1.5rem" />
                          </GridCell>

                          <GridCell>
                            { mapDocumentation.docs.children[parentId].children[childId].name }
                          </GridCell>
                        </Grid>
                      </ConsoleMenuItem>
                    ) }
                    key={ childId }
                    path={ `/docs/${parentId}/${childId}` } />
              ) }
            </ConsoleMenu>
          </Fragment>
        ) }
      </Fragment>
    );
  }
}

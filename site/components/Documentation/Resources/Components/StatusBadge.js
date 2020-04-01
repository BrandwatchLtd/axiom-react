import React, { Component } from 'react';
import { Grid, GridCell, StatusBadge } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    const statusBadgeProps = require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/StatusBadge/StatusBadge');

    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <Grid gutters="tiny">
            {statusBadgeProps.props.status.values.map(status => (
              <GridCell key={status} none>
                <StatusBadge status={status} />
              </GridCell>
            ))}
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/StatusBadge/StatusBadge'),
          ]}
        />
      </DocumentationContent>
    );
  }
}

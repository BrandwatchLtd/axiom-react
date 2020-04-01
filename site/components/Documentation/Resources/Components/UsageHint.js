import React, { Component } from 'react';
import {
  Grid,
  GridCell,
  Strong,
  TextIcon,
  UsageHint,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <UsageHint>This is a usage hint.</UsageHint>
            </DocumentationShowCase>
          </GridCell>
          <GridCell>
            <DocumentationShowCase centered>
              <UsageHint position="right">
                <TextIcon name="clock" /> Usage hints <Strong>can also</Strong>{' '}
                contain other components.
              </UsageHint>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/UsageHint/UsageHint'),
          ]}
        />
      </DocumentationContent>
    );
  }
}

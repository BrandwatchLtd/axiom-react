import React, { Component } from 'react';
import {
  Grid,
  GridCell,
  Label,
  LabelGroup,
  LabelIcon,
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
              <LabelGroup>
                <Label color="white">White</Label>
                <Label color="success">Success</Label>
                <Label color="error">Error</Label>
              </LabelGroup>
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase centered>
              <LabelGroup>
                <Label color="success" size="small">
                  <LabelIcon name="tick" /> Small
                </Label>

                <Label color="success" size="medium">
                  <LabelIcon name="tick" /> Medium
                </Label>
              </LabelGroup>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Label/Label'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Label/LabelGroup'),
          ]}
        />
      </DocumentationContent>
    );
  }
}

import React, { Component } from 'react';
import { ButtonGroup, ButtonIcon, Button, Grid, GridCell } from '@brandwatch/axiom-components';
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
              <ButtonGroup space="x2" textBreak="none" textCenter>
                <Button size="small" style="primary">Primary</Button>
                <Button size="small" style="secondary">Secondary</Button>
                <Button size="small" style="tertiary">Tertiary</Button>
                <Button size="small" style="quaternary">Quaternary</Button>
              </ButtonGroup>
            </DocumentationShowCase>

            <DocumentationShowCase centered>
              <ButtonGroup space="x2">
                <Button size="small">small</Button>
                <Button size="small">small</Button>
                <Button size="small">small</Button>
              </ButtonGroup>

              <ButtonGroup space="x2">
                <Button size="medium">medium</Button>
                <Button size="medium">medium</Button>
                <Button size="medium">medium</Button>
              </ButtonGroup>

              <ButtonGroup space="x2">
                <Button size="large">large</Button>
                <Button size="large">large</Button>
                <Button size="large">large</Button>
              </ButtonGroup>
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase centered>
              <ButtonGroup space="x2" textCenter>
                <Button color="accent">Accent</Button>
                <Button color="positive">Positive</Button>
                <Button color="negative">Negative</Button>
              </ButtonGroup>
            </DocumentationShowCase>

            <DocumentationShowCase centered>
              <ButtonGroup space="x2" textCenter>
                <Button shape="circle" size="medium">1</Button>
                <Button shape="circle" size="medium">B</Button>
                <Button shape="circle" size="medium">
                  <ButtonIcon name="twitter" />
                </Button>
              </ButtonGroup>

              <ButtonGroup space="x2" textCenter>
                <Button shape="stadium" size="small">10</Button>
                <Button shape="stadium" size="small">100</Button>
                <Button shape="stadium" size="small">1000</Button>
              </ButtonGroup>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Button/Button'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Button/ButtonGroup'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Button/ButtonIcon'),
        ] } />
      </DocumentationContent>
    );
  }
}

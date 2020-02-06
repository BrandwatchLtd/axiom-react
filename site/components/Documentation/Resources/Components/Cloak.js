import React, { Component } from 'react';
import {
  IconButton,
  Card,
  CardContent,
  Cloak,
  CloakContainer,
  Grid,
  GridCell,
  Heading,
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
        <DocumentationShowCase centered>
          <Grid none>
            <GridCell>
              <CloakContainer>
                <Card border>
                  <CardContent>
                    <Grid none responsive={ false } verticalAlign="middle">
                      <GridCell>
                        <Heading>Using components</Heading>
                      </GridCell>
                      <GridCell>
                        <Cloak invisible>
                          <IconButton name="ellipsis" />
                        </Cloak>
                      </GridCell>
                    </Grid>
                  </CardContent>
                </Card>
              </CloakContainer>
            </GridCell>

            <GridCell>
              <Card border cloakContainer>
                <CardContent>
                  <Grid none responsive={ false } verticalAlign="middle">
                    <GridCell>
                      <Heading>Using base props</Heading>
                    </GridCell>
                    <GridCell cloak>
                      <IconButton name="ellipsis" />
                    </GridCell>
                  </Grid>
                </CardContent>
              </Card>
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Cloak/Cloak'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Cloak/CloakContainer'),
        ] } />
      </DocumentationContent>
    );
  }
}

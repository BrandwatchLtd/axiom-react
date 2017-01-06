import React, { Component } from 'react';
import {
  ButtonGroup,
  Button,
  CardList,
  CardListItem,
  Card,
  CheckBoxGroup,
  CheckBox,
  Grid,
  GridCell,
  Heading,
  Italic,
  Label,
  LabelGroup,
  Link,
  Strong,
  Paragraph,
  TextInput,
} from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Labs.scss');
}

export default class Labs extends Component {
  render() {
    return (
      <div className="dm-labs">
        <div className="dm-labs__canvas">
          <TextInput placeholder="Search..." size="large" />

          <CheckBoxGroup inline={ true }>
            <CheckBox defaultChecked={ true }>Audiences</CheckBox>
            <CheckBox defaultChecked={ true }>Axiom</CheckBox>
            <CheckBox defaultChecked={ true }>Frontend</CheckBox>
            <CheckBox defaultChecked={ true }>Vizia</CheckBox>
          </CheckBoxGroup>

          <CardList>
            <CardListItem onClick={ () => {} }>
              <Card>
                <Grid gutters="large" vAlign="middle">
                  <GridCell>
                    <Grid>
                      <GridCell>
                        <Heading>
                          <Strong>monkey patch for testing ipaddresses </Strong>
                          <Link>(596b758...)</Link>
                        </Heading>
                      </GridCell>

                      <GridCell shrink={ true }>
                        <LabelGroup>
                          <Label>Production</Label>
                          <Label color="valid">Success</Label>
                        </LabelGroup>
                      </GridCell>
                    </Grid>

                    <Grid textSubtle={ true }>
                      <GridCell>
                        <Paragraph><Italic>Rob Wilson</Italic></Paragraph>
                      </GridCell>

                      <GridCell shrink={ true }>
                        <Paragraph>11:32 Thu 5th Jan</Paragraph>
                      </GridCell>
                    </Grid>
                  </GridCell>
                </Grid>
              </Card>
            </CardListItem>

            <CardListItem onClick={ () => {} }>
              <Card>
                <Grid gutters="large" vAlign="middle">
                  <GridCell>
                    <Grid>
                      <GridCell>
                        <Heading>
                          <Strong>monkey patch for testing ipaddresses </Strong>
                          <Link>(596b758...)</Link>
                        </Heading>
                      </GridCell>

                      <GridCell shrink={ true }>
                        <LabelGroup>
                          <Label>Development</Label>
                          <Label color="invalid">Failed</Label>
                        </LabelGroup>
                      </GridCell>
                    </Grid>

                    <Grid textSubtle={ true }>
                      <GridCell>
                        <Paragraph><Italic>Rob Wilson</Italic></Paragraph>
                      </GridCell>

                      <GridCell shrink={ true }>
                        <Paragraph>11:32 Thu 5th Jan</Paragraph>
                      </GridCell>
                    </Grid>
                  </GridCell>
                </Grid>
              </Card>
            </CardListItem>

            <CardListItem onClick={ () => {} }>
              <Card>
                <Grid gutters="large" vAlign="middle">
                  <GridCell>
                    <Grid>
                      <GridCell>
                        <Heading>
                          <Strong>monkey patch for testing ipaddresses </Strong>
                          <Link>(596b758...)</Link>
                        </Heading>
                      </GridCell>

                      <GridCell shrink={ true }>
                        <LabelGroup>
                          <Label>Production</Label>
                          <Label color="valid">Success</Label>
                        </LabelGroup>
                      </GridCell>
                    </Grid>

                    <Grid textSubtle={ true }>
                      <GridCell>
                        <Paragraph><Italic>Rob Wilson</Italic></Paragraph>
                      </GridCell>

                      <GridCell shrink={ true }>
                        <Paragraph>11:32 Thu 5th Jan</Paragraph>
                      </GridCell>
                    </Grid>
                  </GridCell>
                </Grid>
              </Card>
            </CardListItem>
          </CardList>

          <ButtonGroup textCenter={ true }>
            <Button style="secondary">Previous</Button>
            <Button style="secondary">Next</Button>
          </ButtonGroup>

        </div>
      </div>
    );
  }
}

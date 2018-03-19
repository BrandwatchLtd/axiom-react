import React, { Component } from 'react';
import {
  Badge,
  Card,
  CardCaption,
  CardContent,
  CardImage,
  Grid,
  GridCell,
  Link,
  List,
  ListItem,
  Paragraph,
  TextIcon,
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
        <DocumentationShowCase>
          <div style={ { margin: 'auto', maxWidth: '16.375rem' } }>
            <Card border elevation="x1" onClick={ () => {} }>
              <CardImage src="/assets/card.jpg">
                <CardCaption textStrong>
                  <List style="inline">
                    <ListItem>edition.brandwatch.com</ListItem>
                    <ListItem>8hrs ago</ListItem>
                  </List>
                </CardCaption>
              </CardImage>
              <CardContent key="body" size="large">
                <Paragraph space="x0" textStrong>Name Surname</Paragraph>
                <Paragraph space="x0" textColor="subtle">
                  <TextIcon name="twitter" spaceRight="x1" textColor="twitter" />
                  @TwitterHandle • 6hrs
                </Paragraph>
                <Paragraph space="x2" textColor="subtle" textSize="small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore: <Link href="https://goo.gl/4oWkDa">https://goo.gl/4oWkDa</Link>
                  <Link href="https://goo.gl/4oWkDa"> #HashTag</Link>
                </Paragraph>
                <Grid
                    gutters="small"
                    responsive={ false }
                    space="x0"
                    textColor="subtle"
                    textSize="small"
                    textStrong
                    verticalAlign="middle">
                  <GridCell shrink>
                    <Link style="subtle"><TextIcon name="retweet" /> 1</Link>
                  </GridCell>

                  <GridCell shrink>
                    <Link style="subtle"><TextIcon name="heart" /> 6</Link>
                  </GridCell>

                  <GridCell>
                    <Link style="subtle"><TextIcon name="reply" /> 0</Link>
                  </GridCell>

                  <GridCell shrink>
                    <Badge color="success">
                      <TextIcon name="preview" /> 44%
                    </Badge>
                  </GridCell>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/Card'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/CardContent'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/CardImage'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/CardCaption'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/CardList'),
        ] } />
      </DocumentationContent>
    );
  }
}

import React, { Component, Fragment } from 'react';
import {
  Badge,
  Candytar,
  Card,
  CardCaption,
  CardContent,
  CardImage,
  CardImages,
  CardList,
  Grid,
  GridCell,
  Heading,
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

class CardExampleContainer extends Component {
  render() {
    return (
      <div {...this.props} style={{ margin: 'auto', maxWidth: '16.375rem' }} />
    );
  }
}

class CardExampleContent extends Component {
  render() {
    return (
      <Fragment>
        <Paragraph space="x0" textStrong>
          Name Surname
        </Paragraph>
        <Paragraph space="x0" textColor="subtle">
          <TextIcon name="twitter" spaceRight="x1" textColor="twitter" />
          @TwitterHandle • 6hrs
        </Paragraph>
        <Paragraph space="x2" textColor="subtle" textSize="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore:{' '}
          <Link href="https://goo.gl/4oWkDa">https://goo.gl/4oWkDa</Link>
          <Link href="https://goo.gl/4oWkDa"> #HashTag</Link>
        </Paragraph>
        <Grid
          gutters="small"
          responsive={false}
          space="x0"
          textColor="subtle"
          textSize="small"
          textStrong
          verticalAlign="middle"
        >
          <GridCell shrink>
            <Link style="subtle">
              <TextIcon name="retweet" /> 1
            </Link>
          </GridCell>

          <GridCell shrink>
            <Link style="subtle">
              <TextIcon name="heart" /> 6
            </Link>
          </GridCell>

          <GridCell>
            <Link style="subtle">
              <TextIcon name="reply" /> 0
            </Link>
          </GridCell>

          <GridCell shrink>
            <Badge color="success">
              <TextIcon name="preview" /> 44%
            </Badge>
          </GridCell>
        </Grid>
      </Fragment>
    );
  }
}

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase
          description="The matrix above illustrates the different card
            styles and configurations achievable. Shaded backgrounds and states are
            configurable through the props and will alter in the standard way for themes."
        >
          <Grid textCenter textColor="subtle">
            <GridCell>
              <Heading>Border</Heading>
              <Card border onClick={() => {}} space="x4">
                <CardContent>Default</CardContent>
              </Card>
              <Card border hover space="x4">
                <CardContent>Hover</CardContent>
              </Card>
              <Card active border space="x4">
                <CardContent>Active</CardContent>
              </Card>
            </GridCell>

            <GridCell>
              <Heading>Border & Shadow</Heading>
              <Card border onClick={() => {}} shadow space="x4">
                <CardContent>Default</CardContent>
              </Card>
              <Card border hover shadow space="x4">
                <CardContent>Hover</CardContent>
              </Card>
              <Card active border shadow space="x4">
                <CardContent>Active</CardContent>
              </Card>
            </GridCell>

            <GridCell>
              <Heading>Borderless</Heading>
              <Card onClick={() => {}} space="x4">
                <CardContent>Default</CardContent>
              </Card>
              <Card hover space="x4">
                <CardContent>Hover</CardContent>
              </Card>
              <Card active space="x4">
                <CardContent>Active</CardContent>
              </Card>
            </GridCell>

            <GridCell>
              <Heading>Borderless & Shadow</Heading>
              <Card onClick={() => {}} shadow space="x4">
                <CardContent>Default</CardContent>
              </Card>
              <Card hover shadow space="x4">
                <CardContent>Hover</CardContent>
              </Card>
              <Card active shadow space="x4">
                <CardContent>Active</CardContent>
              </Card>
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationShowCase>
          <CardExampleContainer>
            <Card onClick={() => {}} shadow>
              <CardImage src="/assets/card.jpg">
                <CardCaption textStrong>
                  <List style="inline">
                    <ListItem>edition.brandwatch.com</ListItem>
                    <ListItem>8hrs ago</ListItem>
                  </List>
                </CardCaption>
              </CardImage>

              <CardContent size="large">
                <CardExampleContent />
              </CardContent>
            </Card>
          </CardExampleContainer>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/Card'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/CardContent'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/CardImage'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/CardCaption'),
          ]}
        />

        <DocumentationShowCase>
          <Grid gutters="small" horizontalAlign="middle">
            <GridCell none>
              <CardExampleContainer>
                <Card shadow space="x4">
                  <CardImages srcs={['/assets/card-1.jpeg']} />
                  <CardContent size="large">
                    <CardExampleContent />
                  </CardContent>
                </Card>

                <Card shadow space="x4">
                  <CardImages
                    srcs={['/assets/card-1.jpeg', '/assets/card-2.jpeg']}
                  />
                  <CardContent size="large">
                    <CardExampleContent />
                  </CardContent>
                </Card>
              </CardExampleContainer>
            </GridCell>

            <GridCell none>
              <CardExampleContainer>
                <Card shadow space="x4">
                  <CardImages
                    srcs={[
                      '/assets/card-1.jpeg',
                      '/assets/card-2.jpeg',
                      '/assets/card-3.jpeg',
                    ]}
                  />
                  <CardContent size="large">
                    <CardExampleContent />
                  </CardContent>
                </Card>

                <Card shadow space="x4">
                  <CardImages
                    srcs={[
                      '/assets/card-1.jpeg',
                      '/assets/card-2.jpeg',
                      '/assets/card-3.jpeg',
                      '/assets/card-4.jpeg',
                    ]}
                  />
                  <CardContent size="large">
                    <CardExampleContent />
                  </CardContent>
                </Card>
              </CardExampleContainer>
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/CardImages'),
          ]}
        />

        <DocumentationShowCase>
          <CardList>
            <Card onClick={() => {}}>
              <CardContent>
                <Grid>
                  <GridCell none>
                    <Candytar size="4rem" />
                  </GridCell>
                  <GridCell>
                    <Heading textStrong>Lorem ipsum</Heading>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce at pretium erat. Aenean placerat quam leo, eu
                      consequat sem malesuada varius. In vitae nunc ut elit
                      auctor semper eget eu ex. Sed ultricies placerat lectus,
                      quis venenatis metus sagittis egestas.
                    </Paragraph>
                  </GridCell>
                </Grid>
              </CardContent>
            </Card>

            <Card onClick={() => {}}>
              <CardContent>
                <Grid>
                  <GridCell none>
                    <Candytar size="4rem" />
                  </GridCell>
                  <GridCell>
                    <Heading textStrong>Lorem ipsum</Heading>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce at pretium erat. Aenean placerat quam leo, eu
                      consequat sem malesuada varius. In vitae nunc ut elit
                      auctor semper eget eu ex. Sed ultricies placerat lectus,
                      quis venenatis metus sagittis egestas.
                    </Paragraph>
                  </GridCell>
                </Grid>
              </CardContent>
            </Card>

            <Card onClick={() => {}}>
              <CardContent>
                <Grid>
                  <GridCell none>
                    <Candytar size="4rem" />
                  </GridCell>
                  <GridCell>
                    <Heading textStrong>Lorem ipsum</Heading>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce at pretium erat. Aenean placerat quam leo, eu
                      consequat sem malesuada varius. In vitae nunc ut elit
                      auctor semper eget eu ex. Sed ultricies placerat lectus,
                      quis venenatis metus sagittis egestas.
                    </Paragraph>
                  </GridCell>
                </Grid>
              </CardContent>
            </Card>
          </CardList>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Card/CardList'),
          ]}
        />
      </DocumentationContent>
    );
  }
}

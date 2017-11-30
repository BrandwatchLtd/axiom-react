import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Badge from '../../badge/Badge';
import Card from '../Card';
import CardCaption from '../CardCaption';
import CardContent from '../CardContent';
import CardImage from '../CardImage';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Link from '../../typography/Link';
import List from '../../list/List';
import ListItem from '../../list/ListItem';
import Paragraph from '../../typography/Paragraph';
import TextIcon from '../../typography/TextIcon';

export default class CardExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Card: PropTypes.object.isRequired,
      CardCaption: PropTypes.object.isRequired,
      CardContent: PropTypes.object.isRequired,
      CardImage: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Card: components.Card,
      CardCaption: components.CardCaption,
      CardContent: components.CardContent,
      CardImage: components.CardImage,
    };

    const initialProps = {
      Card: {
        border: true,
        elevation: 'x1',
        onClick: () => {},
      },
      CardCaption: {},
      CardContent: {},
      CardImage: {},
    };

    const cardContent1 = (
      <CardContent key="body" size="large">
        <Paragraph space="x0" textStrong>Name Surname</Paragraph>
        <Paragraph space="x0" textColor="subtle">
          <TextIcon name="twitter" spaceRight="x1" textColor="twitter-blue" />
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
    );

    const cardContent2 = (
      <CardContent color="dark" key="header" separatorStyle="dotted">
        <Paragraph textStrong>Family workouts that strengthen bodies and bonds</Paragraph>
      </CardContent>
    );

    const cardImage = (
      <CardImage { ...initialProps.CardImage }
          key="image"
          src="assets/card.jpg" />
    );

    const cardCaption = (
      <CardCaption textStrong>
        <List style="inline">
          <ListItem>edition.brandwatch.com</ListItem>
          <ListItem>8hrs ago</ListItem>
        </List>
      </CardCaption>
    );

    const initialPropOptions = {
      Card: {
        children: {
          options: [{
            name: 'A simple body',
            children: cardContent1,
          }, {
            name: 'With an image',
            children: [cardImage, cardContent1],
          }, {
            name: 'With a header',
            children: [cardContent2, cardContent1],
          }, {
            name: 'With an image and header',
            children: [cardImage, cardContent2, cardContent1],
          }],
        },
      },
      CardImage: {
        children: {
          options: [{
            name: 'Nothing',
            children: null,
          }, {
            name: 'With caption',
            children: cardCaption,
          }],
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <div style={ { margin: 'auto', maxWidth: '16.375rem' } }>
          <Card { ...initialProps.Card }>
            { initialPropOptions.Card.children.options[1].children }
          </Card>
        </div>
      </ExampleConfig>
    );
  }
}

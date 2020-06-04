import React, { Component } from "react";
import Card from "./Card";
import CardContent from "./CardContent";
import CardImage from "./CardImage";
import CardCaption from "./CardCaption";
import CardList from "./CardList";
import List from "../List/List";
import ListItem from "../List/ListItem";
import Paragraph from "../Typography/Paragraph";
import TextIcon from "../Typography/TextIcon";
import Link from "../Typography/Link";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import Badge from "../Badge/Badge";
import Candytar from "../Avatar/Candytar";
import Heading from "../Typography/Heading";

export default {
  title: "Card",
  component: Card,
  subcomponents: { CardContent, CardCaption, CardImage, CardList },
};

class CardExampleContainer extends Component {
  render() {
    return (
      <div {...this.props} style={{ margin: "auto", maxWidth: "16.375rem" }} />
    );
  }
}

class CardExampleContent extends Component {
  render() {
    return (
      <React.Fragment>
        <Paragraph space="x0" textStrong>
          Name Surname
        </Paragraph>
        <Paragraph space="x0" textColor="subtle">
          <TextIcon name="twitter" spaceRight="x1" textColor="twitter" />
          @TwitterHandle • 6hrs
        </Paragraph>
        <Paragraph space="x2" textColor="subtle" textSize="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore:{" "}
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
          <Grid shrink>
            <Link style="subtle">
              <TextIcon name="retweet" /> 1
            </Link>
          </Grid>

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
      </React.Fragment>
    );
  }
}

export function Default() {
  return (
    <CardExampleContainer>
      <Card onClick={function () {}} shadow>
        <CardImage src="card.jpg">
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
  );
}

export function WithCardList({ style }) {
  return (
    <CardList style={style}>
      <Card>
        <CardContent>
          <Grid>
            <GridCell none>
              <Candytar size="4rem" />
            </GridCell>
            <GridCell>
              <Heading textStrong>Lorem ipsum</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at pretium erat. Aenean placerat quam leo, eu consequat sem
                malesuada varius. In vitae nunc ut elit auctor semper eget eu
                ex. Sed ultricies placerat lectus, quis venenatis metus sagittis
                egestas.
              </Paragraph>
            </GridCell>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Grid>
            <GridCell none>
              <Candytar size="4rem" />
            </GridCell>
            <GridCell>
              <Heading textStrong>Lorem ipsum</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at pretium erat. Aenean placerat quam leo, eu consequat sem
                malesuada varius. In vitae nunc ut elit auctor semper eget eu
                ex. Sed ultricies placerat lectus, quis venenatis metus sagittis
                egestas.
              </Paragraph>
            </GridCell>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Grid>
            <GridCell none>
              <Candytar size="4rem" />
            </GridCell>
            <GridCell>
              <Heading textStrong>Lorem ipsum</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at pretium erat. Aenean placerat quam leo, eu consequat sem
                malesuada varius. In vitae nunc ut elit auctor semper eget eu
                ex. Sed ultricies placerat lectus, quis venenatis metus sagittis
                egestas.
              </Paragraph>
            </GridCell>
          </Grid>
        </CardContent>
      </Card>
    </CardList>
  );
}

WithCardList.args = {
  style: "separate",
};

WithCardList.argTypes = {
  style: {
    control: { type: "select", options: ["divided", "seamless", "separate"] },
  },
};

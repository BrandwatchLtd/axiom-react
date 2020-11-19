import React from "react";
import Icon from "./Icon";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import iconNames from "./iconNames";

export default {
  title: "Icon",
  component: Icon,
};

export function Default(props) {
  return <Icon {...props} />;
}

Default.args = { name: "source" };

export function All() {
  return (
    <Grid responsive={false}>
      {iconNames.map((name) => (
        <GridCell key={name} width={25}>
          <Grid gutters="tiny" none responsive={false} verticalAlign="middle">
            <GridCell>
              <Icon name={name} size="3rem"/>
            </GridCell>

            <GridCell>{name}</GridCell>
          </Grid>
        </GridCell>
      ))}
    </Grid>
  );
}

const socailIcons = [
  "twitter",
  "facebook",
  "instagram",
  "reddit",
  "pinterest",
  "youtube",
  "qq",
  "tumblr",
  "4chan",
  "sina-weibo",
  "lexis-nexis",
  "vk",
];

export function Social() {
  return (
    <Grid responsive={false}>
      {socailIcons.map((name) => (
        <GridCell key={name} width={25}>
          <Grid gutters="tiny" none responsive={false} verticalAlign="middle">
            <GridCell>
              <Icon name={name} size="3rem"/>
            </GridCell>

            <GridCell>{name}</GridCell>
          </Grid>
        </GridCell>
      ))}
    </Grid>
  );
}
const socailIconsMono = [
  "twitter-mono",
  "facebook-mono",
  "instagram-mono",
  "reddit-mono",
  "pinterest-mono",
  "youtube-mono",
  "qq-mono",
  "tumblr-mono",
  "4chan-mono",
  "sina-weibo-mono",
  "lexis-nexis-mono",
  "vk-mono",
];

export function SocialMono() {
  return (
    <Grid responsive={false}>
      {socailIconsMono.map((name) => (
        <GridCell key={name} width={25}>
          <Grid gutters="tiny" none responsive={false} verticalAlign="middle">
            <GridCell>
              <Icon name={name} size="3rem"/>
            </GridCell>

            <GridCell>{name}</GridCell>
          </Grid>
        </GridCell>
      ))}
    </Grid>
  );
}

SocialMono.parameters = {
  docs: {
    description: {
      story:
        "Mono Icons will fill with the color of their parent. This can be useful when the color needs to change to provide contrast.",
    },
  },
};

import PropTypes from "prop-types";
import React, { Component } from "react";
import { DataPoints, DataPoint } from "@brandwatch/axiom-charts";
import {
  DropdownContext,
  DropdownContent,
  Grid,
  GridCell,
  Heading,
  List,
  ListItem,
  Paragraph,
  Small,
} from "@brandwatch/axiom-components";

export default class DropdownContextExample extends Component {
  static propTypes = {
    color: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string,
    style: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  };

  static defaultProps = {
    color: "deep-thought",
  };

  render() {
    const {
      color,
      colors = [color],
      label,
      value,
      style,
      ...rest
    } = this.props;

    return (
      <DropdownContext {...rest} width="17rem">
        <DropdownContent>
          <List style="inline" textCenter>
            <ListItem>
              <Grid gutters="tiny" responsive={false} verticalAlign="middle">
                <GridCell shrink>
                  <DataPoints size="1.5rem">
                    {colors.map((color) => (
                      <DataPoint color={color} key={color} style={style} />
                    ))}
                  </DataPoints>
                </GridCell>

                <GridCell shrink>
                  <Heading textSize="headline">{value}</Heading>
                </GridCell>
              </Grid>
            </ListItem>

            <ListItem>
              <Paragraph textCase="upper" textColor="subtle">
                <Small>{label}</Small>
              </Paragraph>
            </ListItem>
          </List>
        </DropdownContent>

        <DropdownContent>
          <Paragraph textColor="subtle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            laoreet gravida mauris vel ultricies.
          </Paragraph>
        </DropdownContent>
      </DropdownContext>
    );
  }
}

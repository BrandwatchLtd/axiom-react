import React from "react";
import Chip from "./Chip";
import ChipList from "./ChipList";

export default {
  title: "Chip",
  component: Chip,
  subcomponents: { ChipList },
};

export function Default() {
  return (
    <ChipList label="Topics">
      <Chip>Kyrie Irving</Chip>
      <Chip leftIcon="tick" metric="(65%)">
        Aron Baynes
      </Chip>
      <Chip rightIcon="cross">Jaylen Brown</Chip>
      <Chip disabled>Jayson Tatum</Chip>
      <Chip active metric="(1%)">
        Al Horford
      </Chip>
    </ChipList>
  );
}

export function InputChips(props) {
  return (
    <ChipList>
      <Chip rightIcon="cross">Gaming</Chip>
      <Chip valid rightIcon="cross">
        Music
      </Chip>
      <Chip invalid rightIcon="cross">
        Art
      </Chip>
      <Chip disabled rightIcon="cross">
        Sports
      </Chip>
    </ChipList>
  );
}

InputChips.parameters = {
  docs: {
    description: {
      story:
        "Input chips represent a user entry in a compact form. The text entered by the user is validated and converted into chips",
    },
  },
};

export function ChoiceChips(props) {
  return (
    <ChipList>
      <Chip>Journalist</Chip>
      <Chip active leftIcon={"tick"}>
        Artist
      </Chip>
    </ChipList>
  );
}

ChoiceChips.parameters = {
  docs: {
    description: {
      story:
        "Choice chips allow the user to select one or more options from a set. They're useful to filter content and in some cases can be a good alternative to checkboxes.",
    },
  },
};

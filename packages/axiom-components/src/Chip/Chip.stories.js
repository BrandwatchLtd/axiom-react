import React, { useState } from "react";
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

export function InputChips() {
  const CHIPS = [
    { name: "Gaming", id: 1 },
    { name: "Music", id: 2, disabled: true },
    { name: "Art", id: 3, invalid: true },
    { name: "Sports", id: 4, valid: true },
  ];
  const [chips, setChips] = useState(CHIPS);

  const handleClick = (chipIdToRemove) => {
    setChips(chips?.filter(({ id }) => id !== chipIdToRemove));
  };

  return (
    <ChipList>
      {chips.map(({ name, id, valid, invalid, disabled }) => (
        <Chip
          key={id}
          invalid={invalid}
          valid={valid}
          disabled={disabled}
          rightIcon="cross"
          onClick={() => handleClick(id)}
        >
          {name}
        </Chip>
      ))}
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

export function ChoiceChips() {
  const [selectedChips, setSelectedChips] = useState({ 2: true });

  const CHIPS = [
    { name: "Journalist", id: 1 },
    { name: "Artist", id: 2 },
  ];

  const handleClick = (id) => {
    setSelectedChips((chips) => ({ ...chips, [id]: !chips[id] }));
  };

  return (
    <ChipList>
      {CHIPS.map(({ name, id }) => (
        <Chip
          active={selectedChips[id]}
          onClick={() => handleClick(id)}
          leftIcon={selectedChips[id] ? "tick" : null}
          key={id}
        >
          {name}
        </Chip>
      ))}
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

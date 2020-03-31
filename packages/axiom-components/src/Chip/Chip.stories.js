import React from 'react';
import Chip from './Chip';
import ChipList from './ChipList';

export default {
  title: 'Components/Chip',
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
      <Chip active metric="(1%)" rightIcon="cross">
        Al Horford
      </Chip>
    </ChipList>
  );
}

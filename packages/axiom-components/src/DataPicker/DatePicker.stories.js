import React, { useState } from "react";
import DataPicker from "./DataPicker";
import DataPickerMeta from "./DataPickerMeta";
import DataPickerDropdown from "./DataPickerDropdown";
import DropdownMenu from "../Dropdown/DropdownMenu";
import DropdownMenuItem from "../Dropdown/DropdownMenuItem";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import Icon from "../Icon/Icon";
import Small from "../Typography/Small";

export default {
  title: "DataPicker",
  component: DataPicker,
};

export function Default() {
  const [color, setColor] = useState("new-horizon");

  return (
    <DataPicker
      color={color}
      onSelectColor={(color) => setColor(color)}
      placeholder="Please select a value"
    >
      <DataPickerDropdown>
        <DropdownMenu>
          <DropdownMenuItem disabled>Clear Selection</DropdownMenuItem>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuItem onClick={() => {}}>
            Consectetur adipiscing elit
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => {}} selected>
            Lorem ipsum dolar sit amet
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => {}}>
            Etiam eget diam faucibus
          </DropdownMenuItem>
        </DropdownMenu>
      </DataPickerDropdown>

      <DataPickerMeta>
        <Grid
          gutters="tiny"
          none
          responsive={false}
          textColor="subtle"
          verticalAlign="middle"
          wrap={false}
        >
          <GridCell>
            <Icon name="followers" />
          </GridCell>

          <GridCell>
            <Small textStrong>4.1k</Small>
          </GridCell>
        </Grid>
      </DataPickerMeta>
    </DataPicker>
  );
}

/* eslint-disable no-console */
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import DropdownTarget from "./DropdownTarget";
import DropdownSource from "./DropdownSource";
import DropdownContext from "./DropdownContext";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownContent from "./DropdownContent";
import DropdownHeader from "./DropdownHeader";
import DropdownFooter from "./DropdownFooter";
import TextInput from "../Form/TextInput";
import TextInputIcon from "../Form/TextInputIcon";
import IconButton from "../Icon/IconButton";
import Link from "../Typography/Link";
import TextIcon from "../Typography/TextIcon";
import Paragraph from "../Typography/Paragraph";
import Button from "../Button/Button";

import "./Dropdown.stories.css";

export default {
  title: "Dropdown",
  component: Dropdown,
  subcomponents: {
    DropdownTarget,
    DropdownSource,
    DropdownContext,
    DropdownContent,
    DropdownMenu,
    DropdownMenuItem,
  },
  includeStories: [],
};

export function MenuDropdown() {
  return (
    <Dropdown showArrow>
      <DropdownTarget>
        <IconButton name="ellipsis" size="small" />
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <DropdownMenu>
            <DropdownMenuItem>electric-dreams</DropdownMenuItem>
            <DropdownMenuItem>sun-maker</DropdownMenuItem>
            <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
            <DropdownMenuItem>fantastic-voyage</DropdownMenuItem>
            <DropdownMenuItem>giant-leap</DropdownMenuItem>
            <DropdownMenuItem>primeval-soup</DropdownMenuItem>
          </DropdownMenu>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}

export const MenuDropdownJsx = `
<Dropdown showArrow>
  <DropdownTarget>
    <IconButton name="ellipsis" size="small" />
  </DropdownTarget>
  <DropdownSource>
    <DropdownContext>
      <DropdownMenu>
        <DropdownMenuItem>electric-dreams</DropdownMenuItem>
        <DropdownMenuItem>sun-maker</DropdownMenuItem>
        <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
        <DropdownMenuItem>fantastic-voyage</DropdownMenuItem>
        <DropdownMenuItem>giant-leap</DropdownMenuItem>
        <DropdownMenuItem>primeval-soup</DropdownMenuItem>
      </DropdownMenu>
    </DropdownContext>
  </DropdownSource>
</Dropdown>`;

export function CustomDropdown() {
  return (
    <Dropdown>
      <DropdownTarget>
        <IconButton name="question-mark" size="small" />
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "pink",
                color: "white",
                height: "20px",
                width: "20px",
              }}
            />
            <div>A pink Box</div>
          </div>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}

export const CustomDropdownJsx = `
<Dropdown>
  <DropdownTarget>
    <IconButton name="question-mark" size="small" />
  </DropdownTarget>
  <DropdownSource>
    <DropdownContext>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "pink",
            color: "white",
            height: "20px",
            width: "20px",
          }}
        />
        <div>A pink Box</div>
      </div>
    </DropdownContext>
  </DropdownSource>
</Dropdown>`;

const items = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  name: `item-${index}`,
  value: `${index}`,
}));

export function DropdownWithState() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Dropdown>
      <DropdownTarget>
        <TextInput
          isTarget
          onChange={() => {}}
          placeholder="Pick an Option"
          value={selectedValue}
        >
          <TextInputIcon name="chevron-down" />
        </TextInput>
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <DropdownMenu>
            {items.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => setSelectedValue(item.value)}
                selected={selectedValue === item.value}
              >
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenu>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}

export const DropdownWithStateJsx = `
function DropdownWithState() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Dropdown>
      <DropdownTarget>
        <TextInput
          isTarget
          onChange={() => {}}
          placeholder="Pick an Option"
          value={selectedValue}
        >
          <TextInputIcon name="chevron-down" />
        </TextInput>
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <DropdownMenu>
            {items.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => setSelectedValue(item.value)}
                selected={selectedValue === item.value}
              >
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenu>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}`;

export function DropdownLink() {
  return (
    <Dropdown>
      <DropdownTarget>
        <Link>
          Click Me
          <TextIcon name="chevron-down" spaceLeft="x1" />
        </Link>
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <DropdownMenu>
            <DropdownMenuItem>electric-dreams</DropdownMenuItem>
            <DropdownMenuItem>sun-maker</DropdownMenuItem>
            <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
            <DropdownMenuItem>fantastic-voyage</DropdownMenuItem>
            <DropdownMenuItem>giant-leap</DropdownMenuItem>
            <DropdownMenuItem>primeval-soup</DropdownMenuItem>
          </DropdownMenu>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}

export const DropdownLinkJsx = `    
<Dropdown>
  <DropdownTarget>
    <Link>
      Click Me
      <TextIcon name="chevron-down" spaceLeft="x1" />
    </Link>
  </DropdownTarget>
  <DropdownSource>
    <DropdownContext>
      <DropdownMenu>
        <DropdownMenuItem>electric-dreams</DropdownMenuItem>
        <DropdownMenuItem>sun-maker</DropdownMenuItem>
        <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
        <DropdownMenuItem>fantastic-voyage</DropdownMenuItem>
        <DropdownMenuItem>giant-leap</DropdownMenuItem>
        <DropdownMenuItem>primeval-soup</DropdownMenuItem>
      </DropdownMenu>
    </DropdownContext>
  </DropdownSource>
</Dropdown>`;

export function DropdownMenuMutiSelect() {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (itemId) => {
    setSelectedItems((items) => {
      if (items.includes(itemId)) return items.filter((id) => id !== itemId);

      return items.concat(itemId);
    });
  };

  return (
    <Dropdown>
      <DropdownTarget>
        <TextInput
          isTarget
          onChange={() => {}}
          placeholder="Pick an Option"
          value={selectedItems.toString()}
        >
          <TextInputIcon name="chevron-down" />
        </TextInput>
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <DropdownMenu style={{ boxSizing: "border-box" }}>
            {items.map((item) => (
              <DropdownMenuItem
                key={item.id}
                multiSelect
                onClick={() => toggleItem(item.id)}
                selected={selectedItems.includes(item.id)}
              >
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenu>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}

export const DropdownMenuMutiSelectJsx = `
function DropdownMenuMutiSelect({items}) {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (itemId) => {
    setSelectedItems((items) => {
      if (items.includes(itemId)) return items.filter((id) => id !== itemId);

      return items.concat(itemId);
    });
  };

  return (
    <Dropdown>
      <DropdownTarget>
        <TextInput
          isTarget
          onChange={() => {}}
          placeholder="Pick an Option"
          value={selectedItems.toString()}
        >
          <TextInputIcon name="chevron-down" />
        </TextInput>
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <DropdownMenu style={{ boxSizing: "border-box" }}>
            {items.map((item) => (
              <DropdownMenuItem
                key={item.id}
                multiSelect
                onClick={() => toggleItem(item.id)}
                selected={selectedItems.includes(item.id)}
              >
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenu>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}`;

export function DropdownMenuGroups() {
  return (
    <Dropdown>
      <DropdownTarget>
        <TextInput isTarget placeholder="Pick an Option">
          <TextInputIcon name="chevron-down" />
        </TextInput>
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <DropdownMenu>
            <DropdownMenuItem>electric-dreams</DropdownMenuItem>
            <DropdownMenuItem>sun-maker</DropdownMenuItem>
            <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuItem>fantastic-voyage</DropdownMenuItem>
            <DropdownMenuItem>giant-leap</DropdownMenuItem>
            <DropdownMenuItem>primeval-soup</DropdownMenuItem>
          </DropdownMenu>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}

export const DropdownMenuGroupsJsx = `
<Dropdown>
  <DropdownTarget>
    <TextInput isTarget placeholder="Pick an Option">
      <TextInputIcon name="chevron-down" />
    </TextInput>
  </DropdownTarget>
  <DropdownSource>
    <DropdownContext>
      <DropdownMenu>
        <DropdownMenuItem>electric-dreams</DropdownMenuItem>
        <DropdownMenuItem>sun-maker</DropdownMenuItem>
        <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuItem>fantastic-voyage</DropdownMenuItem>
        <DropdownMenuItem>giant-leap</DropdownMenuItem>
        <DropdownMenuItem>primeval-soup</DropdownMenuItem>
      </DropdownMenu>
    </DropdownContext>
  </DropdownSource>
</Dropdown>`;

export function DropdownMenuHeaderFooter() {
  return (
    <Dropdown>
      <DropdownTarget>
        <TextInput isTarget placeholder="Pick an Option">
          <TextInputIcon name="chevron-down" />
        </TextInput>
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <DropdownHeader>
            <Paragraph
              textCase="upper"
              textCenter
              textColor="subtle"
              textSize="small"
            >
              Header
            </Paragraph>
          </DropdownHeader>
          <DropdownMenu hasFullSeparator maxHeight="15rem">
            <DropdownMenuItem>electric-dreams</DropdownMenuItem>
            <DropdownMenuItem>sun-maker</DropdownMenuItem>
            <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
          </DropdownMenu>
          <DropdownFooter>
            <Paragraph
              textCase="upper"
              textCenter
              textColor="subtle"
              textSize="small"
            >
              Footer
            </Paragraph>
          </DropdownFooter>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}

export const DropdownMenuHeaderFooterJsx = `
<Dropdown>
  <DropdownTarget>
    <TextInput isTarget placeholder="Pick an Option">
      <TextInputIcon name="chevron-down" />
    </TextInput>
  </DropdownTarget>
  <DropdownSource>
    <DropdownContext>
      <DropdownHeader>
        <Paragraph
          textCase="upper"
          textCenter
          textColor="subtle"
          textSize="small"
        >
          Header
        </Paragraph>
      </DropdownHeader>
      <DropdownMenu hasFullSeparator maxHeight="15rem">
        <DropdownMenuItem>electric-dreams</DropdownMenuItem>
        <DropdownMenuItem>sun-maker</DropdownMenuItem>
        <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
      </DropdownMenu>
      <DropdownFooter>
        <Paragraph
          textCase="upper"
          textCenter
          textColor="subtle"
          textSize="small"
        >
          Footer
        </Paragraph>
      </DropdownFooter>
    </DropdownContext>
  </DropdownSource>
</Dropdown>`;

export function DropdownWithContent() {
  return (
    <Dropdown>
      <DropdownTarget>
        <TextInput isTarget placeholder="Pick an Option">
          <TextInputIcon name="chevron-down" />
        </TextInput>
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext>
          <DropdownContent>
            <DropdownMenu>
              <DropdownMenuItem>electric-dreams</DropdownMenuItem>
              <DropdownMenuItem>sun-maker</DropdownMenuItem>
              <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
              <DropdownMenuItem>fantastic-voyage</DropdownMenuItem>
              <DropdownMenuItem>giant-leap</DropdownMenuItem>
              <DropdownMenuItem>primeval-soup</DropdownMenuItem>
            </DropdownMenu>
          </DropdownContent>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}

export function ClosingTheDropdown() {
  const dropdownRef = React.useRef();

  const closeDropdown = () => {
    dropdownRef.current.close();
  };

  return (
    <React.Fragment>
      <div>
        <Button onClick={() => dropdownRef.current.open()}>
          Open without Target
        </Button>
      </div>
      <Dropdown ref={dropdownRef}>
        <DropdownTarget>
          <Button size="small" variant="secondary">
            Open
          </Button>
        </DropdownTarget>
        <DropdownSource>
          <DropdownContext width="100%">
            <Button onClick={closeDropdown} size="small" variant="secondary">
              Close
            </Button>
          </DropdownContext>
        </DropdownSource>
      </Dropdown>
    </React.Fragment>
  );
}

export const ClosingTheDropdownJsx = `
function ClosingTheDropdown() {
  const dropdownRef = React.useRef();

  const closeDropdown = () => {
    dropdownRef.current.close();
  };

  return (
    <React.Fragment>
      <div>
        <Button onClick={() => dropdownRef.current.open()}>
          Open without Target
        </Button>
      </div>
      <Dropdown ref={dropdownRef}>
        <DropdownTarget>
          <Button size="small" variant="secondary">
            Open
          </Button>
        </DropdownTarget>
        <DropdownSource>
          <DropdownContext width="100%">
            <Button onClick={closeDropdown} size="small" variant="secondary">
              Close
            </Button>
          </DropdownContext>
        </DropdownSource>
      </Dropdown>
    </React.Fragment>
  );
}`;

export function SourceSameWidthAsTarget() {
  const width = "150px";

  return (
    <div style={{ width }}>
      <Dropdown>
        <DropdownTarget>
          <TextInput isTarget placeholder="Pick an Option">
            <TextInputIcon name="chevron-down" />
          </TextInput>
        </DropdownTarget>
        <DropdownSource>
          <DropdownContext width={width}>
            <DropdownMenu>
              <DropdownMenuItem>electric-dreams</DropdownMenuItem>
              <DropdownMenuItem>sun-maker</DropdownMenuItem>
              <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
              <DropdownMenuItem>fantastic-voyage</DropdownMenuItem>
              <DropdownMenuItem>giant-leap</DropdownMenuItem>
              <DropdownMenuItem>primeval-soup</DropdownMenuItem>
            </DropdownMenu>
          </DropdownContext>
        </DropdownSource>
      </Dropdown>
    </div>
  );
}

export const SourceSameWidthAsTargetJsx = `
function SourceSameWidthAsTarget() {
  const width = "150px";

  return (
    <div style={{ width }}>
      <Dropdown>
        <DropdownTarget>
          <TextInput isTarget placeholder="Pick an Option">
            <TextInputIcon name="chevron-down" />
          </TextInput>
        </DropdownTarget>
        <DropdownSource>
          <DropdownContext width={width}>
            <DropdownMenu>
              <DropdownMenuItem>electric-dreams</DropdownMenuItem>
              <DropdownMenuItem>sun-maker</DropdownMenuItem>
              <DropdownMenuItem>tiny-clanger</DropdownMenuItem>
              <DropdownMenuItem>fantastic-voyage</DropdownMenuItem>
              <DropdownMenuItem>giant-leap</DropdownMenuItem>
              <DropdownMenuItem>primeval-soup</DropdownMenuItem>
            </DropdownMenu>
          </DropdownContext>
        </DropdownSource>
      </Dropdown>
    </div>
  );
}`;

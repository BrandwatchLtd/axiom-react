import React from "react";
import { colors as axiomColors } from "@brandwatch/axiom-materials";
import {
  Card,
  CardContent,
  Table,
  TableHeader,
  TableHeaderLabel,
  TableBody,
  TableRow,
  TableCell,
} from "@brandwatch/axiom-components";
import { CSSGlobalVariables } from "css-global-variables";
let cssVar = new CSSGlobalVariables();

function ColorDot({ rgb }) {
  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: rgb,
      }}
    />
  );
}

function ColorLetter({ rgb }) {
  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: `rgba(${Object.values(rgb)})`,
      }}
    />
  );
}
/* {colors.map(({ rgb, name }) => (
              <TableRow key="name">
                <TableCell>{name}</TableCell>
                <TableCell>
                  <ColorLetter name={name} rgb={rgb} />
                </TableCell>
              </TableRow>
            ))} */
export function CssVariableTable() {
  const cssColorRegex = /(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\))/i;

  const notColorKeys = Object.keys(cssVar).filter((key) => {
    const value = cssVar[key];
    return (
      !cssColorRegex.test(value?.replace(/\s+/g, "")) && !key.includes("rgb")
    );
  });

  return (
    <Table>
      <TableHeader>
        <TableHeaderLabel>CSS variable Name</TableHeaderLabel>
        <TableHeaderLabel>Value</TableHeaderLabel>
      </TableHeader>

      <TableBody>
        {notColorKeys.map((key) => (
          <TableRow
            key={key}
            onClick={async () => {
              const cssVariableString = `var(${key});`;
              await navigator.clipboard.writeText(cssVariableString);
            }}
          >
            <TableCell className="css-var-name">{key}</TableCell>
            <TableCell>{cssVar[key]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function CssColorVariableTable() {
  const cssColorRegex = /(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\))/i;

  const colorKeys = Object.keys(cssVar).filter((key) => {
    const value = cssVar[key];
    return (
      cssColorRegex.test(value?.replace(/\s+/g, "")) && !key.includes("rgb")
    );
  });

  return (
    <Table>
      <TableHeader>
        <TableHeaderLabel>CSS variable Name</TableHeaderLabel>
        <TableHeaderLabel>Value</TableHeaderLabel>
        <TableHeaderLabel>Color</TableHeaderLabel>
      </TableHeader>

      <TableBody>
        {colorKeys.map((key) => (
          <TableRow
            key={key}
            onClick={async () => {
              const cssVariableString = `var(${key});`;
              await navigator.clipboard.writeText(cssVariableString);
            }}
          >
            <TableCell className="css-var-name">{key}</TableCell>
            <TableCell>{cssVar[key]}</TableCell>
            <TableCell>
              <ColorDot rgb={cssVar[key]} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

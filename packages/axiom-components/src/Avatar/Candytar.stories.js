import React from "react";
import Candytar from "./Candytar";

export default {
  title: "Candytar",
  component: Candytar,
};

export function Initials() {
  return <Candytar initials="bw" size="3rem" />;
}

export function Anonymous() {
  return <Candytar size="3rem" />;
}

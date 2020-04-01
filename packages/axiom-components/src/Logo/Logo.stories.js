import React from "react";
import Logo from "./Logo";
import LogoBox from "./LogoBox";
import LogoTab from "./LogoTab";
import LogoHorizontal from "./LogoHorizontal";

export default {
  title: "Components/Logo",
  component: Logo,
};

export function AsLogoBox() {
  return <LogoBox color="grey" width="6rem" />;
}

export function AsLogoTab() {
  return <LogoTab color="grey" width="6rem" />;
}

export function AsLogoHorizontal() {
  return <LogoHorizontal width="12rem" />;
}

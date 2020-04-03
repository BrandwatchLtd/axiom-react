import React, { useState } from "react";
import Platform from "./Platform";
import Dock from "./Dock";
import DockItem from "./DockItem";
import DockIconLink from "./DockIconLink";
import DockHeader from "./DockHeader";
import DockFooter from "./DockFooter";
import Console from "./Console";
import ConsoleHeader from "./ConsoleHeader";
import Canvas from "./Canvas";
import CanvasHeader from "./CanvasHeader";
import ConsoleMenu from "./ConsoleMenu";
import ConsoleMenuHeader from "./ConsoleMenuHeader";
import ConsoleMenuHeaderTitle from "./ConsoleMenuHeaderTitle";
import ConsoleMenuItem from "./ConsoleMenuItem";
import PlatformTitle from "./PlatformTitle";
import Heading from "../Typography/Heading";

export default {
  title: "Components/Platform",
  component: Platform,
  subcomponents: {
    Dock,
    DockItem,
    DockIconLink,
    DockHeader,
    DockFooter,
    Console,
    ConsoleHeader,
    Canvas,
    CanvasHeader,
    ConsoleMenu,
    ConsoleMenuHeader,
    ConsoleMenuHeaderTitle,
    ConsoleMenuItem,
    PlatformTitle,
  },
};

export function BasicExample() {
  const [openCanvas, setOpenCanvas] = useState("home");
  const [openConsolePosition, setOpenConsolePosition] = useState("left");

  const openConsole = () => setOpenConsolePosition("left");
  const closeConsole = () => setOpenConsolePosition("right");

  function renderCanvas() {
    switch (openCanvas) {
      case "folder":
        return (
          <Canvas>
            <CanvasHeader>
              <Heading>Folder Canvas</Heading>
            </CanvasHeader>
          </Canvas>
        );
      case "followers":
        return (
          <Canvas>
            <CanvasHeader>
              <Heading>Followers Canvas</Heading>
            </CanvasHeader>
          </Canvas>
        );
      default:
        return (
          <Canvas>
            <CanvasHeader>
              <Heading>Home Canvas</Heading>
            </CanvasHeader>
          </Canvas>
        );
    }
  }

  return (
    <Platform
      onConsoleClose={closeConsole}
      openConsolePosition={openConsolePosition}
      openConsoleWidth="26.25rem"
    >
      <Dock>
        <DockHeader>
          <DockIconLink
            active={openCanvas === "home"}
            icon="home"
            onClick={() => {
              setOpenCanvas("home");
              openConsole();
            }}
            title="Home"
          />
        </DockHeader>
        <DockIconLink
          active={openCanvas === "folder"}
          icon="folder"
          onClick={() => setOpenCanvas("folder")}
          title="folder"
        />
        <DockIconLink
          active={openCanvas === "followers"}
          icon="followers"
          onClick={() => setOpenCanvas("followers")}
          title="folder"
        />
        <DockFooter>
          <DockIconLink icon="customise" title="customise" />
        </DockFooter>
      </Dock>
      <Console position={"left"} width="26.25rem">
        <ConsoleHeader separator={true} size="large">
          ConsoleHeader
        </ConsoleHeader>
        <ConsoleMenu>
          <ConsoleMenuHeader>
            <ConsoleMenuHeaderTitle>Console Menu Header</ConsoleMenuHeaderTitle>
          </ConsoleMenuHeader>
          <ConsoleMenuItem>ConsoleMenuItem</ConsoleMenuItem>
          <ConsoleMenuItem>ConsoleMenuItem</ConsoleMenuItem>
        </ConsoleMenu>
      </Console>
      {renderCanvas()}
    </Platform>
  );
}

export function UsingConsoleWithoutPlatorm() {
  return (
    <ConsoleHeader separator={true} size="large">
      ConsoleHeader
    </ConsoleHeader>
  );
}

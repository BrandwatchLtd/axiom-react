import React from "react";

const PlatformContext = React.createContext({
  onConsoleClose: null,
  openConsolePosition: null,
  openConsoleWidth: null,
});

export default PlatformContext;

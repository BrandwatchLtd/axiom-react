import React from "react";
import Image from "./Image";
import AlertBar from "../AlertBar/AlertBar";

export default {
  title: "Components/Image",
  component: Image,
};

export function Default() {
  return (
    <Image src="/avatar.png">
      <AlertBar type="error">Image failed to load</AlertBar>
    </Image>
  );
}

export function WithFallback() {
  return (
    <Image src="badPath">
      <AlertBar type="error">Image failed to load</AlertBar>
    </Image>
  );
}

export function Shape() {
  return (
    <div>
      <Image shape="square" src="/avatar.png" width="50px" />
      <Image shape="circle" src="/avatar.png" width="50px" />
      <Image shape="rounded" src="/avatar.png" width="50px" />
    </div>
  );
}

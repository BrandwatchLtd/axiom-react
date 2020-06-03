import React from "react";
import PropTypes from "prop-types";
import Lozenge from "./Lozenge";
import LozengeGroup from "./LozengeGroup";
import Progress from "../Progress/Progress";

export default {
  title: "Lozenge",
  component: Lozenge,
};

export function Default(props) {
  return <Lozenge {...props}>Default Lozenge</Lozenge>;
}

Default.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export function StatusLozenges() {
  return (
    <LozengeGroup>
      <Lozenge status="success">done</Lozenge>
      <Lozenge status="warning">warning</Lozenge>
      <Lozenge status="error">error</Lozenge>
      <Lozenge status="info">info</Lozenge>
      <Lozenge status="loading">Loading</Lozenge>
    </LozengeGroup>
  );
}

export function SocialMediaLozenges() {
  return (
    <LozengeGroup>
      <Lozenge color="social-facebook">Facebook</Lozenge>
      <Lozenge color="social-twitter">Twitter</Lozenge>
      <Lozenge color="social-instagram">Instagram</Lozenge>
      <Lozenge color="social-reddit">Reddit</Lozenge>
      <Lozenge color="social-tumblr">Tumbler</Lozenge>
      <Lozenge color="social-youtube">Youtube</Lozenge>
    </LozengeGroup>
  );
}

export function AttributeLozenges() {
  return (
    <LozengeGroup>
      <Lozenge color="luna-dust">Teacher</Lozenge>
      <Lozenge color="rocky-planet">Baker</Lozenge>
      <Lozenge color="space-invader">Rock</Lozenge>
      <Lozenge color="critical-mass">Country</Lozenge>
      <Lozenge color="fantastic-voyage">Videos</Lozenge>
      <Lozenge color="paradise-lost">Music</Lozenge>
      <Lozenge color="serene-sea">Pictures</Lozenge>
    </LozengeGroup>
  );
}

export function GroupedLozenges() {
  return (
    <LozengeGroup>
      <Lozenge color="luna-dust">Teacher</Lozenge>
      <Lozenge color="rocky-planet">United States</Lozenge>
      <Lozenge color="space-invader">United States</Lozenge>
      <Lozenge color="critical-mass">Teacher</Lozenge>
      <Lozenge color="fantastic-voyage">United States</Lozenge>
      <Lozenge color="paradise-lost">Teacher</Lozenge>
      <Lozenge color="serene-sea">United States</Lozenge>
    </LozengeGroup>
  );
}

export function ClippedText() {
  return (
    <Lozenge>
      Lozenge's have a max width, overflow text will show on hover
    </Lozenge>
  );
}

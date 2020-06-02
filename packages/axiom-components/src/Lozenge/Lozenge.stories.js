import React from "react";
import PropTypes from "prop-types";
import Lozenge from "./Lozenge";
import LozengeGroup from "./LozengeGroup";

export default {
  title: "Lozenge",
  component: Lozenge,
};

export function Default({ children = "Default Lozenge", ...rest }) {
  return <Lozenge {...rest}>{children}</Lozenge>;
}

Default.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export function StatusLozenges() {
  return <Lozenge type="success">Done</Lozenge>;
}

export function AttributeLozenges() {
  return <Lozenge color="social-facebook">Facebook</Lozenge>;
}

export function LozengesInGroups() {
  return (
    <LozengeGroup>
      <Lozenge color="luna-dust">Teacher</Lozenge>
      <Lozenge color="rocky-planet">United States</Lozenge>
    </LozengeGroup>
  );
}

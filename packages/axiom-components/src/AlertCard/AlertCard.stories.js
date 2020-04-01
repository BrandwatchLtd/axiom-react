import React, { useState } from "react";
import AlertCard from "./AlertCard";

export default {
  title: "Components/AlertCard",
  component: AlertCard,
};

export function Info() {
  return <AlertCard shade="shade-2">Info AlertCard</AlertCard>;
}

export function Success() {
  return (
    <AlertCard shade="shade-2" type="success">
      Success AlertCard
    </AlertCard>
  );
}

export function Error() {
  return (
    <AlertCard shade="shade-2" type="error">
      Error AlertCard
    </AlertCard>
  );
}

export function Warning() {
  return (
    <AlertCard shade="shade-2" type="warning">
      Warning AlertCard
    </AlertCard>
  );
}

export function Dismissible() {
  const [showAlert, setShowAlert] = useState(true);
  const hideAlert = () => setShowAlert(false);

  return (
    <React.Fragment>
      {showAlert && (
        <AlertCard onRemoveClick={hideAlert} shade="shade-2">
          Info AlertCard
        </AlertCard>
      )}
    </React.Fragment>
  );
}

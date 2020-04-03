import React from "react";
import Cloak from "./Cloak";
import CloakContainer from "./CloakContainer";
import Card from "../Card/Card";
import CardContent from "../Card/CardContent";
import IconButton from "../Icon/IconButton";
import Heading from "../Typography/Heading";
import Base from "../Base/Base";

export default {
  title: "Components/Cloak",
  component: Cloak,
};

export function WithComponent() {
  return (
    <CloakContainer>
      <Card border>
        <CardContent>
          <Heading>Hover to reveal</Heading>
          <Cloak invisible>
            <IconButton name="ellipsis" />
          </Cloak>
        </CardContent>
      </Card>
    </CloakContainer>
  );
}

export function WithBase() {
  return (
    <Card border cloakContainer>
      <CardContent>
        <Heading>Hover to reveal</Heading>
        <Base cloak>
          <IconButton name="ellipsis" />
        </Base>
      </CardContent>
    </Card>
  );
}

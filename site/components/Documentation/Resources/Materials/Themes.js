import React, { Component, Fragment } from "react";
import { Card, CardContent } from "@brandwatch/axiom-components";
import { colors } from "@brandwatch/axiom-materials";
import ColorGrid from "./Colors/ColorGrid";
import ColorSet from "./Colors/ColorSet";
import ColorDot from "./Colors/ColorDot";
import ColorLetter from "./Colors/ColorLetter";

export default class Documentation extends Component {
  render() {
    return (
      <Fragment>
        <Card shadow size="large" theme="night">
          <CardContent size="large">
            <ColorGrid name="Night theme">
              <ColorSet name="Text">
                <ColorLetter name="Default" rgb={colors.themeNightText} />
                <ColorLetter name="Subtle" rgb={colors.themeNightTextSubtle} />
                <ColorLetter
                  name="Disabled"
                  rgb={colors.themeNightTextDisabled}
                />
              </ColorSet>

              <ColorSet name="Background">
                <ColorDot
                  name="Overlay Heavy"
                  rgb={colors.themeNightBackgroundOverlayHeavy}
                />
                <ColorDot
                  name="Overlay Light"
                  rgb={colors.themeNightBackgroundOverlayLight}
                />
                <ColorDot
                  name="Subtle"
                  rgb={colors.themeNightBackgroundSubtle}
                />
                <ColorDot
                  name="Active"
                  rgb={colors.themeNightBackgroundActive}
                />
                <ColorDot
                  name="Disabled"
                  rgb={colors.themeNightBackgroundDisabled}
                />
                <ColorDot name="Hover" rgb={colors.themeNightBackgroundHover} />
              </ColorSet>

              <ColorSet name="Border">
                <ColorDot name="Default" rgb={colors.themeNightBorder} />
              </ColorSet>
            </ColorGrid>
          </CardContent>
        </Card>

        <Card shadow size="large" space="x8" theme="day">
          <CardContent size="large">
            <ColorGrid name="Day theme">
              <ColorSet name="Text">
                <ColorLetter name="Default" rgb={colors.themeDayText} />
                <ColorLetter name="Subtle" rgb={colors.themeDayTextSubtle} />
                <ColorLetter
                  name="Disabled"
                  rgb={colors.themeDayTextDisabled}
                />
              </ColorSet>

              <ColorSet name="Background">
                <ColorDot
                  name="Overlay Heavy"
                  rgb={colors.themeDayBackgroundOverlayHeavy}
                />
                <ColorDot
                  name="Overlay Light"
                  rgb={colors.themeDayBackgroundOverlayLight}
                />
                <ColorDot name="Subtle" rgb={colors.themeDayBackgroundSubtle} />
                <ColorDot name="Active" rgb={colors.themeDayBackgroundActive} />
                <ColorDot
                  name="Disabled"
                  rgb={colors.themeDayBackgroundDisabled}
                />
                <ColorDot name="Hover" rgb={colors.themeDayBackgroundHover} />
              </ColorSet>

              <ColorSet name="Border">
                <ColorDot name="Default" rgb={colors.themeDayBorder} />
              </ColorSet>
            </ColorGrid>
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

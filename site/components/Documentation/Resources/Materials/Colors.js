import React, { Component, Fragment } from "react";
import { colors } from "@brandwatch/axiom-materials";
import ColorGrid from "./Colors/ColorGrid";
import ColorSet from "./Colors/ColorSet";
import ColorDot from "./Colors/ColorDot";

export default class Documentation extends Component {
  copyColorToClipboard(str) {
    // Create new element
    const el = document.createElement("textarea");
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand("copy");
    // Remove temporary element
    document.body.removeChild(el);
  }

  toVarName(str) {
    return str.toLowerCase().replace(" ", "-");
  }

  render() {
    return (
      <Fragment>
        Tip: You can click on a colour dot to copy the variable name to your
        clipboard!
        <ColorGrid name="Brandwatch + Crimson Hexagon">
          <ColorSet name="Better Together">
            <ColorDot
              onClick={() =>
                this.copyColorToClipboard("var(--color-better-together)")
              }
              rgb={colors.betterTogether}
            />
          </ColorSet>
        </ColorGrid>
        <ColorGrid name="UI Colours">
          <ColorSet name="Carbon">
            <ColorDot
              name="Darker"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-carbon--darker)")
              }
              rgb={colors.uiCarbonDarker}
            />
            <ColorDot
              name="Dark"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-carbon--dark)")
              }
              rgb={colors.uiCarbonDark}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-carbon)")
              }
              rgb={colors.uiCarbon}
            />
          </ColorSet>

          <ColorSet name="Accent">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-accent--active)")
              }
              rgb={colors.uiAccentActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-accent)")
              }
              rgb={colors.uiAccent}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-accent--hover)")
              }
              rgb={colors.uiAccentHover}
            />
          </ColorSet>

          <ColorSet name="White Noise">
            <ColorDot
              name="Darker"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-white-noise--darker)")
              }
              rgb={colors.uiWhiteNoiseDarker}
            />
            <ColorDot
              name="Dark"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-white-noise--dark)")
              }
              rgb={colors.uiWhiteNoiseDark}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-white-noise)")
              }
              rgb={colors.uiWhiteNoise}
            />
          </ColorSet>
        </ColorGrid>
        <ColorGrid>
          <ColorSet name="Black">
            <ColorDot
              name="Default"
              onClick={() => this.copyColorToClipboard("var(--color-ui-black)")}
              rgb={colors.uiBlack}
            />
          </ColorSet>

          <ColorSet name="White">
            <ColorDot
              name="Default"
              onClick={() => this.copyColorToClipboard("var(--color-ui-white)")}
              rgb={colors.uiWhite}
            />
          </ColorSet>
        </ColorGrid>
        <ColorGrid name="Attention Colours">
          <ColorSet name="Error">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-error--active)")
              }
              rgb={colors.uiErrorActive}
            />
            <ColorDot
              name="Default"
              onClick={() => this.copyColorToClipboard("var(--color-ui-error)")}
              rgb={colors.uiError}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-error--hover)")
              }
              rgb={colors.uiErrorHover}
            />
          </ColorSet>

          <ColorSet name="Warning">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-warning--active)")
              }
              rgb={colors.uiWarningActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-warning)")
              }
              rgb={colors.uiWarning}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-warning--hover)")
              }
              rgb={colors.uiWarningHover}
            />
          </ColorSet>

          <ColorSet name="Success">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-success--active)")
              }
              rgb={colors.uiSuccessActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-success)")
              }
              rgb={colors.uiSuccess}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-success--hover)")
              }
              rgb={colors.uiSuccessHover}
            />
          </ColorSet>

          <ColorSet name="Info">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-info--active)")
              }
              rgb={colors.uiInfoActive}
            />
            <ColorDot
              name="Default"
              onClick={() => this.copyColorToClipboard("var(--color-ui-info)")}
              rgb={colors.uiInfo}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-info--hover)")
              }
              rgb={colors.uiInfoHover}
            />
          </ColorSet>

          <ColorSet name="Highlight">
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-ui-highlight)")
              }
              rgb={colors.uiHighlight}
            />
          </ColorSet>
        </ColorGrid>
        <ColorGrid name="Social Colours">
          <ColorSet name="Twitter">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-twitter--active)")
              }
              rgb={colors.socialTwitterActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-twitter)")
              }
              rgb={colors.socialTwitter}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-twitter--hover)")
              }
              rgb={colors.socialTwitterHover}
            />
          </ColorSet>

          <ColorSet name="Facebook">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-facebook--active)"
                )
              }
              rgb={colors.socialFacebookActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-facebook)")
              }
              rgb={colors.socialFacebook}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-facebook--hover)")
              }
              rgb={colors.socialFacebookHover}
            />
          </ColorSet>

          <ColorSet name="Instagram">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-instagram--active)"
                )
              }
              rgb={colors.socialInstagramActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-instagram)")
              }
              rgb={colors.socialInstagram}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-instagram--hover)"
                )
              }
              rgb={colors.socialInstagramHover}
            />
          </ColorSet>

          <ColorSet name="4chan">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--active)"
                )
              }
              rgb={colors.socialFourChanActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-four-chan)")
              }
              rgb={colors.socialFourChan}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--hover)"
                )
              }
              rgb={colors.socialFourChanHover}
            />
          </ColorSet>

          <ColorSet name="Reddit">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--active)"
                )
              }
              rgb={colors.socialRedditActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-four-chan)")
              }
              rgb={colors.socialReddit}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--hover)"
                )
              }
              rgb={colors.socialRedditHover}
            />
          </ColorSet>

          <ColorSet name="Tumblr">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--active)"
                )
              }
              rgb={colors.socialTumblrActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-four-chan)")
              }
              rgb={colors.socialTumblr}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--hover)"
                )
              }
              rgb={colors.socialTumblrHover}
            />
          </ColorSet>

          <ColorSet name="VK">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--active)"
                )
              }
              rgb={colors.socialVKActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-four-chan)")
              }
              rgb={colors.socialVK}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--hover)"
                )
              }
              rgb={colors.socialVKHover}
            />
          </ColorSet>

          <ColorSet name="YouTube">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--active)"
                )
              }
              rgb={colors.socialYouTubeActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-social-four-chan)")
              }
              rgb={colors.socialYouTube}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-social-four-chan--hover)"
                )
              }
              rgb={colors.socialYouTubeHover}
            />
          </ColorSet>
        </ColorGrid>
        <ColorGrid name="Sentiment Colours">
          <ColorSet name="Positive">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-sentiment-positive--active)"
                )
              }
              rgb={colors.sentimentPositiveActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-sentiment-positive)")
              }
              rgb={colors.sentimentPositive}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-sentiment-positive--hover)"
                )
              }
              rgb={colors.sentimentPositiveHover}
            />
          </ColorSet>

          <ColorSet name="Negative">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-sentiment-negative--active)"
                )
              }
              rgb={colors.sentimentNegativeActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-sentiment-negative)")
              }
              rgb={colors.sentimentNegative}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-sentiment-negative--hover)"
                )
              }
              rgb={colors.sentimentNegativeHover}
            />
          </ColorSet>

          <ColorSet name="Neutral">
            <ColorDot
              name="Active"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-sentiment-neutral--active)"
                )
              }
              rgb={colors.sentimentNeutralActive}
            />
            <ColorDot
              name="Default"
              onClick={() =>
                this.copyColorToClipboard("var(--color-sentiment-neutral)")
              }
              rgb={colors.sentimentNeutral}
            />
            <ColorDot
              name="Hover"
              onClick={() =>
                this.copyColorToClipboard(
                  "var(--color-sentiment-neutral--hover)"
                )
              }
              rgb={colors.sentimentNeutralHover}
            />
          </ColorSet>
        </ColorGrid>
        <ColorGrid name="Product Colours">
          {Object.keys(colors.productColors).map((id) => (
            <ColorSet key={id} name={colors.productColorNames[id]}>
              <ColorDot
                name="Active"
                onClick={() =>
                  this.copyColorToClipboard(
                    `var(--color-product-${this.toVarName(
                      colors.productColorNames[id]
                    )}--active)`
                  )
                }
                rgb={colors.productActiveColors[id]}
              />
              <ColorDot
                name="Default"
                onClick={() =>
                  this.copyColorToClipboard(
                    `var(--color-product-${this.toVarName(
                      colors.productColorNames[id]
                    )})`
                  )
                }
                rgb={colors.productColors[id]}
              />
              <ColorDot
                name="Hover"
                onClick={() =>
                  this.copyColorToClipboard(
                    `var(--color-product-${this.toVarName(
                      colors.productColorNames[id]
                    )}--hover)`
                  )
                }
                rgb={colors.productHoverColors[id]}
              />
            </ColorSet>
          ))}
        </ColorGrid>
        <ColorGrid name="Brand Colours">
          <ColorSet>
            {Object.keys(colors.brandColors).map((id) => (
              <ColorDot key={id} rgb={colors.brandColors[id]} />
            ))}
          </ColorSet>
        </ColorGrid>
        <ColorGrid name="User Defined Graph Colours">
          <ColorSet>
            {Object.keys(colors.userDefinedGraphColors).map((id) => (
              <ColorDot key={id} rgb={colors.userDefinedGraphColors[id]} />
            ))}
          </ColorSet>
        </ColorGrid>
      </Fragment>
    );
  }
}

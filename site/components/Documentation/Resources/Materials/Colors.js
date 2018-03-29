import React, { Component, Fragment } from 'react';
import { colors } from '@brandwatch/axiom-materials';
import ColorGrid from './Colors/ColorGrid';
import ColorSet from './Colors/ColorSet';
import ColorDot from './Colors/ColorDot';

export default class Documentation extends Component {
  render() {
    return (
      <Fragment>
        <ColorGrid name="UI Colours">
          <ColorSet name="Carbon">
            <ColorDot name="Darker" rgb={ colors.uiCarbonDarker } />
            <ColorDot name="Dark" rgb={ colors.uiCarbonDark } />
            <ColorDot name="Default" rgb={ colors.uiCarbon } />
          </ColorSet>

          <ColorSet name="Accent">
            <ColorDot name="Active" rgb={ colors.uiAccentActive } />
            <ColorDot name="Default" rgb={ colors.uiAccent } />
            <ColorDot name="Hover" rgb={ colors.uiAccentHover } />
          </ColorSet>

          <ColorSet name="White Noise">
            <ColorDot name="Darker" rgb={ colors.uiWhiteNoiseDarker } />
            <ColorDot name="Dark" rgb={ colors.uiWhiteNoiseDark } />
            <ColorDot name="Default" rgb={ colors.uiWhiteNoise } />
          </ColorSet>
        </ColorGrid>

        <ColorGrid>
          <ColorSet name="Black">
            <ColorDot name="Default" rgb={ colors.uiBlack } />
          </ColorSet>

          <ColorSet name="White">
            <ColorDot name="Default" rgb={ colors.uiWhite } />
          </ColorSet>
        </ColorGrid>

        <ColorGrid name="Attention Colours">
          <ColorSet name="Error">
            <ColorDot name="Active" rgb={ colors.uiErrorActive } />
            <ColorDot name="Default" rgb={ colors.uiError } />
            <ColorDot name="Hover" rgb={ colors.uiErrorHover } />
          </ColorSet>

          <ColorSet name="Warning">
            <ColorDot name="Active" rgb={ colors.uiWarningActive } />
            <ColorDot name="Default" rgb={ colors.uiWarning } />
            <ColorDot name="Hover" rgb={ colors.uiWarningHover } />
          </ColorSet>

          <ColorSet name="Success">
            <ColorDot name="Active" rgb={ colors.uiSuccessActive } />
            <ColorDot name="Default" rgb={ colors.uiSuccess } />
            <ColorDot name="Hover" rgb={ colors.uiSuccessHover } />
          </ColorSet>

          <ColorSet name="Info">
            <ColorDot name="Active" rgb={ colors.uiInfoActive } />
            <ColorDot name="Default" rgb={ colors.uiInfo } />
            <ColorDot name="Hover" rgb={ colors.uiInfoHover } />
          </ColorSet>

          <ColorSet name="Highlight">
            <ColorDot name="Default" rgb={ colors.uiHighlight } />
          </ColorSet>
        </ColorGrid>

        <ColorGrid name="Social Colours">
          <ColorSet name="Twitter">
            <ColorDot rgb={ colors.socialTwitter } />
          </ColorSet>

          <ColorSet name="Facebook">
            <ColorDot rgb={ colors.socialFacebook } />
          </ColorSet>

          <ColorSet name="Instagram">
            <ColorDot rgb={ colors.socialInstagram } />
          </ColorSet>
        </ColorGrid>

        <ColorGrid name="Sentiment Colours">
          <ColorSet name="Positive">
            <ColorDot name="Active" rgb={ colors.sentimentPositiveActive } />
            <ColorDot name="Default" rgb={ colors.sentimentPositive } />
            <ColorDot name="Hover" rgb={ colors.sentimentPositiveHover } />
          </ColorSet>

          <ColorSet name="Negative">
            <ColorDot name="Active" rgb={ colors.sentimentNegativeActive } />
            <ColorDot name="Default" rgb={ colors.sentimentNegative } />
            <ColorDot name="Hover" rgb={ colors.sentimentNegativeHover } />
          </ColorSet>

          <ColorSet name="Neutral">
            <ColorDot name="Active" rgb={ colors.sentimentNeutralActive } />
            <ColorDot name="Default" rgb={ colors.sentimentNeutral } />
            <ColorDot name="Hover" rgb={ colors.sentimentNeutralHover } />
          </ColorSet>
        </ColorGrid>

        <ColorGrid name="Product Colours">
          { Object.keys(colors.productColors).map((id) => (
            <ColorSet key={ id } name={ colors.productColorNames[id] }>
              <ColorDot name="Active" rgb={ colors.productActiveColors[id] } />
              <ColorDot name="Default" rgb={ colors.productColors[id] } />
              <ColorDot name="Hover" rgb={ colors.productHoverColors[id] } />
            </ColorSet>
          )) }
        </ColorGrid>

        <ColorGrid name="User Defined Graph Colours">
          <ColorSet>
            { Object.keys(colors.userDefinedGraphColors).map((id) => (
              <ColorDot
                  key={ id }
                  rgb={ colors.userDefinedGraphColors[id] } />
            )) }
          </ColorSet>
        </ColorGrid>
      </Fragment>
    );
  }
}

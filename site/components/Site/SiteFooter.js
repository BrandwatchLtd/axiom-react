import React, { Component } from 'react';
import { Base, HorizontalRule, LogoBox, Paragraph } from '@brandwatch/axiom-components';
import SitePage from './SitePage';

export default class SiteFooter extends Component {
  render() {
    return (
      <Base className="si-site__footer" theme="night">
        <HorizontalRule />
        <SitePage verticalPadding={ false }>
          <LogoBox color="white" height="6.5rem" />
        </SitePage>

        <SitePage>
          <Paragraph space="x0">
            Copyright © 2018 Brandwatch. All Rights Reserved. 1st Floor,
            Sovereign House, Church Street, Brighton, BN1 1UJ
          </Paragraph>

          <Paragraph space="x0">
            Company number: 03898053 | VAT number: 754 750 710
          </Paragraph>
        </SitePage>
      </Base>
    );
  }
}

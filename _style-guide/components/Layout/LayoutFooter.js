import React, { Component } from 'react';
import classnames from 'classnames';
import Grid from 'bw-axiom/components/grid/Grid';
import GridCell from 'bw-axiom/components/grid/GridCell';
import Icon from 'bw-axiom/components/icon/Icon';
import LogoVertical from 'bw-axiom/components/logo/LogoVertical';
import LayoutContent from './LayoutContent';

if (__INCLUDE_CSS__) {
  require('./LayoutFooter.scss');
}

export default class LayoutFooter extends Component {
  render() {
    const { className } = this.props;
    const classes = classnames(className, 'dm-layout__footer-container');
    const socials = [
      { icon: 'linkedin', link: 'http://www.linkedin.com/company/brandwatch' },
      { icon: 'google-plus' },
      { icon: 'pinterest-p' },
      { icon: 'instagram' },
      { icon: 'twitter' },
      { icon: 'facebook' },
      { icon: 'youtube' },
      { icon: 'slideshare' },
    ];

    return (
      <div className={ classes }>
        <LayoutContent padded={ true }>
          <Grid gutters="large" responsive={ false }>
            <GridCell shrink={ true }>
              <div className="dm-layout__logo">
                <LogoVertical height={ 120 } />
              </div>
            </GridCell>

            <GridCell>
              <div className="dm-layout__footer">
                <Grid hAlign="left" responsive={ false }>
                  { socials.map((social, index) =>
                    <GridCell key={ index } shrink={ true }>
                      <Icon name={ social.icon } size="medium" />
                    </GridCell>
                  ) }
                </Grid>

                <p>Copyright © 2016 Brandwatch. All Rights Reserved.</p>
              </div>
            </GridCell>
          </Grid>
        </LayoutContent>
      </div>
    );
  }
}

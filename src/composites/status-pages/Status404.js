import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Heading from '../../components/typography/Heading';
import Link from '../../components/typography/Link';
import LogoPage from '../logo-page/LogoPage';
import Paragraph from '../../components/typography/Paragraph';
import StatusMessage from './StatusMessage';
import Strong from '../../components/typography/Strong';
import t from '../../utils/locales';

export default class Status404 extends Component {
  static propTypes = {
    /** Page background image URL */
    backgroundImage: PropTypes.string,
    /** Location of where the contact us link takes the users */
    contactUsLocation: PropTypes.string.isRequired,
    /** Location of where the home link takes the user */
    homeLocation: PropTypes.string.isRequired,
    /** Overall theme for the page, needs to be set when using a background image */
    theme: PropTypes.oneOf(['day', 'night']).isRequired,
  };

  static contextTypes = {
    axiomLanguage: PropTypes.string,
  };

  render() {
    const { axiomLanguage } = this.context;
    const { contactUsLocation, homeLocation, ...rest } = this.props;
    const tl = t.bind(null, axiomLanguage);

    return (
      <LogoPage { ...rest }>
        <StatusMessage>
          <Heading space="x4" textSize="display1">
            <Strong>{ tl('ooops') }</Strong>
          </Heading>
          <Heading space="x4" textSize="headline">
            { tl('broken-link') }
          </Heading>
          <Paragraph space="x4">
            { tl('visit-the') } <Link href={ homeLocation }>
              { tl('home-page') }</Link> { tl('or') } <Link href={ contactUsLocation }>
                { tl('contact-us') }</Link> { tl('about-the-problem') }.
          </Paragraph>
        </StatusMessage>
      </LogoPage>
    );
  }
}

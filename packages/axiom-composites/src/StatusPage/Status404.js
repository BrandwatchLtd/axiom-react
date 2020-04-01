import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Heading, Link, Paragraph, Strong } from '@brandwatch/axiom-components';
import { translate } from '@brandwatch/axiom-localization';
import LogoPage from '../LogoPage/LogoPage';
import StatusMessage from './StatusMessage';

const t = translate({
  'about the problem': {
    de: 'über das Problem',
    es: 'sobre el problema',
    fr: 'à propos du problème',
  },
  'contact us': {
    de: 'kontaktiere uns',
    es: 'contáctenos',
    fr: 'contactez nous',
  },
  'home page': {
    de: 'startseite',
    es: 'página principal',
    fr: '',
  },
  'Ooops!': {
    de: 'Hoppla!',
    es: 'Huy!',
    fr: "page d'accueil",
  },
  or: {
    de: 'oder',
    es: 'o',
    fr: 'ou',
  },
  'The link you clicked may be broken or the page may have been removed': {
    de:
      'Der Link, den Sie geklickt haben, kann kaputt sein oder die Seite wurde möglicherweise' +
      ' entfernt',
    es:
      'El enlace al que ha hecho clic puede estar roto o la página puede haber sido eliminada',
    fr:
      'Le lien sur lequel vous avez cliqué peut être brisé ou si la page a été supprimée',
  },
  'Visit the': {
    de: 'Besuche den',
    es: 'Visita el',
    fr: 'Visiter le',
  },
});

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

    return (
      <LogoPage {...rest}>
        <StatusMessage>
          <Heading space="x4" textSize="display1">
            <Strong>{t('Ooops!', axiomLanguage)}</Strong>
          </Heading>
          <Heading space="x4" textSize="headline">
            {t(
              'The link you clicked may be broken or ' +
                'the page may have been removed',
              axiomLanguage
            )}
          </Heading>
          <Paragraph space="x4">
            {t('Visit the', axiomLanguage)}{' '}
            <Link href={homeLocation}>{t('home page', axiomLanguage)}</Link>{' '}
            {t('or', axiomLanguage)}{' '}
            <Link href={contactUsLocation}>
              {t('contact us', axiomLanguage)}
            </Link>{' '}
            {t('about the problem', axiomLanguage)}.
          </Paragraph>
        </StatusMessage>
      </LogoPage>
    );
  }
}

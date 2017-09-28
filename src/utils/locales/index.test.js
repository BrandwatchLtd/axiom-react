import en from './en/common.json';
import de from './de/common.json';
import es from './es/common.json';
import fr from './fr/common.json';
import translate from './';

describe('locales', () => {
  const defaultLocale = en;
  const translatedLocales = [{
    name: 'German',
    translations: de,
  }, {
    name: 'Spanish',
    translations: es,
  }, {
    name: 'French',
    translations: fr,
  }];

  translatedLocales.forEach((locale) => {
    describe(`when in the ${locale.name} locale`, () => {
      Object.keys(defaultLocale).forEach((key) => {
        it(`translates ${key}`, () => {
          expect(!!locale.translations[key]).toBe(true);
        });
      });
    });
  });
});

describe('default - translate', () => {
  const supportedLanguageCode = 'en';
  const unsupportedLocale = 'de-AT';
  const unsupportedLanguageCode = 'zh';
  const textId = 'login-title';

  describe('when a supported language code is passed to the function', () => {
    it('provides the translation for the provided key', () => {
      expect(translate(supportedLanguageCode, textId)).toEqual('Login');
    });
  });
  describe('when a unsupported locale is passed to the function', () => {
    it('fallsback to the language code and provides the translation for the provided key', () => {
      expect(translate(unsupportedLocale, textId)).toEqual('Anmelden');
    });
  });
  describe('when a unsupported language code is passed to the function', () => {
    it('fallsback to the default language code (en)', () => {
      expect(translate(unsupportedLanguageCode, textId)).toEqual('Login');
    });
  });
});

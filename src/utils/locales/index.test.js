import en from './en/common.json';
import de from './de/common.json';
import es from './es/common.json';
import fr from './fr/common.json';

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

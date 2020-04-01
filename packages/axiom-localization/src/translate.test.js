import translate from './translate';

describe('translate', () => {
  const supportedLanguageCode = 'fr';
  const unsupportedLocale = 'de-AT';
  const unsupportedLanguageCode = 'zh';
  const config = {
    Cancel: {
      de: 'Abbrechen',
      fr: 'Effacer',
    },
  };

  describe('when a supported language code is passed to the function', () => {
    it('provides the translation for the provided key', () => {
      expect(translate(config)('Cancel', supportedLanguageCode)).toEqual(
        'Effacer'
      );
    });
  });
  describe('when a unsupported locale is passed to the function', () => {
    it('fallsback to the language code and provides the translation for the provided key', () => {
      expect(translate(config)('Cancel', unsupportedLocale)).toEqual(
        'Abbrechen'
      );
    });
  });
  describe('when a unsupported language code is passed to the function', () => {
    it('fallsback to the default language code (en)', () => {
      expect(translate(config)('Cancel', unsupportedLanguageCode)).toEqual(
        'Cancel'
      );
    });
  });
});

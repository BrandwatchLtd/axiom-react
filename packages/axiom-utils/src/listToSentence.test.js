import listToSentence from './listToSentence';

describe('listToSentence', () => {
  const initialPhrase = 'Lorem ipsum dolor ';

  describe('when an initial phrase has been provided', () => {
    const phrases = ['sit', 'amet'];
    it('returns the inital phrase', () => {
      expect(listToSentence(phrases, initialPhrase)).toEqual(
        'Lorem ipsum dolor sit and amet'
      );
    });
  });

  describe('when an initial phrase has not been provided', () => {
    const phrases = ['sit', 'amet'];
    it('returns the correct string', () => {
      expect(listToSentence(phrases)).toEqual('sit and amet');
    });
  });

  it('returns the correct string', () => {
    expect(listToSentence([])).toEqual('');
  });

  it('returns the correct string', () => {
    expect(listToSentence(['sit'])).toEqual('sit');
  });

  it('returns the correct string', () => {
    expect(listToSentence(['sit', 'amet', 'consectetur'])).toEqual(
      'sit, amet and consectetur'
    );
  });
});

import { hasNext, hasPrev, getNext, getPrev } from './navigationUtils';

describe('hasNext', () => {
  it('returns false when there is no next index available', () => {
    expect(hasNext(3, 3)).toEqual(false);
  });

  it('returns true when there is a next index available', () => {
    expect(hasNext(3, 0)).toEqual(true);
  });
});

describe('hasPrev', () => {
  it('returns false when there is no previous index available', () => {
    expect(hasPrev(3, 0)).toEqual(false);
  });

  it('returns true when there is a previous index available', () => {
    expect(hasPrev(3, 3)).toEqual(true);
  });
});

describe('getNext', () => {
  it('returns the next index', () => {
    expect(getNext(3, 1)).toEqual(2);
  });

  it('returns the last index ', () => {
    expect(getNext(3, 3)).toEqual(3);
  });
});

describe('getPrev', () => {
  it('returns the previous index', () => {
    expect(getPrev(3, 2)).toEqual(1);
  });

  it('returns the first index ', () => {
    expect(getPrev(3, 0)).toEqual(0);
  });
});

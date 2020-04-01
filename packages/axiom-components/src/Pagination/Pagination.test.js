import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';
import {
  getDisplayRange,
  getSetStart,
  isWithinStartRange,
  isWithinEndRange,
} from './utils';

const getComponent = (props = {}) =>
  renderer.create(
    <Pagination
      currentPage={1}
      onPageChange={() => {}}
      totalPages={10}
      {...props}
    />
  );

describe('Composite: Pagination', () => {
  it('getSetStart', () => {
    expect(getSetStart(1, 5)).toBe(1);
    expect(getSetStart(7, 5)).toBe(7);
    expect(getSetStart(11, 5)).toBe(11);

    expect(getSetStart(1, 6)).toBe(1);
    expect(getSetStart(8, 6)).toBe(8);
    expect(getSetStart(13, 6)).toBe(13);

    expect(getSetStart(1, 7)).toBe(1);
    expect(getSetStart(9, 7)).toBe(9);
    expect(getSetStart(15, 7)).toBe(15);
  });

  it('isWithinStartRange', () => {
    expect(isWithinStartRange(1, 5)).toBe(true);
    expect(isWithinStartRange(7, 5)).toBe(false);
  });

  it('isWithinEndRange', () => {
    expect(isWithinEndRange(6, 5, 10)).toBe(false);
    expect(isWithinEndRange(7, 5, 10)).toBe(true);
  });

  describe('getDisplayRange', () => {
    it('within range of the lower and higher bounds', () => {
      expect(getDisplayRange(1, 6, 10)).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
      ]);
    });

    it('within range of the lower bound', () => {
      expect(getDisplayRange(1, 5, 10)).toEqual([1, 2, 3, 4, 5, 6, 7]);

      expect(getDisplayRange(6, 5, 10)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('within range of the higher bound', () => {
      expect(getDisplayRange(7, 5, 10)).toEqual([4, 5, 6, 7, 8, 9, 10]);

      expect(getDisplayRange(10, 5, 10)).toEqual([4, 5, 6, 7, 8, 9, 10]);
    });

    it('with higher range than total', () => {
      expect(getDisplayRange(10, 100, 10)).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
      ]);
    });
  });

  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without displayRange', () => {
    const component = getComponent({ displayRange: 0 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without pages', () => {
    const component = getComponent({ totalPages: 0 });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

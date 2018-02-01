import React from 'react';
import renderer from 'react-test-renderer';
import WordCloud from './WordCloud';
import Word from './Word';

const getComponent = () =>
  renderer.create(
    <WordCloud height={ 256 } width={ 256 }>
      <Word
          font="Roboto, Helvetica, Arial, sans-serif"
          x={ 0 }
          y={ 0 } />
    </WordCloud>
  );

describe('WordCloud', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

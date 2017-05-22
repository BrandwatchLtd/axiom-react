import React from 'react';
import renderer from 'react-test-renderer';
import DotPlot from './DotPlot';

function getComponent(props) {
  return renderer.create(<DotPlot { ...props } />);
}

describe('DotPlot', () => {
  it('renders with sorted data', () => {
    const component = getComponent({
      data: [
        { color: 'blue', value: 10 },
        { color: 'pink', value: 20 },
      ],
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with unsorted data', () => {
    const component = getComponent({
      data: [
        { color: 'pink', value: 20 },
        { color: 'blue', value: 10 },
      ],
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

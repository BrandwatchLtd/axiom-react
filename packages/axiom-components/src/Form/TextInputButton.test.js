import React from 'react';
import renderer from 'react-test-renderer';
import TextInputButton from './TextInputButton';

const getComponent = props =>
  renderer.create(<TextInputButton {...props}>Test</TextInputButton>);

describe('TextInputButton', () => {
  let props;

  beforeEach(() => {
    props = {
      size: 'medium',
    };
  });

  it('renders with defaultProps', () => {
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

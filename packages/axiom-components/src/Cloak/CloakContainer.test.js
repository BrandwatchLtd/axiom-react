import React from 'react';
import renderer from 'react-test-renderer';
import CloakContainer from './CloakContainer';

const getComponent = (props = {}) =>
  renderer.create(
    <CloakContainer { ...props }>
      Lorem Ipsum
    </CloakContainer>
  );

describe('CloakContainer', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

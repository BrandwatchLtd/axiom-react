import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import CheckBox from '../CheckBox';
import CheckBoxGroup from '../CheckBoxGroup';
import Form from '../Form';

export default class CheckBoxExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      CheckBox: PropTypes.object.isRequired,
      CheckBoxGroup: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      CheckBox: components.CheckBox,
      CheckBoxGroup: components.CheckBoxGroup,
    };

    const initialProps = {
      CheckBox: {
        name: 'lorem',
        children: 'Lorem ipsum',
        title: 'Lorem ipsum dolor sit amet',
      },
      CheckBoxGroup: {},
    };

    const initialPropOptions = {
      CheckBoxGroup: {
        children: {
          count: 3,
          min: 1,
          max: Infinity,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Form onSubmit={ (e) => e.preventDefault() }>
          <CheckBoxGroup { ...initialProps.CheckBoxGroup }>
            <CheckBox { ...initialProps.CheckBox } />
          </CheckBoxGroup>
        </Form>
      </ExampleConfig>
    );
  }
}

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import EditableLine from '../EditableLine';
import EditableTitle from '../EditableTitle';
import Heading from '../../typography/Heading';

class EditableExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      EditableLine: PropTypes.object.isRequired,
      EditableTitle: PropTypes.object.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: 'Editable text',
    };
  }

  render() {
    const { value } = this.state;
    const { components } = this.props;

    const propTypes = {
      EditableLine: components.EditableLine,
      EditableTitle: components.EditableTitle,
    };

    const initialProps = {
      EditableLine: {
        onChange: (value) => this.setState({ value }),
        placeholder: 'Editable text here',
        value,
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <EditableTitle>
          <Heading textSize="headline">
            <EditableLine { ...initialProps.EditableLine }/>
          </Heading>
        </EditableTitle>
      </ExampleConfig>
    );
  }
}

export default [ EditableExample ];

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Notification from '../Notification';
import Notifications from '../Notifications';
import Paragraph from '../../typography/Paragraph';

class NotificationExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Notification: PropTypes.object.isRequired,
      Notifications: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Notification: components.Notification,
      Notifications: components.Notifications,
    };

    const initialProps = {
      Notification: {
        type: 'error',
        /* eslint-disable no-console */
        onAppear: () => console.log('Notification: Appeared!'),
        onRemoveClick: () => console.log('Notification: Clicked remove!'),
        /* eslint-enable no-console */
      },
      Notifications: {},
    };

    const initialPropOptions = {
      Notifications: {
        children: {
          count: 0,
          max: Infinity,
          min: 0,
        },
      },
    };

    return (
      <ExampleConfig
          hasVisual={ false }
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Notifications { ...initialProps.Notifications }>
          <Notification { ...initialProps.Notification }>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut ac arcu tellus.
            </Paragraph>
          </Notification>
        </Notifications>
      </ExampleConfig>
    );
  }
}

export default [ NotificationExample ];

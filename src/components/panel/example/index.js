import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Panel from '../Panel';
import PanelBody from '../PanelBody';
import PanelHeader from '../PanelHeader';
import Panels from '../Panels';
import Paragraph from '../../typography/Paragraph';
import ProgressInfinite from '../../progress/ProgressInfinite';
import Strong from '../../typography/Strong';

class PanelExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Panels: PropTypes.object,
      Panel: PropTypes.object,
      PanelHeader: PropTypes.object,
      PanelBody: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Panels: components.Panels,
      Panel: components.Panel,
      PanelHeader: components.PanelHeader,
      PanelBody: components.PanelBody,
    };

    const initialProps = {
      Panel: {
        isInactive: false,
        minimumHeight: '15rem',
      },
      PanelBody: {
        verticalAlign: 'around',
      },
    };

    const initialPropOptions = {
      Panels: {
        children: {
          count: 2,
          max: 2,
          min: 1,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Panels>
          <Panel>
            <PanelHeader>
              <Strong snippetReplace>Lorem Ipsum</Strong> dolar amor
            </PanelHeader>

            <PanelBody>
              <ProgressInfinite snippetIgnore />

              <Paragraph snippetReplace textCenter>
                Quisque varius eros ac sem convallis, at blandit nisl
                laoreet. Etiam viverra dolor mauris, a aliquam nisi placerat vel.
                Morbi id accumsan nisi.
              </Paragraph>
            </PanelBody>
          </Panel>
        </Panels>
      </ExampleConfig>
    );
  }
}

module.exports = [
  PanelExample,
];

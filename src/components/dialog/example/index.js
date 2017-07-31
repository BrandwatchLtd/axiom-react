import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import {
  ButtonGroup,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Heading,
  Paragraph,
} from 'bw-axiom';

class DialogExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Dialog: PropTypes.object.isRequired,
      DialogBody: PropTypes.object.isRequired,
      DialogFooter: PropTypes.object.isRequired,
      DialogHeader: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Dialog: components.Dialog,
      DialogBody: components.DialogBody,
      DialogFooter: components.DialogFooter,
      DialogHeader: components.DialogHeader,
    };

    const initialProps = {
      Dialog: {
        isOpen: false,
      },
      DialogBody: {},
      DialogFooter: {},
      DialogHeader: {
        onRequestClose: () => {},
      },
    };

    const initialPropOptions = {
      Dialog: {},
      DialogBody: {},
      DialogFooter: {},
      DialogHeader: {
        onRequestClose: {
          callback: (setProp) => setProp('Dialog', 'isOpen', false),
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }
          visual={ false }>
        <Dialog { ...initialProps.Dialog }>
          <DialogHeader { ...initialProps.DialogHeader }>
            <Heading snippetReplace={ true } textSize="headtitle">Dialog Title</Heading>
          </DialogHeader>

          <DialogBody { ...initialProps.DialogBody }>
            <Paragraph snippetReplace={ true }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              arcu tellus. In hac habitasse platea dictumst. Maecenas ac molestie
              arcu. Donec auctor eros quis ex congue, sit amet vehicula sem
              dapibus. Nam lobortis, nibh vel placerat sagittis, risus est
              faucibus massa, at sodales ligula lacus quis diam. Integer venenatis
              viverra euismod. Phasellus eleifend tempor augue, eget molestie
              diam efficitur at. Vivamus sagittis porta venenatis. Praesent
              elementum dolor in lectus maximus euismod. Praesent sed cursus
              sem, non molestie ex. Nulla facilisi. Pellentesque aliquam massa
              et ligula porta ornare et nec turpis. Curabitur vel lacus imperdiet,
              pulvinar risus in, scelerisque velit. Praesent nec lorem lobortis,
              tempor neque quis, ultricies ipsum. Aenean vitae magna justo. Donec
              aliquam, diam id interdum finibus, orci nunc pretium sem, vel pretium
              libero ante eu diam.
            </Paragraph>

            <Paragraph snippetReplace={ true }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              convallis, diam dapibus lacinia condimentum, arcu leo blandit arcu,
              vitae convallis diam risus ac ligula. Praesent rhoncus semper odio,
              in congue turpis maximus condimentum. Sed placerat, ipsum a
              vulputate tincidunt, augue massa iaculis nisl, a semper est mauris
              fringilla libero. Fusce a posuere lectus. Suspendisse potenti.
              Donec a consectetur est. Mauris aliquet leo sed enim dignissim,
              quis consectetur risus imperdiet.
            </Paragraph>
          </DialogBody>

          <DialogFooter { ...initialProps.DialogFooter }>
            <ButtonGroup snippetReplace={ true }>
              <Button style="primary">Primary</Button>
              <Button style="secondary">Secondary</Button>
            </ButtonGroup>
          </DialogFooter>
        </Dialog>
      </ExampleConfig>
    );
  }
}

module.exports = [ DialogExample ];

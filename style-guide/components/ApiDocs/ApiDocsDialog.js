import React, { PropTypes, Component } from 'react';
import {
  ButtonGroup,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Heading,
} from 'bw-axiom';
import { CodeSnippet, CodeTabset } from '../CodeSnippet';
import ApiDocsList from './ApiDocsList';

export default class ApiDocsDialog extends Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { components, isOpen, onRequestClose } = this.props;

    return (
      <Dialog isOpen={ isOpen } onRequestClose={ onRequestClose } size="medium">
        <DialogHeader onRequestClose={ onRequestClose }>
          <Heading style="title">API Docs</Heading>
        </DialogHeader>

        <DialogBody>
          <CodeTabset>
            <CodeSnippet language="js">
              {`import { ${Object.keys(components).join(', ')} } from 'bw-axiom';`}
            </CodeSnippet>
          </CodeTabset>

          { Object.keys(components)
              .filter((displayName) => Object.keys(components[displayName]).length > 0)
              .map((displayName) =>
                <ApiDocsList
                    componentName={ displayName }
                    key={ displayName }
                    props={ components[displayName] } />
          ) }
        </DialogBody>
        <DialogFooter>
          <ButtonGroup>
            <Button onClick={ onRequestClose }>Close</Button>
          </ButtonGroup>
        </DialogFooter>
      </Dialog>
    );
  }
}

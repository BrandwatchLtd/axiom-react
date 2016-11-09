import React, { PropTypes, Component } from 'react';
import ButtonGroup from 'bw-axiom/components/button/ButtonGroup';
import Button from 'bw-axiom/components/button/Button';
import Dialog from 'bw-axiom/components/dialog/Dialog';
import DialogBody from 'bw-axiom/components/dialog/DialogBody';
import DialogFooter from 'bw-axiom/components/dialog/DialogFooter';
import DialogHeader from 'bw-axiom/components/dialog/DialogHeader';
import Heading from 'bw-axiom/components/typography/Heading';
import ApiDocsList from 'style-guide/components/ApiDocs/ApiDocsList';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class ApiDocsDialog extends Component {
  static propTypes = {
    components: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { components, location, isOpen, onRequestClose } = this.props;

    return (
      <Dialog isOpen={ isOpen } onRequestClose={ onRequestClose } size="large">
        <DialogHeader onRequestClose={ onRequestClose }>
          <Heading style="title">API Docs</Heading>
        </DialogHeader>

        <DialogBody>
          <CodeTabset>
            <CodeSnippet language="js">
              { components.map(({ displayName }) =>
                `import ${displayName} from '${location}/${displayName}';`
              ).join('\n') }
            </CodeSnippet>
          </CodeTabset>

          { components
              .filter(({ __ax_propTypes = {} }) => Object.keys(__ax_propTypes).length)
              .map(({ displayName, __ax_propTypes }) =>
                <ApiDocsList
                    componentName={ displayName }
                    key={ displayName }
                    propTypes={ __ax_propTypes } />
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

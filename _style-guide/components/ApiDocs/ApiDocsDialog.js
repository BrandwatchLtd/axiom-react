import React, { PropTypes, Component } from 'react';
import ButtonGroup from 'bw-axiom/components/button/ButtonGroup';
import Button from 'bw-axiom/components/button/Button';
import CardContent from 'bw-axiom/components/card/CardContent';
import Dialog from 'bw-axiom/components/dialog/Dialog';
import DialogBody from 'bw-axiom/components/dialog/DialogBody';
import DialogFooter from 'bw-axiom/components/dialog/DialogFooter';
import DialogTitle from 'bw-axiom/components/dialog/DialogTitle';
import Heading from 'bw-axiom/components/typography/Heading';
import ApiDocsList from 'style-guide/components/ApiDocs/ApiDocsList';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class ApiDocsDialog extends Component {
  static propTypes = {
    components: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { components, location, isOpen, onRequestClose, title } = this.props;
    return (
      <Dialog isOpen={ isOpen } onRequestClose={ onRequestClose } size="large">
        <DialogTitle onRequestClose={ onRequestClose }>
          <Heading level={ 4 }>API Docs - { title }</Heading>
        </DialogTitle>

        <DialogBody>
          <CardContent>
            <CodeTabset>
              <CodeSnippet language="js">
                { components.map(({ __ax_displayName }) =>
                  `import ${__ax_displayName} from '${location}/${__ax_displayName}';`
                ).join('\n') }
              </CodeSnippet>
            </CodeTabset>
          </CardContent>

          {
            components
              .filter(({ __ax_propTypes }) => Object.keys(__ax_propTypes).length)
              .map(({ __ax_displayName, __ax_propTypes }) => [
                <CardContent key="heading">
                  <Heading level={ 4 }>{ __ax_displayName }</Heading>
                </CardContent>,
                <ApiDocsList key="propTypeList" propTypes={ __ax_propTypes } />,
              ])
          }
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

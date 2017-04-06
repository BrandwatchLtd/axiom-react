import React, { PropTypes, Component } from 'react';
import { CardList, Dialog, DialogBody, DialogHeader, Heading } from 'bw-axiom';
import { CodeSnippet, CodeTabset } from '../CodeSnippet';
import ApiDocsProp from './ApiDocsProp';

export default class ApiDocsDialog extends Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
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
              .map((displayName, index) => [
                <Heading key={ index } style="headline" underline={ true }>
                  { displayName }
                </Heading>,
                <CardList compact={ true } key={ displayName }>
                  { Object.keys(components[displayName]).sort().map((prop, index) =>
                    <ApiDocsProp
                        key={ index }
                        propData={ components[displayName][prop] }
                        propName={ prop } />
                  ) }
                </CardList>,
              ] )
          }
        </DialogBody>
      </Dialog>
    );
  }
}

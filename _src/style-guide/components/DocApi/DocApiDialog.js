import React, { PropTypes, Component } from 'react';
import { ButtonGroup, Button } from 'bw-axiom/react';
import { CardContent } from 'bw-axiom/react';
import { Dialog, DialogBody, DialogFooter, DialogTitle } from 'bw-axiom/react';
import { Heading } from 'bw-axiom/react';
import DocApiList from 'style-guide/components/DocApi/DocApiList';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class DocApiDialog extends Component {
  static propTypes = {
    apiDocs: PropTypes.array.isRequired,
    importDocs: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { apiDocs = [], importDocs = {}, isOpen, onRequestClose, title } = this.props;
    const importDocKeys = Object.keys(importDocs).filter((key) => importDocs[key]);

    return (
      <Dialog isOpen={ isOpen } onRequestClose={ onRequestClose } size="lg">
        <DialogTitle onRequestClose={ onRequestClose }>
          { `API Docs - ${title}` }
        </DialogTitle>
        <DialogBody>
          {
            do {
              if (importDocKeys.length) {
                <CardContent>
                  <CodeTabset>
                    {
                      importDocKeys.map((key, index) =>
                        <CodeSnippet key={ index } language={ key }>
                          { importDocs[key] }
                        </CodeSnippet>
                      )
                    }
                  </CodeTabset>
                </CardContent>
              }
            }
          }

          {
            apiDocs
              .filter(({ propTypes }) => Object.keys(propTypes).length)
              .map(({ name, propTypes }) => [
                <CardContent key="heading">
                  <Heading level={ 4 }>{ name }</Heading>
                </CardContent>,
                <DocApiList key="propTypeList" propTypes={ propTypes } />,
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

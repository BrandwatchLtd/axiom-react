import React, { PropTypes, Component } from 'react';
import { ButtonGroup, Button } from 'bw-axiom/react';
import DocApiDialog from 'style-guide/components/DocApi/DocApiDialog';

export default class DocApiDialogTrigger extends Component {
  static propTypes = {
    apiDocs: PropTypes.array.isRequired,
    importDocs: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  };

  componentWillMount() {
    this.closeDialog();
  }

  openDialog() {
    this.setState({ isOpen: true });
  }

  closeDialog() {
    this.setState({ isOpen: false });
  }

  render() {
    const { apiDocs, importDocs, title } = this.props;
    const { isOpen } = this.state;

    return (
      <ButtonGroup>
        <Button onClick={ ::this.openDialog } size="lg">
          View API Docs
          <DocApiDialog
              apiDocs={ apiDocs }
              importDocs={ importDocs }
              isOpen={ isOpen }
              onRequestClose={ ::this.closeDialog }
              title={ title } />
        </Button>
      </ButtonGroup>
    );
  }
}

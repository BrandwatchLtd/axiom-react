import React, { PropTypes, Component } from 'react';
import ButtonGroup from 'bw-axiom/components/button/ButtonGroup';
import Button from 'bw-axiom/components/button/Button';
import ApiDocsDialog from 'style-guide/components/ApiDocs/ApiDocsDialog';

export default class DocApiDialogTrigger extends Component {
  static propTypes = {
    imports: PropTypes.shape({
      components: PropTypes.array.isRequired,
      location: PropTypes.string.isRequired,
    }).isRequired,
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
    const { imports, title } = this.props;
    const { isOpen } = this.state;
    const { components, location } = imports;

    return (
      <ButtonGroup>
        <Button onClick={ ::this.openDialog } size="large">
          View API Docs
          <ApiDocsDialog
              components={ components }
              isOpen={ isOpen }
              location={ location }
              onRequestClose={ ::this.closeDialog }
              title={ title } />
        </Button>
      </ButtonGroup>
    );
  }
}

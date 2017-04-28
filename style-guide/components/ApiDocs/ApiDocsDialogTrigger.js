import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, ButtonGroup } from 'bw-axiom';
import ApiDocsDialog from './ApiDocsDialog';

export default class DocApiDialogTrigger extends Component {
  static propTypes = {
    imports: PropTypes.shape({
      components: PropTypes.object.isRequired,
    }).isRequired,
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
    const { imports } = this.props;
    const { isOpen } = this.state;
    const { components } = imports;

    return (
      <ButtonGroup>
        <Button onClick={ () => this.openDialog() }>
          View API Docs
          <ApiDocsDialog
              components={ components }
              isOpen={ isOpen }
              onRequestClose={ () => this.closeDialog() } />
        </Button>
      </ButtonGroup>
    );
  }
}

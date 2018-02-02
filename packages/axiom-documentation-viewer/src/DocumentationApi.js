import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import {
  Base,
  Heading,
  Paragraph,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderLabel,
  TableRow,
} from '@brandwatch/axiom-components';
import DocumentationApiRow from './DocumentationApiRow';

export default class DocumentationApi extends Component {
  static propTypes = {
    components: PropTypes.array.isRequired,
  };

  static contextTypes = {
    registerPropTypes: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.registerPropTypes(this.props.components);
  }

  componentWillReceiveProps({ components: nextComponents }) {
    if (this.props.components !== nextComponents) {
      this.context.registerPropTypes(this.props.components);
    }
  }

  render() {
    const { components } = this.props;

    return (
      <Fragment>
        { components.map(({ name, props }) => (
          <Base key={ name } space="x8">
            <Heading textSize="headtitle" textStrong>{ name }</Heading>
            <Table space="x2">
              { !!Object.keys(props).length && (
                <TableHeader>
                  <TableHeaderLabel sortDirection="ascending">Property</TableHeaderLabel>
                  <TableHeaderLabel>Type</TableHeaderLabel>
                  <TableHeaderLabel>Default</TableHeaderLabel>
                  <TableHeaderLabel>Control</TableHeaderLabel>
                  <TableHeaderLabel shrink sortable={ false }></TableHeaderLabel>
                </TableHeader>
              ) }

              <TableBody>
                { !Object.keys(props).length && (
                  <TableRow>
                    <TableCell colSpan={ 5 }>
                      <Paragraph textCenter>
                        There are no configurable props for this component
                      </Paragraph>
                    </TableCell>
                  </TableRow>
                ) }


                { Object.keys(props).map((prop) => (
                  <DocumentationApiRow { ...props[prop] }
                      component={ name }
                      key={ prop }
                      name={ prop } />
                )) }
              </TableBody>
            </Table>
          </Base>
        )) }
      </Fragment>
    );
  }
}

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Table, TableBody, TableCell, TableHead, TableRow } from 'bw-axiom';

class TableExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Table: PropTypes.object.isRequired,
      TableBody: PropTypes.object.isRequired,
      TableCell: PropTypes.object.isRequired,
      TableHead: PropTypes.object.isRequired,
      TableRow: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Table: components.Table,
      TableBody: components.TableBody,
      TableCell: components.TableCell,
      TableHead: components.TableHead,
      TableRow: components.TableRow,
    };

    const initialProps = {
      Table: {},
      TableBody: {},
      TableCell: {},
      TableHead: {},
      TableRow: {},
    };

    const initialPropOptions = {
      TableBody: {
        children: {
          count: 5,
          min: 1,
          max: 5,
        },
      },
      TableRow: {
        children: {
          count: 4,
          min: 1,
          max: 8,
        },
      },
      TableCell: {
        grow: {
          applyToIndex: 2,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Table { ...initialProps.Table }>
          <TableHead { ...initialProps.TableHead }>
            <TableRow { ...initialProps.TableRow }>
              <TableCell { ...initialProps.TableCell }>Lorem ipsum</TableCell>
            </TableRow>
          </TableHead>

          <TableBody { ...initialProps.TableBody }>
            <TableRow { ...initialProps.TableRow }>
              <TableCell { ...initialProps.TableCell }>Lorem ipsum dolar amor</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ExampleConfig>
    );
  }
}

module.exports = [ TableExample ];

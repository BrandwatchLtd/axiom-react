import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Table from '../Table';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableHeader from '../TableHeader';
import TableHeaderLabel from '../TableHeaderLabel';
import TableRow from '../TableRow';

class TableExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Table: PropTypes.object.isRequired,
      TableBody: PropTypes.object.isRequired,
      TableCell: PropTypes.object.isRequired,
      TableHeader: PropTypes.object.isRequired,
      TableHeaderLabel: PropTypes.object.isRequired,
      TableRow: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Table: components.Table,
      TableBody: components.TableBody,
      TableCell: components.TableCell,
      TableHeader: components.TableHeader,
      TableHeaderLabel: components.TableHeaderLabel,
      TableRow: components.TableRow,
    };

    const initialProps = {
      Table: {},
      TableBody: {},
      TableCell: {},
      TableHeader: {},
      TableHeaderLabel: {
        onClick: () => console.log('TableHeaderLabel click'), // eslint-disable-line no-console
      },
      TableRow: {},
    };

    const initialPropOptions = {
      Table: {
        children: {
          options: [{
            name: 'Header',
            children: (
              <TableHeader { ...initialProps.TableHeader }>
                <TableHeaderLabel { ...initialProps.TableHeaderLabel }>
              Column A
              </TableHeaderLabel>
                <TableHeaderLabel { ...initialProps.TableHeaderLabel }>
              Column B
              </TableHeaderLabel>
                <TableHeaderLabel { ...initialProps.TableHeaderLabel }>
              Column C
              </TableHeaderLabel>
                <TableHeaderLabel { ...initialProps.TableHeaderLabel }>
              Column D
              </TableHeaderLabel>
              </TableHeader>
            ),
          }, {
            name: 'Header + Body',
            children: [
              <TableHeader { ...initialProps.TableHeader } key="header">
                <TableHeaderLabel { ...initialProps.TableHeaderLabel }>
              Column A
              </TableHeaderLabel>
                <TableHeaderLabel { ...initialProps.TableHeaderLabel }>
              Column B
              </TableHeaderLabel>
                <TableHeaderLabel { ...initialProps.TableHeaderLabel }>
              Column C
              </TableHeaderLabel>
                <TableHeaderLabel { ...initialProps.TableHeaderLabel }>
              Column D
              </TableHeaderLabel>
              </TableHeader>,
              <TableBody { ...initialProps.TableBody } key="body">
                <TableRow { ...initialProps.TableRow }>
                  <TableCell { ...initialProps.TableCell }>Lorem ipsum dolar amor</TableCell>
                </TableRow>
              </TableBody>,
            ],
          }],
        },
      },
      TableBody: {
        children: {
          count: 5,
          min: 1,
          max: 5,
        },
      },
      TableCell: {
        isSelected: {
          applyToIndex: 2,
        },
      },
      TableRow: {
        children: {
          count: 4,
          min: 1,
          max: 8,
        },
        hover: {
          applyToIndex: 4,
        },
      },
      TableHeaderLabel: {
        grow: {
          applyToIndex: 2,
        },
        onClick: {
          included: false,
        },
        shrink: {
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
          { initialPropOptions.Table.children.options[1].children }
        </Table>
      </ExampleConfig>
    );
  }
}

export default [ TableExample ];

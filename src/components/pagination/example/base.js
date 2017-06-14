import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, Pagination, TextInput } from 'bw-axiom';

export default class PagiantionExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      displayRange: 5,
      totalPages: 100,
    };
  }

  handleOnChange(event, prop) {
    this.setState({
      [prop]: event.target.value
        ? parseInt(event.target.value, 10)
        : 0,
    });
  }

  render() {
    const {
      currentPage,
      displayRange,
      totalPages,
    } = this.state;

    return (
      <Example name="Pagination">
        <Grid space="large">
          <GridCell>
            <TextInput
                label="Current page"
                onChange={ (e) => this.handleOnChange(e, 'currentPage') }
                placeholder="Set the page"
                value={ currentPage || '' } />
          </GridCell>

          <GridCell>
            <TextInput
                label="Display Range"
                onChange={ (e) => this.handleOnChange(e, 'displayRange') }
                placeholder="Enter a display range"
                value={ displayRange || '' } />
          </GridCell>

          <GridCell>
            <TextInput
                label="Total Pages"
                onChange={ (e) => this.handleOnChange(e, 'totalPages') }
                placeholder="Enter number of pages"
                value={ totalPages || '' } />
          </GridCell>
        </Grid>

        <Snippet>
          <Pagination
              currentPage={ currentPage }
              displayRange={ displayRange }
              onPageChange={ (currentPage) => this.setState({ currentPage }) }
              totalPages={ totalPages } />
        </Snippet>
      </Example>
    );
  }
}

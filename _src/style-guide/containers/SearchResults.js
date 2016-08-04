import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardContent, CardList, CardListItem } from 'bw-axiom/react';
import { Icon } from 'bw-axiom/react';
import { Heading, Italic, Link } from 'bw-axiom/react';
import { LayoutContent, LayoutFullHeightContainer } from 'bw-axiom/react/layouts/established';

export class SearchResults extends Component {
  static propTypes = {
    searchState: PropTypes.shape({
      isSearching: PropTypes.bool.isRequired,
      results: PropTypes.array.isRequired,
    }).isRequired,
  };

  render() {
    const { isSearching, results } = this.props.searchState;

    if (isSearching) {
      return (
        <LayoutFullHeightContainer hAlign="center" vAlign="middle">
          <LayoutContent>
            <Card transparent={ true }>
              <CardContent textCenter={ true }>
                Loading...
              </CardContent>
            </Card>
          </LayoutContent>
        </LayoutFullHeightContainer>
      );
    }

    if (results.length === 0) {
      return (
        <LayoutFullHeightContainer hAlign="center" vAlign="middle">
          <LayoutContent>
            <Card transparent={ true }>
              <CardContent textCenter={ true }>
                <Icon name="binoculars" size="5x" />
                <Heading level={ 4 }>There's no results, but don't give up keep looking.</Heading>
              </CardContent>
            </Card>
          </LayoutContent>
        </LayoutFullHeightContainer>
      );
    }

    return (
      <LayoutContent>
        <Card>
          <CardTitle title="Search Results" />
          <CardList>
            { results.map(({ to, name }, index) =>
              <CardListItem key={ index }>
                <Heading level={ 5 } space={ false }>
                  <Link to={ to }>
                    { name } - <Italic textWeak={ true }>{ to }</Italic>
                  </Link>
                </Heading>
              </CardListItem>
            ) }
          </CardList>
        </Card>
      </LayoutContent>
    );
  }
}

function select(state) {
  return {
    searchState: state.search,
  };
}

export default connect(select)(SearchResults);

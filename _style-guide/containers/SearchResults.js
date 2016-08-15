import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Card from 'bw-axiom/components/card/Card';
import CardTitle from 'bw-axiom/components/card/CardTitle';
import CardContent from 'bw-axiom/components/card/CardContent';
import CardList from 'bw-axiom/components/card/CardList';
import CardListItem from 'bw-axiom/components/card/CardListItem';
import Icon from 'bw-axiom/components/icon/Icon';
import Heading from 'bw-axiom/components/typography/Heading';
import Paragraph from 'bw-axiom/components/typography/Paragraph';
import Italic from 'bw-axiom/components/typography/Italic';
import Link from 'bw-axiom/components/typography/Link'
import LayoutContent from 'style-guide/components/Layout/LayoutContent';
import LayoutFullHeightContainer from 'style-guide/components/Layout/LayoutFullHeightContainer';

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
                <Paragraph><Icon name="binoculars" size="xxxlarge" /></Paragraph>
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
          <CardTitle>
            <Heading level={ 4 }>Search Results</Heading>
          </CardTitle>

          <CardList>
            { results.map(({ to, name }, index) =>
              <CardListItem key={ index }>
                <Heading level={ 5 }>
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

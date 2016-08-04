import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';
import React, { Component } from 'react';
import { Card, CardTitle, CardContent } from 'bw-axiom/react';
import { TextInput } from 'bw-axiom/react';
import { Icon } from 'bw-axiom/react';
import { Link, Paragraph } from 'bw-axiom/react';
import { iconList, iconCategories } from './utils';
import IconGrid from './IconGrid';

export default class IconsList extends Component {
  componentWillMount() {
    this.setState({ search: '' });
    this.setSearchValueDebounced = debounce(::this.setSearchValue, 250);
  }

  searchIconList(text) {
    const fuse = new Fuse(iconList, {
      keys: ['name', 'filter'],
      threshold: 0.1,
    });

    return fuse.search(text);
  }

  setSearchValue(value) {
    this.setState({ search: value });
  }

  resetSearchValue() {
    this.setSearchValue('');
    this.refs.search.refs.original.refs.input.value = '';
  }

  onChangeHandler(event) {
    const { target: { value } } = event;
    event.persist();
    this.setSearchValueDebounced(value);
  }

  render() {
    const { search } = this.state;
    let foundIcons;

    if (search) {
      foundIcons = this.searchIconList(search);
    }

    return (
      <div>
        <Card>
          <CardContent>
            <TextInput
                onChange={ ::this.onChangeHandler }
                placeholder="Got a specific icon in mind?"
                ref="search">
              <Icon name="search" />
            </TextInput>
          </CardContent>
        </Card>

        { do {
          if (search) {
            <Card>
              <CardTitle title={ `Search for "${search}"` } />
              <CardContent>
                { do {
                  if (foundIcons.length) {
                    <IconGrid icons={ foundIcons } />
                  } else {
                    <Paragraph textCenter={ true }>
                      Sorry no icons found matching "{ search }"
                    </Paragraph>
                  }
                } }
              </CardContent>

              <CardContent>
                <Paragraph textCenter={ true }>
                  <Link onClick={ ::this.resetSearchValue }>
                    Not there? Clear the search...
                  </Link>
                </Paragraph>
              </CardContent>
            </Card>
          } else {
            {Object.keys(iconCategories).map((category, index) =>
              <Card key={ index }>
                <CardTitle title={ category } />
                <CardContent>
                  <IconGrid icons={ iconCategories[category] } />
                </CardContent>
              </Card>
            )}
          }
        } }
      </div>
    );
  }
}

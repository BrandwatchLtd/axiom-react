import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';
import TextInput from '../../form/TextInput';
import Link from '../../typography/Link';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import Icon from '../Icon';
import IconGrid from './IconGrid';
import { iconList, iconCategories } from './utils';
import ExampleBox from 'style-guide/components/Example/ExampleBox';

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
        <ExampleBox>
          <TextInput
              onChange={ ::this.onChangeHandler }
              placeholder="Got a specific icon in mind?"
              ref="search">
            <Icon name="search" />
          </TextInput>
        </ExampleBox>

        { do {
          if (search) {
            <ExampleBox>
              <Heading style="title">Search for { search }</Heading>

              { do {
                if (foundIcons.length) {
                  <IconGrid icons={ foundIcons } />;
                } else {
                  <Paragraph textCenter={ true }>
                    Sorry no icons found matching "{ search }"
                  </Paragraph>;
                }
              } }

              <Paragraph textCenter={ true }>
                <Link onClick={ ::this.resetSearchValue }>
                  Not there? Clear the search...
                </Link>
              </Paragraph>
            </ExampleBox>;

          } else {

            {Object.keys(iconCategories).map((category, index) =>
              <ExampleBox key={ index }>
                <Heading style="title">{ category }</Heading>
                <IconGrid icons={ iconCategories[category] } />
              </ExampleBox>
            );}

          }
        } }
      </div>
    );
  }
}

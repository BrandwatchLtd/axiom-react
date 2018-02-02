import React, { Component } from 'react';
import { BadgeGroup, Badge } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <BadgeGroup>
            <Badge color="moon-lagoon">128%</Badge>
            <Badge color="blast-off">+30031</Badge>
            <Badge color="giant-leap">Beta</Badge>
            <Badge color="new-horizon">NEW</Badge>
          </BadgeGroup>

          <BadgeGroup>
            <Badge color="moon-lagoon" opacity={ 0.2 }>128%</Badge>
            <Badge color="blast-off" opacity={ 0.2 }>+30031</Badge>
            <Badge color="giant-leap" opacity={ 0.2 }>Beta</Badge>
            <Badge color="new-horizon" opacity={ 0.2 }>NEW</Badge>
          </BadgeGroup>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Badge/Badge'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Badge/BadgeGroup'),
        ] } />
      </DocumentationContent>
    );
  }
}

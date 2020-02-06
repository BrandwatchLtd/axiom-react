import React, { Component } from 'react';
import { Reveal } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Reveal visible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla iaculis eleifend turpis, at varius lectus ullamcorper a.
            Sed cursus scelerisque aliquet. Mauris mollis eros ac erat congue
            mattis id at nisl. Sed lacus neque, pulvinar eu neque sed, cursus
            vestibulum nisi.
          </Reveal>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Reveal/Reveal'),
        ] } />
      </DocumentationContent>
    );
  }
}

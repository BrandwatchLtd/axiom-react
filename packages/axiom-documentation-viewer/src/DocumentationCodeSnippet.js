import Prism from 'prismjs';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { html as beautifyHtml } from 'js-beautify';
import { Base } from '@brandwatch/axiom-components';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-scss';
import './DocumentationCodeSnippet.css';

export default class DocumentationCodeSnippet extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  render() {
    const { children } = this.props;
    const code = Prism.highlight(
      beautifyHtml(children, {
        indent_size: 2,
        preserve_newlines: true,
        unformatted: [],
      }),
      Prism.languages.jsx
    );

    return (
      <Base Component="pre" className="language-jsx" space="x6" theme="night">
        <code
          className="language-jsx"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </Base>
    );
  }
}

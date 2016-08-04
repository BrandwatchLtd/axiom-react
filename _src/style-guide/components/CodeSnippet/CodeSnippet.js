import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-scss';
import { SCSS, HTML, JSX, JS } from 'style-guide/constants/CodeLanguages';
import { prepareSnippet } from 'style-guide/utils/code-formatting';

if (__CLIENT__) {
  require('prismjs/themes/prism.css');
}

export default class CodeSnippet extends Component {
  static propTypes = {
    children: PropTypes.any,
    language: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.highlightElement();
  }

  componentDidUpdate() {
    this.highlightElement();
  }

  highlightElement() {
    Prism.highlightElement(this.refs.code);
  }

  render() {
    const { children, language } = this.props;
    const code = prepareSnippet(children, language);
    const classes = classnames({
      'language-markup': language === HTML,
      'language-javascript': language === JS,
      'language-jsx': language === JSX,
      'language-scss': language === SCSS,
    }) || `language-${language}`;

    return (
      <pre className={ classes } ref="code">
        <code dangerouslySetInnerHTML={ { __html: code } } />
      </pre>
    );
  }
}

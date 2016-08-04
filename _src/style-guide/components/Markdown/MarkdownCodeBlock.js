import React, { Component, PropTypes } from 'react';
import { JSX, HTML } from 'style-guide/constants/CodeLanguages';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

function getJsxAndHtmlContent(content) {
  const pattern = /---jsx\n([\s\S]*)\n---html\n([\s\S]*)/;
  const matches = pattern.exec(content);

  return {
    jsx: matches && matches[1],
    html: matches && matches[2],
  }
}

export default class MarkdownCodeBlock extends Component {
  render() {
    const { content, language } = this.props;
    const { jsx, html } = getJsxAndHtmlContent(content);

    if (language === JSX && jsx && html) {
      return (
        <CodeTabset>
          <CodeSnippet language={ JSX }>{ jsx }</CodeSnippet>
          <CodeSnippet language={ HTML }>{ html }</CodeSnippet>
        </CodeTabset>
      )
    }

    return (
      <CodeSnippet language={ language }>{ content }</CodeSnippet>
    );
  }
}

MarkdownCodeBlock.propTypes = {
  content: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

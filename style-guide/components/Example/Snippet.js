import React, { Component, PropTypes } from 'react';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import { filterSnippet } from 'style-guide/utils/example-filter';
import renderSnippet, { jsxRender, htmlRender } from 'style-guide/utils/render-snippet';

export default class Snippet extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  }

  render() {
    const { children } = this.props;
    const jsxSnippet = renderSnippet(filterSnippet(children), jsxRender);
    const htmlSnippet = renderSnippet(filterSnippet(children), htmlRender);

    return (
      <CodeTabset>
        { do { if (jsxSnippet) {
          <CodeSnippet language="jsx">{ jsxSnippet }</CodeSnippet>;
        } } }

        { do { if (htmlSnippet) {
          <CodeSnippet language="html">{ htmlSnippet }</CodeSnippet>;
        } } }
      </CodeTabset>
    );
  }
}

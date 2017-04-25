import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { filterSnippet } from '../../utils/example-filter';
import renderSnippet, { jsxRender, htmlRender } from '../../utils/render-snippet';
import { CodeSnippet, CodeTabset } from '../CodeSnippet';

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

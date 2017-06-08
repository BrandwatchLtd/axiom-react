import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import { filterRender, filterSnippet } from '../../utils/example-filter';
import renderSnippet, { jsxRender, htmlRender } from '../../utils/render-snippet';
import { CodeSnippet, CodeTabset } from '../CodeSnippet';

export default class Snippet extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    renderSkip: PropTypes.bool,
  }

  render() {
    const { children, renderSkip } = this.props;
    const jsxSnippet = renderSnippet(filterSnippet(children), jsxRender);
    const htmlSnippet = renderSnippet(filterSnippet(children), htmlRender);

    return (
      <Base space="medium">
        { !renderSkip && filterRender(children) }

        <CodeTabset>
          { jsxSnippet && (
            <CodeSnippet language="jsx">{ jsxSnippet }</CodeSnippet>
          ) }

          { htmlSnippet && (
            <CodeSnippet language="html">{ htmlSnippet }</CodeSnippet>
          ) }
        </CodeTabset>
      </Base>
    );
  }
}

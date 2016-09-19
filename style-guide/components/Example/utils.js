import React from 'react';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import { filterRender, filterSnippet } from 'style-guide/utils/example-filter';
import renderSnippet, { jsxRender, htmlRender } from 'style-guide/utils/render-snippet';
import { isReactElement, isReactElements } from 'style-guide/utils/react-elements';

export function renderExampleContent(snippet) {
  const jsxSnippet = renderSnippet(filterSnippet(snippet), jsxRender);
  const htmlSnippet = renderSnippet(filterSnippet(snippet), htmlRender);
  let codeTabset;

  if (jsxSnippet || htmlSnippet) {
    codeTabset = (
      <CodeTabset key="code">
        { do { if (jsxSnippet) {
          <CodeSnippet language="jsx">
            { renderSnippet(filterSnippet(snippet), jsxRender) }
          </CodeSnippet>;
        } } }

        { do { if (htmlSnippet) {
          <CodeSnippet language="html">
            { renderSnippet(filterSnippet(snippet), htmlRender) }
          </CodeSnippet>;
        } } }
      </CodeTabset>
    );
  }

  return [
    filterRender(snippet),
    codeTabset,
  ];
}

function normaliseExamples(example, params) {
  function normalise(context) {
    if (!context) {
      return undefined;
    }

    if (isReactElement(context)) {
      return [context];
    }

    if (typeof context === 'function') {
      return normaliseExamples(context(params), params);
    }

    if (isReactElements(context)) {
      return context;
    }

    if (Array.isArray(context)) {
      return normaliseExamples(context, params);
    }
  }

  if (Array.isArray(example)) {
    return example.map((example) => normaliseExamples(example, params));
  }

  return {
    ...example,
    children: normalise(example.children),
    snippet: normalise(example.snippet),
  };
}

export function renderExamples(examples, Component, params) {
  if (isReactElement(examples)) {
    return examples;
  }

  return normaliseExamples(examples, params).map((example, index) =>
    <Component { ...example } { ...params } key={ index } />
  );
}

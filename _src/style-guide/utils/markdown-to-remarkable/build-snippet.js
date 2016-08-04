import { cloneElement } from 'react';
import { isReactElement, isReactElements } from 'style-guide/utils/react-elements';
import { reactElementToHtmlString, reactElementToJsxString } from 'style-guide/utils/react-element-to-string';

const DEMO_CONTENT_PLACEHOLDER = '...';

function shouldIncludeDemoCotent(input, output) {
  return !input.some((child) => child !== DEMO_CONTENT_PLACEHOLDER) &&
         !output.includes(DEMO_CONTENT_PLACEHOLDER);
}

function extract(element, topLevel = true) {
  if (!element) return null;
  if (Array.isArray(element)) return element.map((e) => extract(e, topLevel)).filter((e) => topLevel ? isReactElements(e) : e);
  if (!isReactElement(element)) return DEMO_CONTENT_PLACEHOLDER;
  if (element.props.snippetReplace) return DEMO_CONTENT_PLACEHOLDER;
  if (element.props.snippetSkip) return null;
  if (element.props.snippetIgnore) return extract(element.props.children, topLevel);

  const extractedChildren = extract(element.props.children, false);
  const finalChildren = !Array.isArray(extractedChildren) ? extractedChildren :
    extractedChildren.reduce((output, element) => {
      if (element) {
        if (element === DEMO_CONTENT_PLACEHOLDER) {
          if (shouldIncludeDemoCotent(extractedChildren, output)) {
            output.push(element);
          }
        } else {
          output.push(element);
        }
      }

      return output;
    }, []);

  return cloneElement(element, null, finalChildren);
}

export default function buildSnippet(element) {
  const content = [];
  const snippetContent = extract(element);

  if (snippetContent) {
    const jsxSnippet = reactElementToJsxString(snippetContent, ['renderSkip']);
    const htmlSnippet = reactElementToHtmlString(snippetContent, ['renderSkip']);

    if (jsxSnippet || htmlSnippet) {
      content.push('```jsx');

      if (jsxSnippet) {
        if (htmlSnippet) {
          content.push('---jsx');
        }

        content.push(jsxSnippet);
      }

      if (htmlSnippet) {
        if (jsxSnippet) {
          content.push('---html');
        }

        content.push(htmlSnippet);
      }

      content.push('```');
    }
  }

  return content;
}

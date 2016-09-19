import React, { Component, PropTypes } from 'react';
import BlockContainer from 'bw-axiom/components/containers/BlockContainer';
import Paragraph from 'bw-axiom/components/typography/Paragraph';
import Heading from 'bw-axiom/components/typography/Heading';
import { renderExampleContent } from 'style-guide/components/Example/utils';
import { isReactElements } from 'style-guide/utils/react-elements';

export default class Level2 extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    description: PropTypes.string,
    name: PropTypes.string,
    queryParams: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired,
    snippet: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  };

  render() {
    const { name, children, description, snippet } = this.props;
    let snippetContent;
    let childrenContent;

    if (children) {
      childrenContent = isReactElements(children)
        ? children
        : undefined;
    }

    if (snippet) {
      snippetContent = isReactElements(snippet)
        ? renderExampleContent(snippet)
        : undefined;
    }

    return (
      <BlockContainer>
        { name && <Heading level={ 5 }>{ name }</Heading> }
        { childrenContent }
        { description && <Paragraph>{ description }</Paragraph> }
        { snippetContent }
      </BlockContainer>
    );
  }
}

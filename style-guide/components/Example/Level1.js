import React, { Component, PropTypes } from 'react';
import Card from 'bw-axiom/components/card/Card';
import CardTitle from 'bw-axiom/components/card/CardTitle';
import CardContent from 'bw-axiom/components/card/CardContent';
import Paragraph from 'bw-axiom/components/typography/Paragraph';
import Heading from 'bw-axiom/components/typography/Heading';
import Level2 from 'style-guide/components/Example/Level2';
import { renderExamples, renderExampleContent } from 'style-guide/components/Example/utils';
import { isReactElements } from 'style-guide/utils/react-elements';

export default class Level1 extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
    queryParams: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired,
    snippet: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  };

  render() {
    const { name, children, description, snippet, routeParams, queryParams } = this.props;
    let snippetContent;
    let childrenContent;

    if (snippet) {
      snippetContent = isReactElements(snippet)
        ? renderExampleContent(snippet)
        : renderExamples(snippet, Level2, { routeParams, queryParams });
    }

    if (children) {
      childrenContent = isReactElements(children)
        ? children
        : renderExamples(children, Level2, { routeParams, queryParams });
    }

    return (
      <Card>
        <CardTitle>
          <Heading level={ 4 }>{ name }</Heading>
        </CardTitle>

        <CardContent>
          { childrenContent }
          { description && <Paragraph>{ description }</Paragraph> }
          { snippetContent }
        </CardContent>
      </Card>
    );
  }
}

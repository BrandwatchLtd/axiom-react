import React, { Component, PropTypes } from 'react';
import Example from 'style-guide/components/Example/Example';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class IconExample extends Component {
  static propTypes = {
    queryParams: PropTypes.shape({
      iconId: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { queryParams } = this.props;
    const { iconId } = queryParams;

    return (
      <Example name="Icon mixin">
        <CodeTabset snippetSkip={ true }>
          <CodeSnippet language="scss">{`
            @import '../icon/mixins';
            @import '../icon/vars';

            .element::before {
              @include icon($fa-var-${iconId});
            }
          `}</CodeSnippet>
        </CodeTabset>
      </Example>
    );
  }
}

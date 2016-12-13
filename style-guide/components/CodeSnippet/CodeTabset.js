import React, { Component, PropTypes } from 'react';
import { Tab, Tabset } from 'bw-axiom';

export default class CodeTabset extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    const codeSnippets = Array.isArray(children) ? children : [children];
    const tabOrder = [ 'jsx', 'scss', 'js', 'html' ];
    const titleMap = {
      html: 'Raw HTML',
      jsx: 'React',
      js: 'JS',
      scss: 'Scss',
    };

    return (
      <Tabset>
        { codeSnippets
          .filter((tab) => !!tab)
          .sort((a, b) => tabOrder.indexOf(a.props.language) - tabOrder.indexOf(b.props.language))
          .map((snippet, index) =>
            <Tab key={ index } title={ titleMap[snippet.props.language] }>
              { snippet }
            </Tab>
          )
        }
      </Tabset>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { Tabset, Tab } from 'bw-axiom/react';

export default class CodeTabset extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    const codeSnippets = Array.isArray(children) ? children : [children];
    const tabOrder = [ 'jsx', 'sass', 'js', 'html' ];
    const titleMap = {
      html: 'Raw HTML',
      jsx: 'React',
      js: 'JS',
      sass: 'Sass',
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

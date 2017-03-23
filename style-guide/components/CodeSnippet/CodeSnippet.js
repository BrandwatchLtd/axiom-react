import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import { prepareSnippet } from '../../utils/code-formatting';
import './CodeSnippet.css';

export default class CodeSnippet extends Component {
  static propTypes = {
    children: PropTypes.node,
    language: PropTypes.string.isRequired,
  };

  render() {
    const { children, language } = this.props;
    const { className, code } = prepareSnippet(children, language);

    return (
      <Base Component="pre" className={ className } space="medium">
        <code
            className={ className }
            dangerouslySetInnerHTML={ { __html: code } } />
      </Base>
    );
  }
}

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Editor.css';

let brace;

if (typeof window !== 'undefined') {
  brace = require('brace');
  require('brace/mode/javascript');
  brace.define('ace/theme/dm', (require, exports) => {
    exports.isDark = false;
    exports.cssClass = 'ace-dm';
  });
}

export default class Editor extends Component {
  static propTypes = {
    initialValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { initialValue, onChange } = this.props;

    this.ide = brace.edit(this.el);
    this.ide.setShowPrintMargin(false);
    this.ide.setShowFoldWidgets(false);
    this.ide.setHighlightActiveLine(false);
    this.ide.$blockScrolling = Infinity;
    this.ide.getSession().setMode('ace/mode/javascript');
    this.ide.setTheme('ace/theme/dm');
    this.ide.session.setUseWrapMode(true);
    this.ide.session.setOptions({
      tabSize: 2,
      useSoftTabs: true,
    });

    this.ide.setValue(initialValue, 1);
    this.ide.on('change', () => onChange({ content: this.ide.getValue() }));
  }

  render() {
    return <div className="dm-editor" ref={el => (this.el = el)} />;
  }
}

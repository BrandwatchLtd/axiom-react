import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Tabset, Tab } from 'bw-axiom';

export default class TabSetExample extends Component {
  render() {
    return (
      <Example name="Sizes">
        <Snippet>
          <Tabset size="small">
            <Tab snippetIgnore={ true } title="Lorem ipsum"></Tab>
            <Tab snippetIgnore={ true } title="Nunc eu massa ligula"></Tab>
            <Tab disabled={ true } snippetIgnore={ true } title="I'm Disabled!"></Tab>
          </Tabset>

          <Tabset size="large">
            <Tab snippetIgnore={ true } title="Lorem ipsum"></Tab>
            <Tab snippetIgnore={ true } title="Nunc eu massa ligula"></Tab>
            <Tab disabled={ true } snippetIgnore={ true } title="I'm Disabled!"></Tab>
          </Tabset>
        </Snippet>
      </Example>
    );
  }
}

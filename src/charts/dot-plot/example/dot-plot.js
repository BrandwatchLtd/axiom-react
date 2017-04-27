import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Base, DotPlot, Dot } from 'bw-axiom';
import { labels, data } from './data';

export default class DotPlotExample extends Component {
  render() {
    return (
      <Example name="DotPlot">
        <Snippet>
          { data.map(({ data, label }, index) =>
            <Base
                key={ label }
                snippetIgnore={ true }
                snippetSkip={ index > 0 }
                space="small">
              <DotPlot>
                { data.map((value, index) =>
                  <Dot
                      color={ labels[index].color }
                      key={ index }
                      percent={ value } />
                ) }
              </DotPlot>
            </Base>
          ) }
        </Snippet>
      </Example>
    );
  }
}

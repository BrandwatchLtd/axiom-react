import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContent from 'style-guide/components/Layout/LayoutContent';

export class YouAreLost extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <LayoutContent>
          Not Found
        </LayoutContent>
      </div>
    );
  }
}


function select() {
  return {};
}

export default connect(select)(YouAreLost);

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { LayoutContent } from 'bw-axiom/react/layouts/established';

export class YouAreLost extends Component {
  static propTypes = {};

  render() {
    const { } = this.props;

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

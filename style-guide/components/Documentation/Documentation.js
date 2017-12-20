import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './Documentation.css';

const components = JSON.parse(process.env.COMPONENT_PROPS);

export default class Documentation extends Component {
  static propTypes = {
    examples: PropTypes.array.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  static contextTypes = {
    axiomLanguage: PropTypes.string.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      this.context.axiomLanguage !== nextContext.axiomLanguage ||
      this.props.location.pathname !== nextProps.location.pathname
    );
  }

  render() {
    const { examples } = this.props;

    return (
      <Base className="dm-documentation">
        { examples.map((Example, index) =>
          <Example
              components={ components }
              key={ index } />
        ) }
      </Base>
    );
  }
}

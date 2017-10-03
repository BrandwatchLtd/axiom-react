import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { LayoutContent } from '../Layout';
import { ExampleHeader } from '../Example';
import './Documentation.css';

const components = JSON.parse(process.env.COMPONENT_PROPS);

export default class Documentation extends Component {
  static propTypes = {
    examples: PropTypes.array.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
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
    const { examples, name } = this.props;

    return (
      <div className="dm-documentation">
        <LayoutContent>
          <ExampleHeader name={ name } />
        </LayoutContent>

        <LayoutContent>
          { examples.map((Example, index) =>
            <Example
                components={ components }
                key={ index } />
          ) }
        </LayoutContent>
      </div>
    );
  }
}

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './Pictogram.css';

const PICTOGRAM_NAME_MAP = {
  'female': require('./svgs/female.svg'),
  'individual': require('./svgs/individual.svg'),
  'male': require('./svgs/male.svg'),
  'organisation': require('./svgs/organisation.svg'),
};

export default class Pictogram extends Component {
  static propTypes = {
    /** Name of the pictogram that will be displayed */
    name: PropTypes.oneOf([
      'female',
      'individual',
      'male',
      'organisation',
    ]),
    /** Size of pictogram (with unit) */
    size: PropTypes.string,
  };

  static defaultProps = {
    size: '3rem',
  };

  render() {
    const { name, size, ...rest } = this.props;
    const style = { width: size, height: size };

    if (!PICTOGRAM_NAME_MAP[name]) {
      return null;
    }

    const { body, viewBox } = PICTOGRAM_NAME_MAP[name];

    return (
      <Base { ...rest }
          Component="svg"
          className="ax-pictogram"
          dangerouslySetInnerHTML={ { __html: body } }
          style={ style }
          viewBox={ viewBox } />
    );
  }
}

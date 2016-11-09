import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';
import { fontHeadings } from './_vars';

if (__INCLUDE_CSS__) {
  require('./Heading.scss');
}

const headingIds = fontHeadings.map(({ id }) => id);
const headingDefaultId = fontHeadings.find((heading) => heading.default).id;

const propTypes = {
  children: { node: true, required: true },
  style: { oneOf: headingIds, default: headingDefaultId },
};

export class Heading extends Component {
  static propTypes = propTypes;

  render() {
    const {
      className,
      style = propTypes.style.default,
      ...rest
    } = this.props;

    const { tag } = fontHeadings.find(({ id }) => id === style);
    const classes = classnames(className, 'ax-heading', {
      [`ax-heading--${style}`]: style,
    });

    return (
      <Base { ...rest } Component={ tag } className={ classes } />
    );
  }
}

export default enhance(Heading)(addPropTypes());

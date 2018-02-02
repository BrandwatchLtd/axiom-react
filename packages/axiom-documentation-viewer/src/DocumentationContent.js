import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement, isValidElement } from 'react';
import { Base, Heading, Paragraph } from '@brandwatch/axiom-components';

export default class DocumentationContent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    description: PropTypes.string,
  };

  static childContextTypes = {
    applyComponentProps: PropTypes.func.isRequired,
    getPropValue: PropTypes.func.isRequired,
    registerPropTypes: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
  };

  getChildContext() {
    return {
      applyComponentProps: this.applyComponentProps.bind(this),
      getPropValue: this.getPropValue.bind(this),
      registerPropTypes: this.registerPropTypes.bind(this),
      setValue: this.setValue.bind(this),
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  registerPropTypes(components) {
    this.setState(components.reduce((propTypes, { name, props }) => ({
      ...propTypes,
      [name]: props,
    }), {}));
  }

  setValue(componentName, prop, value) {
    this.setState({ [`${componentName}.${prop}`]: value });
  }

  getPropValue(componentName, prop) {
    return this.state[`${componentName}.${prop}`];
  }

  getComponentProps(componentName) {
    return Object.keys(this.state)
      .filter((key) => key.indexOf(`${componentName}.`) === 0)
      .reduce((props, key) => {
        if (this.state[key] !== undefined) {
          const [, prop] = key.split('.');

          if (this.isComponentPropFunc(componentName, prop)) {
            if (this.state[key]) {
              props[prop] = () => {};
            }
          } else {
            props[prop] = this.state[key];
          }
        }

        return props;
      }, {});
  }

  isComponentPropFunc(componentName, prop) {
    return this.state[componentName][prop].type.name === 'func';
  }

  interceptFuncProps(componentName, props, defaultProps = {}) {
    if (!this.state[componentName]) {
      return {};
    }

    return Object.keys(props)
      .filter((prop) => this.state[componentName][prop] &&
          this.isComponentPropFunc(componentName, prop) &&
          props[prop] &&
          (!props[prop].prototype || !props[prop].prototype.isReactComponent) &&
          props[prop] !== defaultProps[prop])
      .reduce((nextProps, prop) => ({ ...nextProps,
        [prop]: (...args) => props[prop](
          this.setValue.bind(this),
          this.getPropValue.bind(this),
          ...args,
          ),
      }), {});
  }

  applyComponentProps(component) {
    if (Array.isArray(component)) {
      return Children.map(component, (child) =>
        this.applyComponentProps(child));
    }

    if (!isValidElement(component) || !component.type) {
      return component;
    }

    const props = {
      ...this.getComponentProps(
        component.type.displayName || component.type.name),
      ...this.interceptFuncProps(
        component.type.displayName || component.type.name,
        component.props,
        component.type.defaultProps),
    };

    if (component.props.children) {
      props.children = Array.isArray(component.props.children)
        ? Children.map(component.props.children, (child) => this.applyComponentProps(child))
        : this.applyComponentProps(component.props.children);
    }

    return cloneElement(component, props);
  }

  render() {
    const { children, description } = this.props;

    return (
      <Base space="x8">
        { description && <Paragraph>{ description }</Paragraph> }
        <Heading space="x4" textSize="headtitle">Examples</Heading>
        { children }
      </Base>
    );
  }
}

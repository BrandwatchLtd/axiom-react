import PropTypes from 'prop-types';
import React, { Component } from 'react';
import extend from 'deep-extend';
import classnames from 'classnames';
import { Base, Tabset, Tab } from 'bw-axiom';
import set from 'lodash.set';
import { filterRender, filterSnippet } from '../../utils/example-filter';
import renderSnippet, { jsxRender, htmlRender } from '../../utils/render-snippet';
import CodeSnippet from '../CodeSnippet/CodeSnippet';
import ComponentProps from './ComponentProps';
import { basePropTypes, mergeState, render } from './utils';
import './ExampleConfig.css';

const paramsToObject = (type, args) => set({},
  [args[0], type, ...args.slice(1, -1)].join('.'), args[args.length - 1]);

const mergeSetState = (state, type, ...args) => extend({}, state, ...(Array.isArray(args[0])
  ? args[0].map((args) => paramsToObject(type, args))
  : [paramsToObject(type, args)]));

export default class ExampleConfig extends Component {
  static propTypes = {
    children: PropTypes.node,
    hasVisual: PropTypes.bool,
    initialPropOptions: PropTypes.object,
    initialProps: PropTypes.object,
    propTypes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    initialPropOptions: {},
    hasVisual: true,
  };

  constructor(props) {
    super(props);
    this.state = this.getURLState() || {};
    this.boundSetProp = this.setProp.bind(this);
    this.boundSetPropOption = this.setPropOption.bind(this);
  }

  getURLState() {
    if (typeof window !== 'undefined' && window.URLSearchParams) {
      return JSON.parse(
        new window.URLSearchParams(window.location.search.substring(1)).get('state')
      );
    }
  }

  setProp(component, ...args) {
    this.updateState(mergeSetState(this.state, 'props', component, ...args));
  }

  setPropOption(component, ...args) {
    this.updateState(mergeSetState(this.state, 'options', component, ...args));
  }

  updateState(state) {
    window.history.pushState('', '',
      `${window.location.pathname}?state=${
          window.encodeURIComponent(JSON.stringify(state))}`);
    this.setState(state);
  }

  render() {
    const { children, hasVisual, initialProps, initialPropOptions, propTypes } = this.props;
    const renderState = mergeState(propTypes, initialProps, initialPropOptions, this.state);
    const baseState = mergeState(basePropTypes, initialProps, initialPropOptions, this.state, true);
    const configState = mergeState(propTypes, initialProps, initialPropOptions, this.state, true);
    const example = render(
      children,
      propTypes,
      renderState,
      this.boundSetProp,
      this.boundSetPropOption,
    );

    const jsxSnippet = renderSnippet(filterSnippet(example), jsxRender);
    const htmlSnippet = renderSnippet(filterSnippet(example), htmlRender);

    const classes = classnames('dm-example', {
      'dm-example--hidden': !hasVisual,
    });

    /**
     * Sticky behvaiour needs to be applied to the sibling of the Tabset
     * otherwise it has nothing position itself to.
     */
    let sticky = '0rem';
    for (const component in configState) {
      if (configState[component].props && configState[component].props.sticky) {
        sticky = configState[component].props.sticky;
        break;
      }
    }

    return (
      <Base className={ classes }>
        <Base className="dm-example__visual" sticky={ sticky }>
          { filterRender(example) }
        </Base>

        <Tabset>
          <Tab title="Properties">
            { Object.keys(propTypes).map((component) =>
              <ComponentProps
                  baseState={ baseState.Base }
                  component={ component }
                  key={ component }
                  propOptions={ configState[component].options }
                  propTypes={ propTypes[component] }
                  propValues={ configState[component].props }
                  setPropOptionValue={ (...a) => this.setPropOption(component, ...a) }
                  setPropValue={ (...a) => this.setProp(component, ...a) }
                  space="x8" />
            ) }
          </Tab>

          { jsxSnippet && (
            <Tab title="React">
              <CodeSnippet language="jsx">{ jsxSnippet }</CodeSnippet>
            </Tab>
          ) }

          { htmlSnippet && (
            <Tab title="HTML">
              <CodeSnippet language="html">{ htmlSnippet }</CodeSnippet>
            </Tab>
          ) }
        </Tabset>
      </Base>
    );
  }
}

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Card,
  Grid,
  GridCell,
  Label,
  LabelGroup,
  Italic,
  Paragraph,
  Strong,
} from 'bw-axiom';
import './ApiDocsProp.css';

const PROP_TYPE_MAP = {
  array: 'Array',
  arrayOf({ value }) {
    return `ArrayOf( ${resolvePropType(value)} )`;
  },
  bool: 'Boolean',
  enum({ value }) {
    return `OneOf( ${value
      .filter(({ computed }) => !computed )
      .map(({ value }) => value )
      .join(', ')
    } )`;
  },
  func: 'Function',
  object: 'Object',
  node: 'Node( Number, String, Elements, Array )',
  number: 'Number',
  shape({ value }) {
    return JSON.stringify(
      Object.keys(value).reduce((props, key) => ({ ...props,
        [key]: resolvePropType(value[key]),
      }), {})
    , null, 2);
  },
  string: 'String',
  union({ value }) {
    return `OneOfType( ${ value.map(resolvePropType).join(', ')} )`;
  },
};

function resolvePropType(type) {
  return typeof PROP_TYPE_MAP[type.name] === 'function'
    ? PROP_TYPE_MAP[type.name](type)
    : PROP_TYPE_MAP[type.name];
}

export default class ApiDocsProp extends Component {
  static propTypes = {
    propData: PropTypes.shape({
      description: PropTypes.string,
    }).isRequired,
    propName: PropTypes.string.isRequired,
  };

  render()  {
    const { propData, propName } = this.props;
    const { defaultValue, description, required, type } = propData;
    const hasDefault = defaultValue !== undefined;

    return (
      <Card>
        <Grid>
          <GridCell>
            <Paragraph><Strong>{ propName }</Strong></Paragraph>

            { description && (
              <Paragraph>{ description }</Paragraph>
            ) }
          </GridCell>

          { (hasDefault || required) && (
            <GridCell shrink={ true }>
              <LabelGroup>
                { hasDefault && (
                  <Label size="small">
                    Default: <Italic>{ defaultValue.computed
                      ? 'Computed'
                      : JSON.stringify(defaultValue.value)
                    }</Italic>
                  </Label>
                ) }

                { required && (
                  <Label color="error" size="small">Required</Label>
                ) }
              </LabelGroup>
            </GridCell>
          ) }
        </Grid>

        <pre className="dm-doc-api__pre">
          <code className="dm-doc-api__code">
            { resolvePropType(type) }
          </code>
        </pre>
      </Card>
    );
  }
}

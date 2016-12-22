import React, { Component, PropTypes } from 'react';
import { Grid, GridCell, Label, LabelGroup, Italic, Paragraph, Strong } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ApiDocsProp.scss');
}

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

    return (
      <div className="dm-api-docs-prop">
        <Grid>
          <GridCell>
            <Paragraph><Strong>{ propName }</Strong></Paragraph>

            { do { if (description) {
              <Paragraph>{ description }</Paragraph>;
            } } }
          </GridCell>

          <GridCell shrink={ true }>
            <LabelGroup>
              { do {
                if (defaultValue !== undefined) {
                  <Label color="grey" size="small">
                    Default: <Italic>{ defaultValue.computed
                      ? 'Computed'
                      : JSON.stringify(defaultValue.value)
                    }</Italic>
                  </Label>;
                }
              } }

              { do { if (required) {
                <Label color="invalid" size="small">Required</Label>;
              } } }
            </LabelGroup>
          </GridCell>
        </Grid>

        <pre className="dm-doc-api__pre">
          <code className="dm-doc-api__code">
            { resolvePropType(type) }
          </code>
        </pre>
      </div>
    );
  }
}


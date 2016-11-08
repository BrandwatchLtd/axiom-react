import React, { Component, PropTypes } from 'react';
import Grid from 'bw-axiom/components/grid/Grid';
import GridCell from 'bw-axiom/components/grid/GridCell';
import Label from 'bw-axiom/components/label/Label';
import LabelGroup from 'bw-axiom/components/label/LabelGroup';
import Heading from 'bw-axiom/components/typography/Heading';
import Paragraph from 'bw-axiom/components/typography/Paragraph';
import ApiDocsPropType from 'style-guide/components/ApiDocs/ApiDocsPropType';

if (__INCLUDE_CSS__) {
  require('./ApiDocsList.scss');
}

export default class ApiDocsList extends Component {
  static propTypes = {
    componentName: PropTypes.string.isRequired,
    propTypes: PropTypes.object.isRequired,
  };

  render()  {
    const { componentName, propTypes } = this.props;

    return (
      <div className="dm-api-docs-list">
        <Heading key="heading" style="title">{ componentName }</Heading>

        { Object.keys(propTypes).sort().map((key, index) =>
          <div className="dm-api-docs-list__item" key={ index }>
            <Grid>
              <GridCell>
                <Paragraph>{ key }</Paragraph>
              </GridCell>

              <GridCell shrink={ true }>
                <LabelGroup key="labels">
                  { do {
                    if (propTypes[key].default !== undefined) {
                      <Label color="pink" size="small">
                        Defaults: { JSON.stringify(propTypes[key].default) }
                      </Label>;
                    }
                  } }
                  { do {
                    if (propTypes[key].isRequired) {
                      <Label color="red" size="small">Required</Label>;
                    } else {
                      <Label color="grey" size="small">Optional</Label>;
                    }
                  } }
                </LabelGroup>
              </GridCell>
            </Grid>

            <ApiDocsPropType propType={ propTypes[key] } />
          </div>
        ) }
      </div>
    );
  }
}

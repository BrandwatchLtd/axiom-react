import React, { Component, PropTypes } from 'react';
import { CardList, CardListItem } from 'bw-axiom/react';
import { Grid, GridCell } from 'bw-axiom/react';
import { LabelGroup, Label } from 'bw-axiom/react';
import { Heading } from 'bw-axiom/react';
import DocApiPropType from 'style-guide/components/DocApi/DocApiPropType';

export default class DocApiList extends Component {
  static propTypes = {
    propTypes: PropTypes.object.isRequired,
  };

  render()  {
    const { propTypes } = this.props;

    return (
      <CardList>
        { Object.keys(propTypes).sort().map((key) =>
          <CardListItem key={ key }>
            <Grid vAlign="middle">
              <GridCell>
                <Heading key="heading" level={ 5 }>{ key }</Heading>
              </GridCell>

              <GridCell shrink={ true }>
                <LabelGroup key="labels">
                  { do {
                    if (propTypes[key].default) {
                      <Label color="green" size="sm">
                        Defaults: { propTypes[key].default }
                      </Label>
                    }
                  } }
                  { do {
                    if (propTypes[key].isRequired) {
                      <Label color="red" size="sm">Required</Label>
                    } else {
                      <Label color="blue" size="sm">Optional</Label>
                    }
                  } }
                </LabelGroup>
              </GridCell>
            </Grid>

            <pre className="dm-doc-api__pre">
              <DocApiPropType propType={ propTypes[key] } />
            </pre>
          </CardListItem>
        ) }
      </CardList>
    );
  }
}

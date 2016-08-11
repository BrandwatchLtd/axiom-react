import React, { Component, PropTypes } from 'react';
import CardList from 'bw-axiom/components/card/CardList';
import CardListItem from 'bw-axiom/components/card/CardListItem';
import Grid from 'bw-axiom/components/grid/Grid';
import GridCell from 'bw-axiom/components/grid/GridCell';
import Label from 'bw-axiom/components/label/Label';
import LabelGroup from 'bw-axiom/components/label/LabelGroup';
import Heading from 'bw-axiom/components/typography/Heading';
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

            <DocApiPropType propType={ propTypes[key] } />
          </CardListItem>
        ) }
      </CardList>
    );
  }
}

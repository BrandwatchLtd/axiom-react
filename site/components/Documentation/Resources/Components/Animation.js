import React, { Component } from 'react';
import {
  Animation,
  Card,
  CardContent,
  Grid,
  GridCell,
  Heading,
  Text,
} from '@brandwatch/axiom-components';

import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
  }

  componentDidMount() {
    this.setState({
      toggled: true,
    });
  }

  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Grid>
            <GridCell>
              <Animation name="fade-in-right" toggled={ this.state.toggled }>
                <Card shade="shade-3" size="small">
                  <CardContent separatorStyle="dotted">
                    <Heading textSize="headtitle">Fade in right</Heading>
                  </CardContent>
                  <CardContent separatorStyle="dotted">
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis vitae eligendi exercitationem quam, quo, blanditiis cupiditate tenetur dolores deleniti delectus molestiae recusandae omnis consequuntur sed neque!</Text>
                  </CardContent>
                </Card>
              </Animation>
            </GridCell>
            <GridCell>
              <Animation name="fade-in-down" toggled={ this.state.toggled }>
                <Card shade="shade-3" size="small">
                  <CardContent separatorStyle="dotted">
                    <Heading textSize="headtitle">Fade in down</Heading>
                  </CardContent>
                  <CardContent separatorStyle="dotted">
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis vitae eligendi exercitationem quam, quo, blanditiis cupiditate tenetur dolores deleniti delectus molestiae recusandae omnis consequuntur sed neque!</Text>
                  </CardContent>
                </Card>
              </Animation>
            </GridCell>
          </Grid>

          <Grid>
            <GridCell>
              <Animation name="fade-in-up" toggled={ this.state.toggled }>
                <Card shade="shade-3" size="small">
                  <CardContent separatorStyle="dotted">
                    <Heading textSize="headtitle">Fade in up</Heading>
                  </CardContent>
                  <CardContent separatorStyle="dotted">
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis vitae eligendi exercitationem quam, quo, blanditiis cupiditate tenetur dolores deleniti delectus molestiae recusandae omnis consequuntur sed neque!</Text>
                  </CardContent>
                </Card>
              </Animation>
            </GridCell>
            <GridCell>
              <Animation name="fade-in-left" toggled={ this.state.toggled }>
                <Card shade="shade-3" size="small">
                  <CardContent separatorStyle="dotted">
                    <Heading textSize="headtitle">Fade in left</Heading>
                  </CardContent>
                  <CardContent separatorStyle="dotted">
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis vitae eligendi exercitationem quam, quo, blanditiis cupiditate tenetur dolores deleniti delectus molestiae recusandae omnis consequuntur sed neque!</Text>
                  </CardContent>
                </Card>
              </Animation>
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Animation/Animation'),
        ] } />
      </DocumentationContent>
    );
  }
}

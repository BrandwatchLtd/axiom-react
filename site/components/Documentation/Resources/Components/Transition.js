import React, { Component } from 'react';
import { Base, Icon, Transition, Button } from '@brandwatch/axiom-components';
import { colors } from '@brandwatch/axiom-materials';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <Base>
            <Transition activeIndex={ activeIndex } height="8rem" width="8rem">
              <Base style={ { height: '8rem', 'lineHeight': '8rem', backgroundColor: `rgb(${Object.values(colors.productNewHorizon)})` } } textCenter={ true } textSize="display2" textStrong={ true }>A</Base>
              <Base style={ { height: '8rem', 'lineHeight': '8rem', backgroundColor: `rgb(${Object.values(colors.productBlastOff)})` } } textCenter={ true } textSize="display2" textStrong={ true }>B</Base>
              <Base style={ { height: '8rem', 'lineHeight': '8rem', backgroundColor: `rgb(${Object.values(colors.productCrashCourse)})` } } textCenter={ true } textSize="display2" textStrong={ true }>C</Base>
              <Base style={ { height: '8rem', 'lineHeight': '8rem', backgroundColor: `rgb(${Object.values(colors.productCriticalMass)})` } } textCenter={ true } textSize="display2" textStrong={ true }>D</Base>
              <Base style={ { height: '8rem', 'lineHeight': '8rem', backgroundColor: `rgb(${Object.values(colors.productDeepThought)})` } } textCenter={ true } textSize="display2" textStrong={ true }>E</Base>
              <Base style={ { height: '8rem', 'lineHeight': '8rem', backgroundColor: `rgb(${Object.values(colors.productSereneSea)})` } } textCenter={ true } textSize="display2" textStrong={ true }>F</Base>
            </Transition>

          </Base>
          <Base space="x4" textCenter={ true }>
            <Button disabled={ activeIndex === 0 } onClick={ () => this.setState({ activeIndex: activeIndex - 1 }) } shape="circle" size="small" style="secondary">
              <Icon name="chevron-left" />
            </Button>

            <div style={ { display: 'inline-block', margin: '0  1rem' } }>{ activeIndex }</div>

            <Button disabled={ activeIndex === 5 } onClick={ () => this.setState({ activeIndex: activeIndex + 1 }) } shape="circle" size="small" style="secondary">
              <Icon name="chevron-right" />
            </Button>
          </Base>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Transition/Transition'),
        ] } />
      </DocumentationContent>
    );
  }
}

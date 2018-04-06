import React, { Component } from 'react';
import {
  TomGrid,
  TomGridItem,
  Button,
  ButtonIcon,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {

  constructor(props) {
    super(props);

    this.colours = ['#F498B7', '#E35A7A', '#A72E5E', '#9C73B2', '#90A0D6', '#3B74B7', '#5ACBDC', '#28B0C2', '#2E916F', '#80BE4C', '#C8C819', '#FAD000'];

    this.state = {
      gridItems: [
        <TomGridItem key={ 1 } ><div style={ { color: 'white', padding: '8px', backgroundColor: this.colours[Math.floor(Math.random() * this.colours.length)] } }>Grid Child 1</div></TomGridItem>,
        <TomGridItem key={ 2 } ><div style={ { color: 'white', padding: '8px', backgroundColor: this.colours[Math.floor(Math.random() * this.colours.length)] } }>Grid Child 2</div></TomGridItem>,
        <TomGridItem key={ 3 } ><div style={ { color: 'white', padding: '8px', backgroundColor: this.colours[Math.floor(Math.random() * this.colours.length)] } }>Grid Child 3</div></TomGridItem>,
      ],
    };

    this.addGridItem = this.addGridItem.bind(this);
  }

  addGridItem() {

    const divStyle = {
      backgroundColor: this.colours[Math.floor(Math.random() * this.colours.length)],
      color: 'white',
      padding: '8px',
    };

    const gridItems = this.state.gridItems;
    const numOfItems = this.state.gridItems.length;

    gridItems.push(<TomGridItem key={ numOfItems + 1 } ><div style={ divStyle }>Grid Child { numOfItems + 1 }</div></TomGridItem>);

    this.setState({
      gridItems,
    });
  }

  render() {

    const addItemStyle = {
      border: '1px dashed gray',
      padding: '5px',
      borderRadius: '5px',
      textAlign: 'center',
    };

    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <TomGrid>
            { this.state.gridItems }
            <div style={ addItemStyle }>
              <Button shape="circle" size="small" style="secondary">
                <ButtonIcon name="plus" onClick={ () => this.addGridItem() }/>
              </Button>
            </div>
            <TomGridItem></TomGridItem>
          </TomGrid>
        </DocumentationShowCase>
        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/TomGrid/TomGrid'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/TomGrid/TomGridItem'),
        ] } />
      </DocumentationContent>
    );
  }
}

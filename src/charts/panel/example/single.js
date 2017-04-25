import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  Panel,
  PanelHeader,
  PanelBody,
  Context,
  ContextMenu,
  ContextMenuItem,
  Dropdown,
  DropdownTarget,
  DropdownContent,
  Heading,
} from 'bw-axiom';
import ChartHeaderContent from './ChartHeaderContent';
import ChartBodyContent from './ChartBodyContent';

export default class PanelExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      PanelBody: PropTypes.shape({
        horizontalAlign: PropTypes.array.isRequired,
        verticalAlign: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
  };

  constructor() {
    super();

    this.state = {
      horizontalAlignment: 'start',
      verticalAlignment: 'start',
    };
  }

  handleHorizontalAlignmentSelect = (alignmentText) => {
    this.setState({
      horizontalAlignment: alignmentText,
    });
  }

  handleVerticalAlignmentSelect = (alignmentText) => {
    this.setState({
      verticalAlignment: alignmentText,
    });
  }

  render() {
    const { components } = this.props;
    const { horizontalAlignment, verticalAlignment } = this.state;
    const { PanelBody: { horizontalAlign, verticalAlign } } = components;

    return (
      <Example name="Singular Panel">
        <Heading>Default</Heading>
        <Snippet>
          <Panel>
            <PanelHeader>
              <ChartHeaderContent alignment="default alignment" snippetReplace={ true } />
            </PanelHeader>

            <PanelBody>
              <ChartBodyContent snippetReplace={ true } />
            </PanelBody>
          </Panel>
        </Snippet>

        <ButtonGroup>
          <Dropdown offset="start" position="right">
            <DropdownTarget>
              <Button style="secondary">Horizontal Alignments
                <ButtonIcon name="chevron-down"/>
              </Button>
            </DropdownTarget>

            <DropdownContent>
              <Context>
                <ContextMenu>
                  { horizontalAlign.values.map((alignment) =>
                    <ContextMenuItem
                        key={ alignment }
                        onClick={ () => { this.handleHorizontalAlignmentSelect(alignment); } }>
                      { alignment }</ContextMenuItem>
                  )}
                </ContextMenu>
              </Context>
            </DropdownContent>
          </Dropdown>
        </ButtonGroup>

        <Snippet>
          <Panel>
            <PanelHeader>
              <ChartHeaderContent
                  alignment={ horizontalAlignment }
                  alignmentText="when horizontally aligned with"
                  snippetReplace={ true } />
            </PanelHeader>

            <PanelBody horizontalAlign={ horizontalAlignment }>
              <ChartBodyContent snippetReplace={ true } />
            </PanelBody>
          </Panel>
        </Snippet>

        <ButtonGroup>
          <Dropdown offset="start" position="right">
            <DropdownTarget>
              <Button style="secondary">Vertical Alignments
                <ButtonIcon name="chevron-down"/>
              </Button>
            </DropdownTarget>

            <DropdownContent>
              <Context>
                <ContextMenu>
                  { verticalAlign.values.map((alignment) =>
                    <ContextMenuItem
                        key={ alignment }
                        onClick={ () => { this.handleVerticalAlignmentSelect(alignment); } }>
                      { alignment }</ContextMenuItem>
                  )}
                </ContextMenu>
              </Context>
            </DropdownContent>
          </Dropdown>
        </ButtonGroup>

        <Snippet>
          <Panel minimumHeight="20rem">
            <PanelHeader>
              <ChartHeaderContent
                  alignment={ verticalAlignment }
                  alignmentText="when vertically aligned with"
                  snippetReplace={ true } />
            </PanelHeader>

            <PanelBody verticalAlign={ verticalAlignment }>
              <ChartBodyContent snippetReplace={ true } />
              <ChartBodyContent snippetReplace={ true } />
            </PanelBody>
          </Panel>
        </Snippet>
      </Example>
    );
  }
}

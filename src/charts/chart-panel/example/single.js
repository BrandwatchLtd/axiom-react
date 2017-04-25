import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ChartPanel,
  ChartPanelHeader,
  ChartPanelBody,
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

export default class ChartPanelExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ChartPanelBody: PropTypes.shape({
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
    const { ChartPanelBody: { horizontalAlign, verticalAlign } } = components;

    return (
      <Example name="Singular ChartPanel">
        <Heading>Default</Heading>
        <Snippet>
          <ChartPanel>
            <ChartPanelHeader>
              <ChartHeaderContent alignment="default alignment" snippetReplace={ true } />
            </ChartPanelHeader>

            <ChartPanelBody>
              <ChartBodyContent snippetReplace={ true } />
            </ChartPanelBody>
          </ChartPanel>
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
          <ChartPanel>
            <ChartPanelHeader>
              <ChartHeaderContent
                  alignment={ horizontalAlignment }
                  alignmentText="when horizontally aligned with"
                  snippetReplace={ true } />
            </ChartPanelHeader>

            <ChartPanelBody horizontalAlign={ horizontalAlignment }>
              <ChartBodyContent snippetReplace={ true } />
            </ChartPanelBody>
          </ChartPanel>
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
          <ChartPanel minimumHeight="20rem">
            <ChartPanelHeader>
              <ChartHeaderContent
                  alignment={ verticalAlignment }
                  alignmentText="when vertically aligned with"
                  snippetReplace={ true } />
            </ChartPanelHeader>

            <ChartPanelBody verticalAlign={ verticalAlignment }>
              <ChartBodyContent snippetReplace={ true } />
              <ChartBodyContent snippetReplace={ true } />
            </ChartPanelBody>
          </ChartPanel>
        </Snippet>
      </Example>
    );
  }
}

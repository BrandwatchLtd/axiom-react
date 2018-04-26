import React, { Component } from 'react';
import {
  CheckBox,
  CheckBoxGroup,
  Grid,
  GridCell,
  RadioButton,
  RadioButtonGroup,
  TextArea,
  TextInput,
  TextInputButton,
  TextInputIcon,
  InlineValidation,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <TextInput
                  onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                  placeholder="Write in me"
                  size="medium" />
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase centered>
              <TextInput
                  onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                  placeholder="Write in me"
                  size="medium">
                <TextInputIcon align="left" name="magnify-glass" />
                <TextInputButton>Button</TextInputButton>
              </TextInput>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <InlineValidation message="There seems to be something wrong with your input">
                <TextInput
                    invalid
                    onChange={ (setValue, getValue, event) => setValue('TextInput', 'value', event.target.value) }
                    placeholder="Write in me"
                    size="medium" />
              </InlineValidation>
            </DocumentationShowCase>
          </GridCell>
        </Grid>


        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/TextInput'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/TextInputButton'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/TextInputIcon'),
        ] } />

        <DocumentationShowCase>
          <TextArea placeholder="Write in me" />
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/TextArea'),
        ] } />

        <Grid>
          <GridCell>
            <DocumentationShowCase>
              <CheckBoxGroup>
                <CheckBox name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</CheckBox>
                <CheckBox name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</CheckBox>
                <CheckBox name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</CheckBox>
              </CheckBoxGroup>
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase>
              <RadioButtonGroup>
                <RadioButton name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</RadioButton>
                <RadioButton name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</RadioButton>
                <RadioButton name="lorem" title="Lorem ipsum dolor sit amet">Lorem ipsum</RadioButton>
              </RadioButtonGroup>
            </DocumentationShowCase>
          </GridCell>
        </Grid>


        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/CheckBox'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/CheckBoxGroup'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/RadioButton'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Form/RadioButtonGroup'),
        ] } />
      </DocumentationContent>
    );
  }
}

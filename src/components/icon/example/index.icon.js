import React from 'react';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Icon from '../Icon';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export const title = 'Icon';
export const id = 'icon';
export const location = 'bw-axiom/components/icon';
export const components = [ Icon ];
export const hidden = true;

export const examples = [

  ({ queryParams }) => {
    return {
      name: `Icon - ${queryParams.iconId}`,
      snippet: <Icon name={ queryParams.iconId } size="xxxlarge" />,
    };
  },

  ({ queryParams }) => {
    return {
      name: 'Icon sizes',
      snippet: (
        <Grid snippetIgnore={ true } vAlign="middle">
          { Icon.__ax_propTypes.size.oneOf.map((size, index) =>
            <GridCell key={ index } shrink={ true } snippetIgnore={ true }>
              <Icon name={ queryParams.iconId } size={ size } />
            </GridCell>
          ) }
        </Grid>
      ),
    };
  },

  ({ queryParams }) => {
    return {
      name: 'Icon mixin',
      snippet: (
        <CodeTabset snippetSkip={ true }>
          <CodeSnippet language="scss">{`
            @import '../icon/mixins';
            @import '../icon/vars';

            .element::before {
              @include icon($fa-var-${queryParams.iconId});
            }
          `}</CodeSnippet>
        </CodeTabset>
      ),
    };
  },
];

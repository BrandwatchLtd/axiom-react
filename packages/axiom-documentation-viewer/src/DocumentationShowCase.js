import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';
import reactElementToJsxString from 'react-element-to-jsx-string';
import {
  AlertBar,
  Base,
  Card,
  CardContent,
  Cloak,
  Dropdown,
  DropdownContext,
  DropdownMenu,
  DropdownMenuItem,
  DropdownSource,
  DropdownTarget,
  Grid,
  GridCell,
  Icon,
  Link,
  List,
  ListItem,
} from '@brandwatch/axiom-components';
import DocumentationCodeSnippet from './DocumentationCodeSnippet';
import './DocumentationShowCase.css';

const hasCustomPropertySupport =
  typeof window !== 'undefined' &&
  window.CSS &&
  CSS.supports('color', 'var(--primary)');

export default class DocumentationShowCase extends Component {
  static propTypes = {
    centered: PropTypes.bool,
    centeredHorizontal: PropTypes.bool,
    centeredVertical: PropTypes.bool,
    children: PropTypes.node,
    configurations: PropTypes.array,
    description: PropTypes.string,
    height: PropTypes.string,
    hideCode: PropTypes.bool,
    hidePreview: PropTypes.bool,
    minHeight: PropTypes.string,
    onRefresh: PropTypes.func,
  };

  static contextTypes = {
    applyComponentProps: PropTypes.func.isRequired,
  };

  static defaultProps = {
    minHeight: '12rem',
  };

  constructor(props) {
    super(props);
    this.state = {
      isCodeVisisble: false,
      theme: undefined,
    };
  }

  render() {
    const {
      centered,
      centeredHorizontal = centered,
      centeredVertical = centered,
      children,
      configurations,
      description,
      height,
      hideCode,
      hidePreview,
      minHeight,
      onRefresh,
    } = this.props;

    const { isCodeVisisble, theme } = this.state;
    const showCase = this.context.applyComponentProps(children);
    const style = {
      height,
      minHeight: !height && minHeight,
      alignItems: centeredHorizontal && 'center',
      justifyContent: centeredVertical && 'center',
    };

    let snippet;
    let error;

    if (!hideCode && (hidePreview || isCodeVisisble)) {
      try {
        snippet = (
          Children.map(showCase, child =>
            reactElementToJsxString(child, {
              showDefaultProps: false,
              filterProps: ['key'],
            })
          ) || []
        ).join('\n');
      } catch (e) {
        error = e;
      }
    }

    return (
      <Card border space="x8" theme={theme}>
        <CardContent separatorStyle="dotted" size="large">
          <Base cloak={hidePreview || isCodeVisisble}>
            {!centeredHorizontal && !centeredVertical ? (
              <div style={style}>{showCase}</div>
            ) : (
              <div className="ax-documentation-viewer__showcase-container">
                <div
                  className="ax-documentation-viewer__showcase"
                  style={style}
                >
                  <div>{showCase}</div>
                </div>
              </div>
            )}
          </Base>

          {snippet && (
            <Cloak
              className="ax-documentation-viewer__showcase-snippet"
              invisible={!hidePreview && !isCodeVisisble}
              theme="night"
            >
              <DocumentationCodeSnippet>{snippet}</DocumentationCodeSnippet>
            </Cloak>
          )}
        </CardContent>

        {error && (
          <AlertBar type="error">
            Failed to render code snippet: {error.toString()}
          </AlertBar>
        )}

        {description && (
          <CardContent separatorStyle="dotted" textColor="subtle">
            {description}
          </CardContent>
        )}

        {(!hideCode || configurations) && !error && (
          <CardContent size="small">
            <Grid responsive={false} verticalAlign="middle">
              <GridCell>
                {(onRefresh ||
                  configurations ||
                  (!hidePreview && hasCustomPropertySupport)) && (
                  <List style="inline">
                    {!hidePreview && hasCustomPropertySupport && (
                      <ListItem>
                        <Link
                          onClick={() => this.setState({ theme: 'day' })}
                          style={theme === 'day' ? 'normal' : 'subtle'}
                        >
                          <Icon inline name="sun" />
                        </Link>{' '}
                        /{' '}
                        <Link
                          onClick={() => this.setState({ theme: 'night' })}
                          style={theme === 'night' ? 'normal' : 'subtle'}
                        >
                          <Icon inline name="moon" />
                        </Link>
                      </ListItem>
                    )}

                    {configurations && (
                      <ListItem>
                        <Dropdown flip="mirror" showArrow>
                          <DropdownTarget>
                            <Link style="subtle">
                              <Icon name="customise" />
                            </Link>
                          </DropdownTarget>

                          <DropdownSource>
                            <DropdownContext>
                              {configurations.map((items, index) => (
                                <DropdownMenu key={index}>
                                  {items.map(({ name, ...props }) => (
                                    <DropdownMenuItem {...props} key={name}>
                                      {name}
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenu>
                              ))}
                            </DropdownContext>
                          </DropdownSource>
                        </Dropdown>
                      </ListItem>
                    )}

                    {onRefresh && (
                      <ListItem>
                        <Link onClick={onRefresh} style="subtle">
                          <Icon name="retweet" />
                        </Link>
                      </ListItem>
                    )}
                  </List>
                )}
              </GridCell>

              {!hideCode && (
                <GridCell none>
                  <Link
                    onClick={() =>
                      this.setState(({ isCodeVisisble }) => ({
                        isCodeVisisble: !isCodeVisisble,
                      }))
                    }
                    textCase="upper"
                    textColor="subtle"
                    textSize="small"
                    textStrong
                  >
                    {isCodeVisisble ? 'Hide' : 'Show'} code
                  </Link>
                </GridCell>
              )}
            </Grid>
          </CardContent>
        )}
      </Card>
    );
  }
}

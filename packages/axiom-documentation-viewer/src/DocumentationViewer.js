import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Switch, Redirect, Route } from "react-router";
import classnames from "classnames";
import {
  Base,
  List,
  ListItem,
  Heading,
  Icon,
  Link,
} from "@brandwatch/axiom-components";
import DocumentationMenu from "./DocumentationMenu";
import DocumentationMenuItem from "./DocumentationMenuItem";
import "./DocumentationViewer.css";

export default class DocumentationViewer extends Component {
  static propTypes = {
    Landing: PropTypes.func,
    config: PropTypes.arrayOf(
      PropTypes.shape({
        Component: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    path: PropTypes.string,
  };

  static defaultProps = {
    path: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };
  }

  render() {
    const { isSidebarOpen } = this.state;
    const { Landing, config, path, ...rest } = this.props;
    const classes = classnames("ax-documentation-viewer", {
      "ax-documentation-viewer--sidebar-open": isSidebarOpen,
    });

    return (
      <Base {...rest} className={classes}>
        <Base className="ax-documentation-viewer__sidebar">
          <DocumentationMenu>
            {config.map(({ id, name }) => (
              <Route
                children={({ match }) => (
                  <DocumentationMenuItem
                    active={!!match}
                    onClick={() => this.setState({ isSidebarOpen: false })}
                    to={`${path}/${id}`}
                  >
                    {name}
                  </DocumentationMenuItem>
                )}
                key={id}
                path={`${path}/${id}`}
              />
            ))}
          </DocumentationMenu>
        </Base>

        <Base className="ax-documentation-viewer__body">
          <Switch>
            {Landing && <Route component={Landing} exact path={path} />}

            {config.map(({ id, name, Component }) => (
              <Route
                key={id}
                path={`${path}/${id}`}
                render={() => (
                  <Fragment>
                    <Base space="x8">
                      <List style="inline" visibleUntil="medium">
                        <ListItem>
                          <Link
                            onClick={() =>
                              this.setState({ isSidebarOpen: true })
                            }
                            style="body"
                          >
                            <Icon name="hamburger" size="1.75rem" />
                          </Link>
                        </ListItem>

                        <ListItem>
                          <Heading textSize="display1" textStrong>
                            {name}
                          </Heading>
                        </ListItem>
                      </List>

                      <Heading
                        hiddenUntil="medium"
                        textSize="display1"
                        textStrong
                      >
                        {name}
                      </Heading>
                    </Base>

                    <Component />
                  </Fragment>
                )}
              />
            ))}

            {!Landing && config[0] && (
              <Redirect to={`${path}/${config[0].id}`} />
            )}
          </Switch>
        </Base>

        <Base
          className="ax-documentation-viewer__mask"
          onClick={() => this.setState({ isSidebarOpen: false })}
        />
      </Base>
    );
  }
}

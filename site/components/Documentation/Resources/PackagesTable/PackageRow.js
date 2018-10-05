import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Badge,
  Cloak,
  Heading,
  Dropdown,
  DropdownContext,
  DropdownMenu,
  DropdownMenuItem,
  DropdownSource,
  DropdownTarget,
  IconButton,
  Image,
  Link,
  Paragraph,
  TableCell,
  TableRow,
} from '@brandwatch/axiom-components';

export default class PackageRow extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    to: PropTypes.string,
  };

  static contextTypes = {
    push: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { push } = this.context;
    const { isOpen } = this.state;
    const { description, name, to } = this.props;

    return (
      <TableRow cloakContainer hover={ isOpen }>
        <TableCell>
          <Heading space="x1" textStrong>
            { to && (
              <Link
                  Component={ RouterLink }
                  style="subtle"
                  to={ to }>@brandwatch/{ name }</Link>
            ) }

            { !to && (
              <Fragment>
                @brandwatch/{ name } • <Badge
                    color="paradise-lost">Awaiting docs</Badge>
              </Fragment>
            ) }
          </Heading>

          <Paragraph space="x1" textColor="subtle">
            { description }
          </Paragraph>
        </TableCell>

        <TableCell>
          <Link href={ `https://www.npmjs.com/package/@brandwatch/${name}` }>
            <span style={ { display: 'inline-block' } }>
              <Image
                  height="18"
                  maxWidth="auto"
                  src={ `https://badge.fury.io/js/@brandwatch%2F${name}.svg` } />
            </span>
          </Link>
        </TableCell>

        <TableCell>
          <Dropdown
              flip="mirror"
              onRequestClose={ () => this.setState({ isOpen: false }) }
              onRequestOpen={ () => this.setState({ isOpen: true }) }>
            <DropdownTarget>
              <Cloak invisible={ !isOpen }>
                <IconButton
                    name="ellipsis"
                    size="small" />
              </Cloak>
            </DropdownTarget>

            <DropdownSource>
              <DropdownContext>
                { to && (
                  <DropdownMenu>
                    <DropdownMenuItem onClick={ () => push(to) }>
                      Read package docs
                    </DropdownMenuItem>
                  </DropdownMenu>
                ) }

                <DropdownMenu>
                  <DropdownMenuItem
                      onClick={ () => window.open(`https://github.com/BrandwatchLtd/axiom/tree/master/packages/${name}`, '_blank') }>
                    See package on Github
                  </DropdownMenuItem>

                  <DropdownMenuItem
                      onClick={ () => window.open(`https://www.npmjs.com/package/@brandwatch/${name}`, '_blank') }>
                    See package on NPM
                  </DropdownMenuItem>
                </DropdownMenu>
              </DropdownContext>
            </DropdownSource>
          </Dropdown>
        </TableCell>
      </TableRow>
    );
  }
}

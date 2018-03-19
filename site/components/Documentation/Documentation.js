import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import {
  Base,
  Grid,
  GridCell,
  Link,
  Menu,
  MenuItem,
} from '@brandwatch/axiom-components';
import AxiomTitle from '../AxiomTitle/AxiomTitle';
import Resources from './Resources';
import Charts from './Resources/Charts';
import Components from './Resources/Components';
import Composites from './Resources/Composites';
import Materials from './Resources/Materials';
import './Documentation.css';

export default class Documentation extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  static childContextTypes = {
    push: PropTypes.func.isRequired,
  };

  getChildContext() {
    return {
      push: this.props.history.push,
    };
  }

  render() {
    const { push } = this.props.history;

    return (
      <div className="si-documentation">
        <Base className="si-documentation__header" sticky="0">
          <Grid responsive={ false } verticalAlign="end">
            <GridCell verticalAlign="start">
              <Link Component={ RouterLink } style="inherit" to="/">
                <AxiomTitle size="1.5rem" />
              </Link>
            </GridCell>

            <GridCell shrink>
              <Menu size="medium">
                <Route children={ ({ match }) => (
                  <MenuItem
                      active={ !!match }
                      onClick={ () => push('/docs/packages/') }>Packages</MenuItem>
                ) } path="/docs/packages/" />
              </Menu>
            </GridCell>
          </Grid>
        </Base>

        <div className="si-documentation__body">
          <Switch>
            <Route component={ Charts } path="/docs/packages/axiom-charts" />
            <Route component={ Components } path="/docs/packages/axiom-components" />
            <Route component={ Composites } path="/docs/packages/axiom-composites" />
            <Route component={ Materials } path="/docs/packages/axiom-materials" />
            <Route component={ Resources } />
          </Switch>
        </div>
      </div>
    );
  }
}

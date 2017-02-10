import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Grid, GridCell, Progress } from 'bw-axiom';

const MIN_TIMEOUT = 200;
const MAX_TIMEOUT = 800;
const TRANSITION_PAUSE = 5;

const initialState = {
  percent: null,
  ticks: 0,
};

export default class ProgressTransitionsExample extends Component {

  static propTypes = {
    components: PropTypes.shape({
      ProgressInfinite: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  componentDidMount() {
    this.start();
  }

  restart() {
    this.setState({
      ...initialState,
    });
    this.start();
  }

  start() {
    this.tickTimeout = setTimeout(this.tick.bind(this),
      Math.random() * (MAX_TIMEOUT - MIN_TIMEOUT) + MIN_TIMEOUT);
  }

  tick() {
    let { ticks, percent } = this.state;
    const rand = parseInt(Math.random() * 20);
    ticks = ticks + 1;

    if (ticks === TRANSITION_PAUSE) {
      percent = 0;
    } else if (ticks > TRANSITION_PAUSE) {
      percent = Math.min(percent + rand, 100);
    }

    this.setState({
      ticks,
      percent,
    });

    if (percent >= 100) {
      setTimeout(this.restart.bind(this), 5000);
    } else {
      this.start();
    }
  }

  render() {
    const { percent } = this.state;
    const { components } = this.props;
    const { ProgressInfinite: { size } } = components;

    return (
      <Example name="Progress transitions">
        <Grid>
          { size.values.map((size) =>
            <GridCell key={ size } shrink={ true } snippetIgnore={ true }>
              <Progress percent={ percent } size={ size }/>
            </GridCell>
          ) }
        </Grid>
        <Snippet renderSkip={ true }>
          { size.values.map((size) =>
            <Progress key={ size } percent={ percent } size={ size }/>
          ) }
        </Snippet>
      </Example>
    );
  }
}

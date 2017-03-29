import React, { Component, PropTypes } from 'react';
import { Snippet } from 'style-guide';
import { Base, Grid, GridCell, Progress } from 'bw-axiom';

const MIN_TIMEOUT = 200;
const MAX_TIMEOUT = 800;
const TRANSITION_PAUSE = 5;

const initialState = {
  error: false,
  percent: null,
  ticks: 0,
};

export default class ProgressTransitions extends Component {

  static propTypes = {
    errorPercent: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.string),
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

  componentWillUnmount() {
    clearTimeout(this.tickTimeout);
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
    const { errorPercent } = this.props;
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
      this.tickTimeout = setTimeout(this.restart.bind(this), 7000);
    } else if (percent >= errorPercent) {
      this.setState({ error: true });
      this.tickTimeout = setTimeout(this.restart.bind(this), 7000);
    } else {
      this.start();
    }
  }

  render() {
    const { sizes } = this.props;
    const { error, percent } = this.state;
    return (
      <Base>
        <Grid>
          { sizes.map((size) =>
            <GridCell key={ size } shrink={ true }>
              <Progress
                  complete={ percent === 100 }
                  error={ error }
                  percent={ percent }
                  size={ size } />
            </GridCell>
          ) }
        </Grid>
        <Snippet renderSkip={ true }>
          { sizes.map((size) =>
            <Progress
                complete={ percent === 100 }
                error={ error }
                key={ size }
                percent={ percent }
                size={ size } />
          ) }
        </Snippet>
      </Base>
    );
  }
}

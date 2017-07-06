import PropTypes from 'prop-types';
import { Component } from 'react';

function cancelable(fn) {
  let cancelled;

  function wrapped(...args) {
    if (!cancelled) {
      return fn(...args);
    }
  }

  wrapped.cancel = () => cancelled = true;

  return wrapped;
}

export default class ImageFallback extends Component {
  static propTypes = {
    children: PropTypes.node,
    fallback: PropTypes.node,
    src: PropTypes.string,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      useFallback: false,
    };
  }

  componentDidMount() {
    const { fallback, src, onError, onLoad } = this.props;

    if (src !== undefined && fallback !== undefined) {
      this.image = new window.Image();
      this.image.src = src;
      this.image.onload = cancelable((...args) => {
        this.setState(({ useFallback }) => useFallback && ({ useFallback: false }));
        if (onLoad) onLoad(...args);
      });

      this.image.onerror = cancelable((...args) => {
        this.setState(({ useFallback }) => !useFallback && ({ useFallback: true }));
        if (onError) onError(...args);
      });
    }
  }

  componentWillUpdate(nextProps) {
    if (this.image && nextProps.src !== this.props.src) {
      this.image.src = nextProps.src;
    }
  }

  componentWillUnmount() {
    if (this.image) {
      this.image.onload.cancel();
      this.image.onerror.cancel();
    }
  }

  render() {
    const { children, fallback, src } = this.props;
    const { useFallback } = this.state;

    if ((!src || useFallback) && fallback) {
      return fallback;
    }

    return children;
  }
}

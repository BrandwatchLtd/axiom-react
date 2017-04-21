import { Component, PropTypes } from 'react';

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
  };

  constructor(props) {
    super(props);
    this.state = {
      useFallback: false,
    };
  }

  componentDidMount() {
    const { fallback, src, onError } = this.props;

    if (src !== undefined && fallback !== undefined) {
      this.image = new window.Image();
      this.image.src = src;
      this.image.onerror = cancelable((...args) => {
        this.setState({ useFallback: true });
        if (typeof onError === 'function') {
          onError(...args);
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.image) {
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

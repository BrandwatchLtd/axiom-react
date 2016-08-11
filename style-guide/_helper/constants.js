const config = {
  __INCLUDE_CSS__: false,
}

try {
  config.__INCLUDE_CSS__ = __INCLUDE_CSS__;
} catch(e) {}

module.exports = config;

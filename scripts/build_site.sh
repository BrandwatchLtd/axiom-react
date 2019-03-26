#!/bin/bash
set -e

export BABEL_ENV=static

webpack --config webpack.static.config.js --display-error-details

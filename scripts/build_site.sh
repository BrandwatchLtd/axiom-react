#!/bin/bash
set -e

webpack --config ./webpack.static.config.js
babel-node ./scripts/process_flags --presets env

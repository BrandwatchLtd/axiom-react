#!/bin/bash
set -e

export BABEL_ENV=build
npx babel-node ./scripts/process_flags --presets env

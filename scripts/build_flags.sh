#!/bin/bash
set -e

npx babel-node ./scripts/process_flags --presets @babel/preset-env

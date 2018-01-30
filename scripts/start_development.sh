#!/bin/bash
set -e

lerna exec --parallel -- "rm -rf dist && ln -s src dist"
webpack-dev-server

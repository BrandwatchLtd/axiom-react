#!/bin/bash
set -e

# We only want to publish to npm when on master
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    exit 0
fi

lerna publish --conventional-commits --yes

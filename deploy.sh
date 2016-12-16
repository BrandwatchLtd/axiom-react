#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# We only want to deploy to gh-pages when on master
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    exit 0
fi

git config --global user.email "$COMMIT_AUTHOR_EMAIL"
git config --global user.name "$COMMIT_AUTHOR_NAME"

yarn gh-pages

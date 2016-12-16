#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

# Pull requests and commits to other branches shouldn't be deployed
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy"
    exit 0
fi

# Git repository data
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into static/
git clone $REPO static
cd static
# Create a new empty branch if gh-pages doesn't exist yet
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

# Create static files
BASENAME_ENV="'/axiom/'" NODE_ENV=production BABEL_ENV=production webpack --config webpack.static.config.js

cd static

git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# If there are no changes to the static files we exit
if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

# Commit the changes
git add --all .
git commit -m "Deploy to GitHub Pages: ${SHA}"

openssl aes-256-cbc -K $encrypted_5890ad0da7e1_key -iv $encrypted_5890ad0da7e1_iv -in ../publish-key.enc -out publish-key -d
chmod 600 publish-key
eval "$(ssh-agent -s)"
ssh-add publish-key

# Push to remote
git push $SSH_REPO $TARGET_BRANCH

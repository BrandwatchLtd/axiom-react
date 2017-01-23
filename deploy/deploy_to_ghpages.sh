#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# We only want to deploy to gh-pages when on master
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    exit 0
fi

openssl aes-256-cbc -K $encrypted_5890ad0da7e1_key -iv $encrypted_5890ad0da7e1_iv -in ./deploy/publish-key.enc -out ./deploy/publish-key -d
chmod 600 ./deploy/publish-key
eval "$(ssh-agent -s)"
ssh-add ./deploy/publish-key

git config --global user.email "$COMMIT_AUTHOR_EMAIL"
git config --global user.name "$COMMIT_AUTHOR_NAME"

yarn gh-pages

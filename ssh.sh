#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# We only set the ssh-key when on master
# if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
#     exit 0
# fi

openssl aes-256-cbc -K $encrypted_5890ad0da7e1_key -iv $encrypted_5890ad0da7e1_iv -in publish-key.enc -out publish-key -d
chmod 600 publish-key
eval "$(ssh-agent -s)"
ssh-add publish-key

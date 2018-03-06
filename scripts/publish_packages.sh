#!/bin/bash
set -e

openssl aes-256-cbc -K $encrypted_7c2951e40ae6_key -iv $encrypted_7c2951e40ae6_iv -in github_deploy_key.enc -out github_deploy_key -d
chmod 600 github_deploy_key
eval `ssh-agent -s`
ssh-add github_deploy_key

git config --global user.email "ci@brandwatch.com"
git config --global user.name "Brandwatch (via TravisCI)"

npx lerna publish --conventional-commits --yes

# Workaround https://github.com/travis-ci/travis-ci/issues/8082
ssh-agent -k

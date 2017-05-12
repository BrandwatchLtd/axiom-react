#!/usr/bin/env bash

set -e # Exit with nonzero exit code if anything fails

STORAGE_BUCKET=axiom.bwcom.io

# We only want to deploy to gcp when on master
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    exit 0
fi

curl ci-utils.bwcom.io/gcloud/install | bash
curl ci-utils.bwcom.io/gcloud/auth | bash

yarn build:css

gsutil \
  -h "Content-Encoding:gzip" \
  -h "Cache-Control:public,max-age=315360000" \
  cp -r dist/*.css gs://$STORAGE_BUCKET

# Set public access to bucket
gsutil acl -r ch -u AllUsers:R gs://$STORAGE_BUCKET

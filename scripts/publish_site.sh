#!/usr/bin/env bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    exit 0
fi

curl ci-utils.bwcom.io/gcloud/install | bash
curl ci-utils.bwcom.io/gcloud/auth | bash

cd public;

# selectively clear the bucket, gsutil throws if it's already empty
! gsutil -m rm -fr gs://$STORAGE_BUCKET/docs
! gsutil -m rm -fr gs://$STORAGE_BUCKET/assets
! gsutil rm -f gs://$STORAGE_BUCKET/index.html

# selectively copy everything into the bucket
gsutil cp index.html gs://$STORAGE_BUCKET
gsutil -m cp -r assets gs://$STORAGE_BUCKET
gsutil -m cp -r docs gs://$STORAGE_BUCKET

# set the index html as the default, and forward all errors to the app
gsutil -m web set -m index.html -e index.html gs://$STORAGE_BUCKET

# Set public access to bucket
gsutil -m acl -r ch -u AllUsers:R gs://$STORAGE_BUCKET

# Headers on everything in the bucket
gsutil -m setmeta -h "Cache-Control:max-age=31536000" gs://$STORAGE_BUCKET/assets/**

# GZIP Headers
gsutil -m setmeta -h "Content-Encoding:gzip" gs://$STORAGE_BUCKET/**.js
gsutil -m setmeta -h "Content-Encoding:gzip" gs://$STORAGE_BUCKET/**.css
gsutil -m setmeta -h "Content-Encoding:gzip" gs://$STORAGE_BUCKET/**.html

# Override headers for html files
gsutil -m setmeta \
  -h "Content-Type:text/html" \
  -h "Cache-Control:no-cache, max-age=0" \
  gs://$STORAGE_BUCKET/**.html

#!/usr/bin/env bash
set -e

rsync -r assets storybook-static

cd storybook-static;

# delete everything in bucket gsutil throws if it's already empty
! gsutil -m rm -fr gs://axiom.platform-prod.gcp0.bwcom.net/**


# copy everything into bucket
gsutil -m cp -r . gs://axiom.platform-prod.gcp0.bwcom.net

# set the index html as the default, and forward all errors to the app
gsutil -m web set -m index.html -e index.html gs://axiom.platform-prod.gcp0.bwcom.net

# Set public access to bucket
gsutil -m acl -r ch -u AllUsers:R gs://axiom.platform-prod.gcp0.bwcom.net

# Set assests to cache for 1 year
gsutil -m setmeta -h "Cache-Control:max-age=31536000" gs://axiom.platform-prod.gcp0.bwcom.net/assets/**
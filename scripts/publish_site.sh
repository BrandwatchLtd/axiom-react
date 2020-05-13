#!/usr/bin/env bash
set -e

cd public;

# selectively clear the bucket, gsutil throws if it's already empty
! gsutil -m rm -fr gs://axiom.platform-prod.gcp0.bwcom.net/docs
! gsutil -m rm -fr gs://axiom.platform-prod.gcp0.bwcom.net/assets
! gsutil rm -f gs://axiom.platform-prod.gcp0.bwcom.net/index.html

# selectively copy everything into the bucket
gsutil cp index.html gs://axiom.platform-prod.gcp0.bwcom.net
gsutil -m cp -r assets gs://axiom.platform-prod.gcp0.bwcom.net
gsutil -m cp -r docs gs://axiom.platform-prod.gcp0.bwcom.net

# set the index html as the default, and forward all errors to the app
gsutil -m web set -m index.html -e index.html gs://axiom.platform-prod.gcp0.bwcom.net

# Set public access to bucket
gsutil -m acl -r ch -u AllUsers:R gs://axiom.platform-prod.gcp0.bwcom.net

# Headers on everything in the bucket
gsutil -m setmeta -h "Cache-Control:max-age=31536000" gs://axiom.platform-prod.gcp0.bwcom.net/assets/**

# GZIP Headers
gsutil -m setmeta -h "Content-Encoding:gzip" gs://axiom.platform-prod.gcp0.bwcom.net/**.js
gsutil -m setmeta -h "Content-Encoding:gzip" gs://axiom.platform-prod.gcp0.bwcom.net/**.css
gsutil -m setmeta -h "Content-Encoding:gzip" gs://axiom.platform-prod.gcp0.bwcom.net/**.html

# Override headers for html files
gsutil -m setmeta \
  -h "Content-Type:text/html" \
  -h "Cache-Control:no-cache, max-age=0" \
  gs://axiom.platform-prod.gcp0.bwcom.net/**.html

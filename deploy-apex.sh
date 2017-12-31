#!/bin/bash

case "$1" in
  all)
    aws s3 sync app s3://$2/ --delete \
      --exclude "src/*" \
      --exclude ".git/*" \
      --exclude "node_modules/*" \
      --exclude "package.json" \
      --exclude "webpack.config.js"
    ;;
  file)
    aws s3 cp app/$2 s3://$2/$2
    ;;
  *)
    echo $"Usage: $0 {all | file}"
    exit 1
  
esac

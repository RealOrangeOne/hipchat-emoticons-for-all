#!/usr/bin/bash

set -e

echo "Building Firefox Extension..."
cd firefox/
jpm xpi --check-memory --profile-memory
cd -

echo "Building Chrome Extension..."
crx pack chrome -o 'chrome/hipchat-emoticons-for-all.crx' -p 'chrome/key.pem'

echo "Zipping Chrome Extension..."
cd chrome
zip 'release.zip' -1 -9 -T 'hipchat-emoticons-for-all.crx' 'manifest.json' 'data/*'
cd -

#!usr/bin/bash

set -e

echo "Building Firefox Package..."
env/bin/python3 firefox/build-package.py

echo "Building Chrome Manifest..."
env/bin/python3 chrome/build-manifest.py
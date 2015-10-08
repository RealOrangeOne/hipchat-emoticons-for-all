#!/usr/bin/bash

set -e

cd firefox/
jpm run -b /usr/bin/firefox

echo "Exiting..."
cd -

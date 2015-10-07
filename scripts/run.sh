#!/usr/bin/bash

set -e

bash scripts/build-js.sh
bash scripts/distribute.sh

cd firefox/
jpm run -b /usr/bin/firefox

echo "Exiting..."
cd -

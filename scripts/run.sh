#!/usr/bin/bash

set -e

npm run lint
bash scripts/build-js.sh
bash scripts/distribute.sh

cd firefox/
jpm run -b /usr/bin/firefox

echo "Exiting..."
cd -
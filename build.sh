#!/usr/bin/bash

set -e

pyvenv-3.4 env
env/bin/pip install -r requirements.txt

npm install
npm run build

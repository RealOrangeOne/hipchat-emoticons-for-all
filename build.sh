#!/bin/bash

set -e

# python
pyvenv-3.4 env
env/bin/pip install -r requirements.txt

# npm
npm install
npm run build

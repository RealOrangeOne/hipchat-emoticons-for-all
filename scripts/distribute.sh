#!/usr/bin/bash

set -e

echo "Distributing Files..."
rm -rf firefox/data/* chrome/data/*
cp -rf build/* firefox/data/
cp -rf build/* chrome/data/
rm -rf build/*
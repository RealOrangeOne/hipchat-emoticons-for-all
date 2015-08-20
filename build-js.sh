#!/usr/bin/bash

cp -r src/* build/
rm -rf build/injections/*
mkdir -p build/src/injections
for f in src/injections/*; do uglifyjs $f --compress --mangle -o build/$f; done
cp build/src/injections/* build/injections/
rm -rf build/src
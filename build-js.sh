#!/usr/bin/bash

cp -r src/* build/
rm -rf build/injections/*
mkdir -p build/src/injections
for f in src/injections/*; do uglifyjs "src/image-decoder.js" "src/lib/jquery.js" $f --compress --screw-ie8 --define --stats --keep-fnames -o build/$f; done
cp -rp build/src/* build/
rm -rf build/src
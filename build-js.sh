#!/usr/bin/bash

cp -r src/lib/* build/lib/
cp -r src/decoder.json build/
rm -rf build/injections/*
mkdir -p build/src/injections

uglifyjs build/image-decoder.js --compress --screw-ie8 --define --keep-fnames -o build/image-decoder.js
for f in src/injections/*; do uglifyjs "build/image-decoder.js" "src/lib/jquery.js" $f --compress --screw-ie8 --define --stats --keep-fnames -o build/$f; done

cp -rp build/src/* build/
rm -rf build/src
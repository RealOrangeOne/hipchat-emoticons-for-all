#!/bin/bash
# Build script for firefox and chrome plugins


function build_firefox {
    echo "Building Firefox extension..."
}

function build_chrome {
    echo "Building Chrome extension..."
}

if [ "$1" == "firefox" ]; then
    build_firefox
elif [ "$1" == "chrome" ]; then
    build_chrome
else
    build_firefox
    build_chrome
fi
